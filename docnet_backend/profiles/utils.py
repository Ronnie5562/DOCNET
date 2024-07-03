import os
import uuid
from django.contrib.auth import get_user_model


def create_patient_user(email="paient@example.com", password="testpassword"):
    """Helper function to create a patient"""
    patient = get_user_model().objects.create_user(
        email, password, role="patient"
    )
    return patient


def create_doctor_user(email="doctor@example.com", password="testpassword"):
    """Helper function to create a doctor"""
    doctor = get_user_model().objects.create_user(
        email, password, role="doctor"
    )
    return doctor


def profile_pic_file_path(instance, filename):
    """Generate file path for new profile picture"""
    ext = os.path.splitext(filename)[1]
    filename = f"{uuid.uuid4()}{ext}"

    return os.path.join(
        f'docnet/uploads/profiles/{instance.id}/pictures',
        filename
    )


def document_file_path(instance, filename):
    """Generate file path for new document"""
    ext = os.path.splitext(filename)[1]
    filename = f"{uuid.uuid4()}{ext}"
    return os.path.join(
        f'docnet/uploads/profiles/{instance.id}/documents',
        filename
    )
