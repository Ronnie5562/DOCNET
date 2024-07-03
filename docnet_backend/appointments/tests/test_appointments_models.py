from django.test import TestCase
from appointments.models import Appointment
from profiles.utils import create_patient_user, create_doctor_user
from datetime import timedelta
from django.utils import timezone
from doctor_profiles.models import Doctor
from patient_profiles.models import Patient


class AppointmentModelTest(TestCase):
    def setUp(self):
        self.patient = create_patient_user().profile
        self.doctor = create_doctor_user().profile
        self.appointment_start_datetime = timezone.now()
        self.appointment_end_datetime = (
            self.appointment_start_datetime + timedelta(hours=1))
        self.appointment = Appointment.objects.create(
            patient=self.patient,
            doctor=self.doctor,
            start_datetime=self.appointment_start_datetime,
            end_datetime=self.appointment_end_datetime,
            status='pending',
            reason='I am feeling unwell',
            notes='I have been feeling unwell for the past 3 days'
        )

    def test_appointment_creation(self):
        self.assertEqual(self.appointment.patient, self.patient)
        self.assertEqual(self.appointment.doctor, self.doctor)
        self.assertEqual(self.appointment.status, 'pending')
        self.assertEqual(
            self.appointment.start_datetime,
            self.appointment_start_datetime
        )
        self.assertEqual(
            self.appointment.end_datetime,
            self.appointment_end_datetime
        )

    def test_appointment_has_doc_and_patient(self):
        self.assertIsInstance(self.appointment.doctor, Doctor)
        self.assertIsInstance(self.appointment.patient, Patient)

    def test_that_appointments_are_not_longer_than_1_hour(self):
        self.appointment.end_datetime = (
            self.appointment_start_datetime + timedelta(hours=2))
        self.assertRaises(ValueError, self.appointment.save)
