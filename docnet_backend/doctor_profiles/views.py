from django.http import JsonResponse
from rest_framework import generics, permissions
from doctor_profiles.models import Doctor
from doctor_profiles.serializers import (
    DoctorProfileListSerializer,
    DoctorProfileDetailSerializer
)
from rest_framework_simplejwt.authentication import JWTAuthentication


class ProfileListView(generics.ListAPIView):
    """View to list Doctor profiles"""
    serializer_class = DoctorProfileListSerializer
    queryset = Doctor.objects.all()


class DetailProfileView(generics.RetrieveAPIView):
    """APIView to retrieve a user"""
    serializer_class = DoctorProfileDetailSerializer
    queryset = Doctor.objects.all()


class ManageProfileView(generics.RetrieveUpdateDestroyAPIView):
    """APIView to manage the authenticated user profile"""
    serializer_class = DoctorProfileDetailSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Restricts users to manage only their own profile"""
        return self.request.user.profile

