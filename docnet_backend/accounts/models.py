import uuid
from django.db import models
from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin
)
from accounts.choices import USER_ROLES
from django.core.exceptions import ValidationError
from django.core.validators import validate_email


class UserManager(BaseUserManager):
    """
    Custom UserManager model that manages Accounts
    """
    use_in_migrations = True

    def create_user(self, email, password, **extra_fields):
        first_name = extra_fields.pop('first_name', '')
        last_name = extra_fields.pop('last_name', '')

        try:
            validate_email(email)
        except ValidationError:
            raise ValueError(f'Input a valid Email: {email} is not valid')

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        user.profile.first_name = first_name
        user.profile.last_name = last_name
        user.profile.save()

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

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    date_modified = models.DateTimeField(auto_now=True)

    objects = UserManager()
    USERNAME_FIELD = 'email'

    @property
    def profile(self):
        profile_attr = f"{self.role}_profile"
        return getattr(self, profile_attr, None)

    def __str__(self):
        """String representation of a user"""
        return self.email

    class Meta:
        ordering = ("-date_joined",)
