import uuid
from django.db import models
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
    status = models.CharField(
        max_length=20,
        choices=APPOINTMENT_STATUS,
        default='pending'
    )
    reason_for_visit = models.TextField(blank=True, null=True)
    notes = models.TextField(blank=True, null=True)

    date_booked = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.patient} and {self.doctor} on\
            {self.start_datetime.date()} by {self.start_datetime.time()}'

    class Meta:
        ordering = ('-start_datetime',)