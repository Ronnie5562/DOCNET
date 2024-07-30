from rest_framework import generics, permissions
from doctor_profiles.models import Doctor
from doctor_profiles.serializers import (
    DoctorProfileListSerializer,
    DoctorProfileDetailSerializer
)
from rest_framework_simplejwt.authentication import JWTAuthentication
from utils.pagination import StandardResultsSetPagination


class DoctorsListView(generics.ListAPIView):
    """View to return many Doctor Card details"""
    serializer_class = DoctorProfileListSerializer
    pagination_class = StandardResultsSetPagination
    queryset = Doctor.objects.all()


class DoctorCardView(generics.RetrieveAPIView):
    """View to return one Doctor Card details"""
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
