from django.db import models
from profiles.models import Profile


class Patient(Profile):
    medical_history = models.TextField(blank=True, null=True)
    allergies = models.TextField(blank=True, null=True)
    current_medications = models.TextField(blank=True, null=True)

    class Meta:
        verbose_name = "Patient"
        verbose_name_plural = "Patients"


class Document(models.Model):
    caption = models.CharField(max_length=100, blank=True)
    file = models.FileField(upload_to='documents/')
    profile = models.ForeignKey(Patient, on_delete=models.CASCADE)

    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.file.name

    class Meta:
        ordering = ("-uploaded_at",)
