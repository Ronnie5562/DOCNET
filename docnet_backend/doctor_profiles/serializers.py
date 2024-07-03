from rest_framework import serializers
from profiles.serializaers import (
    ProfileListSerializer,
    ProfileDetailSerializer
)
from doctor_profiles.models import Doctor, Document


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = (
            'id',
            'caption',
            'file',
            'profile',
            'uploaded_at',
            'modified_at'
        )
        read_only_fields = ('id', 'profile', 'uploaded_at', 'modified_at')


class DoctorProfileListSerializer(ProfileListSerializer):
    class Meta(ProfileListSerializer.Meta):
        model = Doctor
        fields = ProfileListSerializer.Meta.fields + (
            'speciality',
            'years_of_experience',
        )


class DoctorProfileDetailSerializer(ProfileDetailSerializer):
    documents = DocumentSerializer(many=True, required=False)

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
