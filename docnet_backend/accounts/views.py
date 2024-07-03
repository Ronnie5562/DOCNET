from accounts.tokens import generate_token
from rest_framework.views import APIView
from accounts.serializers import UserSerializer
from django.shortcuts import redirect
from django.contrib.auth import get_user_model
from rest_framework import generics, permissions
from django.utils.encoding import force_str
from accounts.email_services import EmailService
from django.utils.http import urlsafe_base64_decode
from rest_framework_simplejwt.authentication import JWTAuthentication


email_service = EmailService()


class ListCreateUserView(generics.ListCreateAPIView):
    """View to create/list users"""
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    def perform_create(self, serializer):
        """Create a new user"""
        user = serializer.save()

        # Welcome email
        email_service.send_welcome_email(user)
        print('Welcome email sent!')

        # Account confirmation Email
        email_service.send_account_verification_email(self.request, user)
        print('Account confirmation email sent!')


class DetailUserView(generics.RetrieveAPIView):
    """APIView to retrieve a user"""
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()


class ManageProfileView(generics.RetrieveUpdateDestroyAPIView):
    """APIView to manage the authenticated user profile"""
    serializer_class = UserSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Restricts users to manage only their own profile"""
        return self.request.user


class ActivateAccountAPIView(APIView):
    def get(self, request, uidb64, token):
        User = get_user_model()
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            myuser = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            myuser = None

        if myuser is not None and generate_token.check_token(myuser, token):
            myuser.is_active = True
            myuser.save()
            # Change to frontend signin url
            return redirect('https://google.com')
        else:
            # Change to a frontend page that says activation link is invalid
            # And provide a link to resend the activation link to their email
            return redirect('https://facebook.com')
