import uuid
from django.db import models
from appointments.models import Appointment


class MedicalRecord(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    diagnosis = models.TextField()
    symptoms = models.TextField()
    treatment = models.TextField()
    notes = models.TextField()

    issued_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.appointment.patient.user.email}'s medical\
            Record by {self.appointment.doctor.user.email}"