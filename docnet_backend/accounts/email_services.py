import threading
from django.conf import settings
from accounts.tokens import generate_token
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_encode


class EmailThread(threading.Thread):
    def __init__(self, email):
        self.email = email
        # super().__init__(self)
        threading.Thread.__init__(self)

    def run(self):
        self.email.send(fail_silently=True)


generate_email_message = lambda user_first_name: f"""
Hi {user_first_name},

Welcome aboard to Docnet! We're thrilled to have you as part of our community of healthcare professionals and patients.

Your registration is now complete, and we've sent a verification email to the address you provided. To ensure the security of your account and access all the functionalities of our platform, please take a moment to verify your email address by clicking the verification link in the email.

We're dedicated to providing you with a seamless experience in managing your healthcare needs. Whether you're scheduling virtual consultations, receiving prescriptions, or accessing your medical records, our system is designed to make the process effortless and efficient.

Should you encounter any questions or need assistance, our support team is here to help. We're committed to ensuring your experience with Docnet is nothing short of exceptional.

Once again, welcome! We look forward to supporting you in achieving your health and wellness goals.

Best regards,

Your friends at Docnet.
"""


class EmailService:
    def send_welcome_email(self, user):
        subject = "Welcome to Docnet, Your Health Partner!"
        message = generate_email_message(user.first_name)
        welcome_email = EmailMessage(
            subject,
            message,
            settings.EMAIL_HOST_USER,
            [user.email]
        )
        EmailThread(welcome_email).start()

    def send_account_verification_email(self, request, user):
        current_site = get_current_site(request)
        email_confirmation_subject = "Verify Your Email - Docnet"
        email_confirmation_message = render_to_string('mail/email_confirmation.html', {
            'name': user.first_name,
            'domain': current_site.domain,
            'uid': urlsafe_base64_encode(force_bytes(user.pk)),
            'token': generate_token.make_token(user)
        })

        email = EmailMessage(
            email_confirmation_subject,
            email_confirmation_message,
            settings.EMAIL_HOST_USER,
            [user.email],
        )
        EmailThread(email).start()
