from django.test import TestCase
from doctor_profiles.models import Doctor
from profiles.utils import create_doctor_user, create_patient_user


class DoctorTestCases(TestCase):
    def test_creating_doctor_profile_successful(self):
        """
        Test that creating a doctor profile is successful \
            for a user with role [doctor]
        """

        doctor = create_doctor_user()
        self.assertEqual(doctor.role, "doctor")
        self.assertEqual(Doctor.objects.count(), 1)
        self.assertIsInstance(doctor.profile, Doctor)
        self.assertEqual(Doctor.objects.first(), doctor.profile)

    def test_creating_doctor_profile_without_role_doctor_fails(self):
        """
        Test that creating a doctor profile fails \
            for a user with role [patient]
        """

        patient = create_patient_user()
        self.assertEqual(patient.role, "patient")
        self.assertEqual(Doctor.objects.count(), 0)
