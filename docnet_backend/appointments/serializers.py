from rest_framework import serializers
from django.urls import reverse
from appointments.models import Appointment
from medical_records.models import MedicalRecord


class AppointmentSerializer(serializers.ModelSerializer):
    timezone = serializers.CharField(
        required=False, allow_blank=True, allow_null=True
    )
    medical_record = serializers.SerializerMethodField()

    class Meta:
        model = Appointment
        fields = '__all__'
        read_only_fields = ('id', 'created_at', 'updated_at', 'status')

    def get_medical_record(self, obj):
        medical_record = MedicalRecord.objects.get(appointment=obj)
        return reverse(
            "medical-record-detail", kwargs={"id": medical_record.id})
