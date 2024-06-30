from django.dispatch import receiver
from django.db.models.signals import post_save
from doctor_profiles.models import Doctor
from patient_profiles.models import Patient
from accounts.models import User


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """
    Create a user profile when a new user is created
    """
    if created and instance.role == 'patient':
        Patient.objects.create(user=instance)
    elif created and instance.role == 'doctor':
        Doctor.objects.create(user=instance)
