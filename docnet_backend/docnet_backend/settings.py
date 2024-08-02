import os
from pathlib import Path
from decouple import config
from datetime import timedelta
import cloudinary
import cloudinary.api
import cloudinary.uploader

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = config("SECRET_KEY", default="django-insecure$@^_")

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = config("DEBUG", default=False, cast=bool)
USE_DEFAULT_DATABASE = config("USE_DEFAULT_DATABASE", default=False, cast=bool)

ALLOWED_HOSTS = ["*"]


# Application definition

INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Third Party Apps
    "cloudinary",
    "django_countries",
    "corsheaders",
    "phonenumber_field",
    "rest_framework",
    "drf_spectacular",
    "rest_framework_simplejwt",

    # Internal Apps
    "utils",
    "accounts",
    "appointments",
    "doctor_profiles",
    "patient_profiles",
    "prescriptions",
    "medical_records",
    "profiles",
    "chats",
    "notifications",
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "accounts.middleware.JWTAuthenticationMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "docnet_backend.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": ['templates'],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "docnet_backend.wsgi.application"


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

if USE_DEFAULT_DATABASE:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': config('PGDATABASE'),
            'USER': config('PGUSER'),
            'PASSWORD': config('PGPASSWORD'),
            'HOST': config('PGHOST'),
            'PORT': config('PGPORT', 5432),
            'OPTIONS': {
                'sslmode': 'require',
            },
        }
    }


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = "static/"

# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"
AUTH_USER_MODEL = 'accounts.User'

# Email Configuration
EMAIL_USE_TLS = config("EMAIL_USE_TLS", default=True, cast=bool)
EMAIL_HOST = config("EMAIL_HOST", default="smtp.gmail.com")
EMAIL_HOST_USER = config("EMAIL_HOST_USER", default="no-reply@docnet.com")
EMAIL_HOST_PASSWORD = config("EMAIL_HOST_PASSWORD", default="password")
EMAIL_PORT = 587

# Cloudinary Configuration
cloudinary.config(
    cloud_name=config("CLOUDINARY_CLOUD_NAME", default="docnet"),
    api_key=config("CLOUDINARY_API_KEY", default="api-key"),
    api_secret=config("CLOUDINARY_API_SECRET", default="api-secret"),
    secure=True
)

# Rest Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_SCHEMA_CLASS': 'drf_spectacular.openapi.AutoSchema',
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}

# DRF-Spectacular Settings
SPECTACULAR_SETTINGS = {
    'TITLE': 'DOCNET BACKEND API',
    'DESCRIPTION': 'A Telemedicine Application built with Django and React/Typescript',
    'VERSION': '0.0.1',
    'SERVE_INCLUDE_SCHEMA': True,
    # OTHER SETTINGS
}

# To allow POST request from frontend
CSRF_TRUSTED_ORIGINS = [
    'http://localhost:5173',
    'https://docnet-frontend.onrender.com',
    'https://docnet-test.onrender.com',
]

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
    'https://docnet-frontend.onrender.com',
    'https://docnet-test.onrender.com',
]

CORS_ALLOW_CREDENTIALS = True
CORS_ALLOW_ALL_ORIGINS = True

SIMPLE_JWT = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=30),
    "REFRESH_TOKEN_LIFETIME": timedelta(days=20),

    # JWTCookie settings
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'AUTH_HEADER_TYPES': ('Bearer',),
    'AUTH_COOKIE': 'access',
    'REFRESH_TOKEN_NAME': 'refresh',
    'ACCESS_TOKEN_NAME': 'access',
    # 'AUTH_COOKIE_DOMAIN': 'docnet-test.onrender.com',
    'AUTH_COOKIE_SECURE': False,
    'AUTH_COOKIE_HTTP_ONLY': True,
    'AUTH_COOKIE_SAMESITE': 'Lax',
}

# Cookie settings
SESSION_COOKIE_SAMESITE = 'Lax'
CSRF_COOKIE_SAMESITE = 'Lax'

SECURE_SSL_REDIRECT = False
CSRF_COOKIE_SECURE = False
SESSION_COOKIE_SECURE = False
SECURE_REFERRER_POLICY = 'no-referrer-when-downgrade'
