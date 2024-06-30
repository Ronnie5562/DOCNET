import uuid
from django.db import models
from profiles.choices import GENDER_CHOICES
from phonenumber_field.modelfields import PhoneNumberField


class Profile(models.Model):
    id = models.UUIDField(
       primary_key=True, default=uuid.uuid4, editable=False
    )
    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(
        max_length=20, choices=GENDER_CHOICES, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True)
    picture = models.ImageField(
        upload_to='media/profiles/profile_pics/', blank=True, null=True)
    languages = models.JSONField(default=list, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.email

    class Meta:
        ordering = ("-created_at",)
        abstract = True
