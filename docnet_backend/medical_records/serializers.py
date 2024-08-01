from rest_framework import serializers
from medical_records.models import MedicalRecord


class MedicalRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRecord
        fields = '__all__'

        read_only_fields = (
            'id', 'issued_date', 'modified_date',
            'doctor', 'patient', 'appointment_date'
        )


class AppointmentMedicalRecordSerializer(MedicalRecordSerializer):
    class Meta(MedicalRecordSerializer.Meta):
        fields = (
            'id', 'diagnosis', 'symptoms', 'treatment', 'notes',
        )
