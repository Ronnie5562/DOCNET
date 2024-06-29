import uuid
from django.db import models
from appointments.models import Appointment


class Medication(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    name = models.CharField(max_length=100)
    manufacturer = models.CharField(max_length=100)
    milligrams = models.IntegerField()
    precautions = models.TextField()
    description = models.TextField()

    added_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class Prescription(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    appointment = models.OneToOneField(Appointment, on_delete=models.CASCADE)
    prescription = models.TextField()
    medications = models.ManyToManyField(Medication)
    instructions = models.TextField()

    issued_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.appointment.patient.user.email
