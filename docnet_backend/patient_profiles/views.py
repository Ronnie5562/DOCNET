from rest_framework import generics, permissions
from patient_profiles.models import Patient
from patient_profiles.serializers import (
    PatientProfileListSerializer,
    PatientProfileDetailSerializer
)
from rest_framework_simplejwt.authentication import JWTAuthentication


class ProfileListView(generics.ListAPIView):
    """View to list Patient profiles"""
    serializer_class = PatientProfileListSerializer
    queryset = Patient.objects.all()


class DetailProfileView(generics.RetrieveAPIView):
    """APIView to retrieve a user"""
    serializer_class = PatientProfileDetailSerializer
    queryset = Patient.objects.all()


class ManageProfileView(generics.RetrieveUpdateDestroyAPIView):
    """APIView to manage the authenticated user profile"""
    serializer_class = PatientProfileDetailSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Restricts users to manage only their own profile"""
        return self.request.user.profile
