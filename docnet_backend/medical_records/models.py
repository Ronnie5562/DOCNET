import uuid
from django.db import models
from appointments.models import Appointment


class MedicalRecord(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    appointment = models.OneToOneField(
        Appointment, on_delete=models.CASCADE, related_name='medical_record')
    diagnosis = models.TextField()
    symptoms = models.TextField()
    treatment = models.TextField()
    notes = models.TextField()

    issued_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    @property
    def patient(self):
        return self.appointment.patient

    @property
    def doctor(self):
        return self.appointment.doctor

    @property
    def appointment_date(self):
        return self.appointment.start_datetime

    def __str__(self):
        return f"{self.appointment.patient.user.email}'s medical\
            Record by {self.appointment.doctor.user.email}"
