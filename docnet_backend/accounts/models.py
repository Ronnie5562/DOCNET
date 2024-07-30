import uuid
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
from cloudinary.uploader import upload
from accounts.choices import USER_ROLES
from django.core.exceptions import ValidationError
from django.core.validators import validate_email
from timezone_field import TimeZoneField
from cloudinary.models import CloudinaryField
from phonenumber_field.modelfields import PhoneNumberField
from profiles.utils import profile_pic_file_path


class UserManager(BaseUserManager):
    """
    Custom UserManager model that manages Accounts
    """
    use_in_migrations = True

    def create_user(self, email, password, **extra_fields):
        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(f'Input a valid Email: {email} is not valid')

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user


class User(AbstractBaseUser, PermissionsMixin):
    """
    Custom user model.
    """
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False
    )
    email = models.EmailField(
        max_length=255, unique=True, validators=[validate_email])
    role = models.CharField(
        max_length=50, choices=USER_ROLES, default='patient')

    first_name = models.CharField(max_length=50, blank=True, null=True)
    last_name = models.CharField(max_length=50, blank=True, null=True)
    phone_number = PhoneNumberField(blank=True)
    picture = CloudinaryField('image', blank=True, null=True)
    timezone = TimeZoneField(
        use_pytz=True, default='UTC', choices_display="WITH_GMT_OFFSET")

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    objects = UserManager()
    USERNAME_FIELD = 'email'

    def save(self, *args, **kwargs):
        if self.picture:
            file_path = profile_pic_file_path(self, self.picture.public_id)
            upload_file = upload(
                file_path, public_id=self.picture.public_id, overwrite=True)
            self.picture = upload_file['public_id']

        try:
            self.full_clean()
        except Exception as e:
            raise e

        super(User, self).save(*args, **kwargs)

    @property
    def profile(self):
        profile_attr = f"{self.role}_profile"
        return getattr(self, profile_attr, None)

    def __str__(self):
        """String representation of a user"""
        return f"{self.first_name} {self.last_name} - {self.email}"

    class Meta:
        ordering = ("-date_joined",)
