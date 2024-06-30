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
