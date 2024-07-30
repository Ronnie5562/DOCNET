import uuid
import pytz # noqa
from django.db import models
from datetime import timedelta
from timezone_field import TimeZoneField
from doctor_profiles.models import Doctor
from patient_profiles.models import Patient
from appointments.choices import APPOINTMENT_STATUS


class Appointment(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    start_datetime = models.DateTimeField()
    end_datetime = models.DateTimeField()
    timezone = TimeZoneField(
        use_pytz=True, default='UTC', choices_display="WITH_GMT_OFFSET")
    status = models.CharField(
        max_length=20,
        choices=APPOINTMENT_STATUS,
        default='pending'
    )
    reason = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    doctor_rating = models.PositiveIntegerField(blank=True, null=True)
    doctor_report = models.TextField(blank=True, null=True)

    date_booked = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.patient} and {self.doctor} on \
            {self.start_datetime.date()} by {self.start_datetime.time()}'

    def save(self, *args, **kwargs):
        if self.end_datetime - self.start_datetime > timedelta(hours=1):
            raise ValueError('Appointments cannot be longer than 1 hour')
        super().save(*args, **kwargs)

    class Meta:
        ordering = ('-start_datetime',)
