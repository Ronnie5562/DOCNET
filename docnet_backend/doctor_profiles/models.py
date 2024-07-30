from django.db import models
from accounts.models import User
from profiles.models import Profile, ProfileDocument


class Doctor(Profile):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="doctor_profile")
    speciality = models.CharField(max_length=255, blank=True, null=True)
    license_number = models.CharField(max_length=255, blank=True, null=True)
    years_of_experience = models.PositiveIntegerField(blank=True, null=True)
    education = models.TextField(blank=True, null=True)
    certifications = models.TextField(blank=True, null=True)
    awards = models.TextField(blank=True, null=True)
    professional_statement = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ['-id']
        verbose_name = "Doctor"
        verbose_name_plural = "Doctors"


class Document(ProfileDocument):
    profile = models.ForeignKey(
        Doctor, on_delete=models.CASCADE, related_name="documents"
    )
