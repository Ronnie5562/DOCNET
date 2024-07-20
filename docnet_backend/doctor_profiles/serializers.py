from profiles.serializers import (
    ProfileListSerializer,
    ProfileDetailSerializer,
    DocumentSerializer
)
from doctor_profiles.models import Doctor, Document


class DoctorDocumentSerializer(DocumentSerializer):
    class Meta(DocumentSerializer.Meta):
        model = Document


class DoctorProfileListSerializer(ProfileListSerializer):
    class Meta(ProfileListSerializer.Meta):
        model = Doctor
        fields = ProfileListSerializer.Meta.fields + (
            'speciality',
            'years_of_experience',
        )


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
