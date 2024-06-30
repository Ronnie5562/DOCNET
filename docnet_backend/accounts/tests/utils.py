from django.contrib.auth import get_user_model


def create_user(email="test@example.com", password="testpassword"):
    """Helper function to create a user"""
    return get_user_model().objects.create_user(email, password)
