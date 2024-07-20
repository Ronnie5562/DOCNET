from profiles.serializers import (
    ProfileListSerializer,
    ProfileDetailSerializer
)
from patient_profiles.models import Patient, Document
from profiles.serializers import DocumentSerializer


class PatientDocumentSerializer(DocumentSerializer):
    class Meta(DocumentSerializer.Meta):
        model = Document


class PatientProfileListSerializer(ProfileListSerializer):
    class Meta(ProfileListSerializer.Meta):
        model = Patient
        fields = ProfileListSerializer.Meta.fields


class PatientProfileDetailSerializer(ProfileDetailSerializer):
    documents = PatientDocumentSerializer(many=True, required=False)

    class Meta(ProfileDetailSerializer.Meta):
        model = Patient
        fields = ProfileDetailSerializer.Meta.fields + (
            'medical_history',
            'allergies',
            'current_medications',
            'documents'
        )
