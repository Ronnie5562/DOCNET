from django.db import models
from profiles.models import Profile


class Doctor(Profile):
    specialty = models.CharField(max_length=255, blank=True, null=True)
    license_number = models.CharField(max_length=255, blank=True, null=True)
    years_of_experience = models.PositiveIntegerField(blank=True, null=True)
    education = models.TextField(blank=True, null=True)
    certifications = models.TextField(blank=True, null=True)
    awards = models.TextField(blank=True, null=True)
    professional_statement = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Doctor"
        verbose_name_plural = "Doctors"
