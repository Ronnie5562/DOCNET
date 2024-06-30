from django.test import TestCase
from django.contrib.auth import get_user_model
from patient_profiles.models import Patient
from doctor_profiles.models import Doctor
from accounts.tests.utils import create_user


class UserModelTest(TestCase):
    def test_create_user_with_email_successful(self):
        """
        Test that creating a user with an email is successful
        """
        email = "test@example.com"
        password = "mypassword123"

        user = create_user(email, password)

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))

    def test_user_email_is_normalized(self):
        """
        Test the email for a new user is normalized
        """
        sample_emails = [
            ["test1@EXAMPLE.com", "test1@example.com"],
            ["test2@EXAmPLe.com", "test2@example.com"],
            ["TEST3@EXAMPLE.com", "TEST3@example.com"],
            ["Test4@EXAMPLE.com", "Test4@example.com"],
            ["test5@eXAMPLE.COM", "test5@example.com"],
        ]

        for submitted_email, normalized_email in sample_emails:
            user = create_user(email=submitted_email)
            self.assertEqual(user.email, normalized_email)

    def test_create_user_without_email_raises_exception(self):
        """
        Test that creating a user without email fails
        """
        with self.assertRaises(ValueError):
            get_user_model().objects.create_user('', 'test123')

    def test_create_superuser(self):
        """
        Test that creating a superuser is successful
        """
        email = "admin@example.com"
        password = "adminpassword123"
        user = get_user_model().objects.create_superuser(
            email, password
        )

        self.assertEqual(user.email, email)
        self.assertTrue(user.check_password(password))
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)

    def test_user_profile_created_automatically(self):
        """
        Test that a user profile if automatically created for a user\
        based on the user role [patient / doctor]
        """
        email = "testprofile@gmail.com"
        password = "testpassword123"
        user = create_user(email, password)

        if user.role == 'patient':
            self.assertEqual(Patient.objects.count(), 1)
            self.assertEqual(Patient.objects.first().user, user)
            self.assertEqual(Doctor.objects.count(), 0)
        elif user.role == 'doctor':
            self.assertEqual(Doctor.objects.count(), 1)
            self.assertEqual(Doctor.objects.first().user, user)
            self.assertEqual(Patient.objects.count(), 0)
        else:
            self.assertEqual(Doctor.objects.count(), 0)
            self.assertEqual(Patient.objects.count(), 0)
