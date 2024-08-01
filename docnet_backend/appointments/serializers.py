from rest_framework import serializers
from appointments.models import Appointment
from medical_records.models import MedicalRecord # noqa
from medical_records.serializers import (  # noqa
    AppointmentMedicalRecordSerializer
)


class AppointmentSerializer(serializers.ModelSerializer):
    timezone = serializers.CharField(
        required=False, allow_blank=True, allow_null=True
    )
    # medical_record = AppointmentMedicalRecordSerializer(
    #     read_only=True, many=False)

    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at', 'status')
        extra_kwargs = {
            'end_datetime': {'required': False},
            'patient': {'required': False},
        }
