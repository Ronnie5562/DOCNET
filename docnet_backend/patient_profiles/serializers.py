from rest_framework import serializers
from profiles.serializaers import (
    ProfileListSerializer,
    ProfileDetailSerializer
)
from patient_profiles.models import Patient, Document


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


class PatientProfileListSerializer(ProfileListSerializer):
    class Meta(ProfileListSerializer.Meta):
        model = Patient
        fields = ProfileListSerializer.Meta.fields


class PatientProfileDetailSerializer(ProfileDetailSerializer):
    class Meta(ProfileDetailSerializer.Meta):
        model = Patient
        fields = ProfileDetailSerializer.Meta.fields + (
            'medical_history',
            'allergies',
            'current_medications',
        )
