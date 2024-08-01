from django.core.management.base import BaseCommand
from faker import Faker
from accounts.models import User
from profiles.choices import GENDER_CHOICES
from doctor_profiles.models import Doctor
import random
from django_countries import countries


SPECIALITIES = [
    'Cardiologist',
    'Gastroenterologist',
    'Hematologist',
    'Neurologist',
    'Oncologist',
    'Ophthalmologist',
    'Orthopedics',
    'Pediatrics',
    'Psychiatrist',
    'Radiologist',
    'Obstetrics and Gynecologist',
    'General Practitioner'
]


class Command(BaseCommand):
    help = 'Seed the database with dummy doctor profiles'

    def handle(self, *args, **kwargs):
        faker = Faker()

        for _ in range(30):
            # Create an account
            account = User.objects.create(
                email=faker.unique.email(),
                role='doctor',
                first_name=faker.first_name(),
                last_name=faker.last_name(),
                password=random.choices(
                    ['password123', 'password@123', 'password1234']
                )
            )

            profile = Doctor.objects.get(user=account)

            # update Profile
            profile.bio = faker.text(),
            profile.date_of_birth = faker.date_of_birth(
                minimum_age=25, maximum_age=60)
            profile.gender = random.choice(
                [choice[0] for choice in GENDER_CHOICES])
            profile.address = faker.address()
            profile.zip_code = faker.zipcode()
            profile.city = faker.city()
            profile.country = random.choice(list(countries))
            profile.languages = [
                faker.language_name() for _ in range(random.randint(1, 3))]
            profile.speciality = random.choice(SPECIALITIES)
            profile.license_number = faker.unique.ssn()
            profile.years_of_experience = random.randint(1, 30)
            profile.education = faker.text()
            profile.certifications = faker.text()
            profile.awards = faker.text()
            profile.professional_statement = faker.text()

            profile.save()

            self.stdout.write(self.style.SUCCESS(
                f'Successfully created profile for {account.email}'))
