import uuid
from django.db import models
from profiles.choices import GENDER_CHOICES
from cloudinary.models import CloudinaryField
from cloudinary.uploader import upload
from profiles.utils import profile_pic_file_path, document_file_path
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
    picture = CloudinaryField('image', blank=True, null=True)
    languages = models.JSONField(default=list, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if self.picture:
            file_path = profile_pic_file_path(self, self.picture.name)
            upload(self.picture.file, public_id=file_path, overwrite=True)
            self.picture = file_path
        super(Profile, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.user.email}"

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
