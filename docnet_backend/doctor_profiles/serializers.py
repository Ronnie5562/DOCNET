from datetime import timedelta
from django.utils import timezone
from rest_framework import serializers
from profiles.serializers import (
    ProfileListSerializer,
    ProfileDetailSerializer,
    DocumentSerializer
)
from doctor_profiles.models import Doctor, Document
from appointments.models import Appointment


class DoctorDocumentSerializer(DocumentSerializer):
    class Meta(DocumentSerializer.Meta):
        model = Document


class DoctorProfileListSerializer(ProfileListSerializer):
    num_of_patients = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()

    class Meta(ProfileListSerializer.Meta):
        model = Doctor
        fields = ProfileListSerializer.Meta.fields + (
            'speciality',
            'years_of_experience',
            'num_of_patients',
            'rating',
        )

    def get_num_of_patients(self, obj) -> int:
        # This method returns the number of patients the doctor
        # has had appointment with in the last one year

        one_year_ago = timezone.now() - timedelta(days=365)

        num_patients = Appointment.objects.filter(
            doctor_id=obj.id,
            start_datetime__gte=one_year_ago
        ).values('patient').distinct().count()
        return num_patients

    def get_rating(self, obj) -> float:
        # This method returns the average rating of the doctor
        # from all the ratings given by patients

        ratings = Appointment.objects.filter(
            doctor_id=obj.id,
            doctor_rating__isnull=False
        ).values_list('doctor_rating', flat=True)

        if not ratings:
            return None

        average_rating = sum(ratings) / len(ratings)
        rounded_average = round(average_rating, 2)
        return rounded_average


class DoctorProfileDetailSerializer(ProfileDetailSerializer):
    documents = DoctorDocumentSerializer(many=True, required=False)

    class Meta(ProfileDetailSerializer.Meta):
        model = Doctor
        fields = ProfileDetailSerializer.Meta.fields + (
            'speciality',
            'license_number',
            'years_of_experience',
            'education',
            'certifications',
            'awards',
            'professional_statement',
            'documents'
        )
