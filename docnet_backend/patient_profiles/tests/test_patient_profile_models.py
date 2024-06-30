from django.test import TestCase
from patient_profiles.models import Patient
from profiles.utils import create_doctor_user, create_patient_user


class PatientTestCases(TestCase):
    def test_creating_patient_profile_successful(self):
        """
        Test that creating a patient profile is successful \
            for a user with role [patient]
        """

        patient = create_patient_user()
        self.assertEqual(patient.role, "patient")
        self.assertEqual(Patient.objects.count(), 1)
        self.assertIsInstance(patient.profile, Patient)
        self.assertEqual(Patient.objects.first(), patient.profile)

    def test_creating_patient_profile_without_role_patient_fails(self):
        """
        Test that creating a patient profile fails \
            for a user with role [doctor]
        """

        doctor = create_doctor_user()
        self.assertEqual(doctor.role, "doctor")
        self.assertEqual(Patient.objects.count(), 0)
