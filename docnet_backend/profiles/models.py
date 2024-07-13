import uuid
import pytz # noqa
from django.db import models
from cloudinary.uploader import upload
from django_countries import countries
from profiles.choices import GENDER_CHOICES
from django_countries.fields import CountryField
from profiles.utils import document_file_path


class Profile(models.Model):
    id = models.UUIDField(
       primary_key=True, default=uuid.uuid4, editable=False
    )
    bio = models.TextField(blank=True, null=True)
    date_of_birth = models.DateField(blank=True, null=True)
    gender = models.CharField(
        max_length=20, choices=GENDER_CHOICES, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    zip_code = models.CharField(max_length=10, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    country = CountryField(choices=list(countries), blank=True, null=True)
    languages = models.JSONField(default=list, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.user.__str__()

    class Meta:
        ordering = ("-created_at",)
        abstract = True


class ProfileDocument(models.Model):
    caption = models.CharField(max_length=100, blank=True)
    # file = models.FileField(upload_to='media/profiles/documents/')
    file = models.CharField(max_length=255, blank=True, null=True)

    uploaded_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.file.name

    def save(self, *args, **kwargs):
        if self.document:
            file_path = document_file_path(self, self.document.name)
            upload(self.document.file, public_id=file_path, overwrite=True)
            self.document = file_path
        super(Profile, self).save(*args, **kwargs)

    class Meta:
        abstract = True
        ordering = ("-uploaded_at",)
