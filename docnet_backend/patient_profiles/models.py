from django.db import models
from accounts.models import User
from profiles.models import Profile, ProfileDocument


class Patient(Profile):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="patient_profile")
    medical_history = models.TextField(blank=True, null=True)
    allergies = models.TextField(blank=True, null=True)
    current_medications = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Patient"
        verbose_name_plural = "Patients"


class Document(ProfileDocument):
    profile = models.ForeignKey(
        Patient, on_delete=models.CASCADE, related_name="documents"
    )
