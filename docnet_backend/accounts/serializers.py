from django.conf import settings
from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import (
    TokenObtainPairSerializer,
    TokenRefreshSerializer
)
from rest_framework_simplejwt.exceptions import InvalidToken


class UserSerializer(serializers.ModelSerializer):
    """
    Serializer for the user object
    """
    timezone = serializers.CharField(
        required=False, allow_blank=True, allow_null=True
    )

    class Meta:
        model = get_user_model()
        exclude = (
            'groups',
            'is_staff',
            'is_active',
            'last_login',
            'is_superuser',
            'date_modified',
            'user_permissions',
        )
        required_fields = [
            'email', 'password', 'first_name', 'last_name', 'role'
        ]
        extra_kwargs = {
            'password': {'write_only': True, 'min_length': 5}
        }

    def create(self, validated_data):
        """
        Create a user with encrypted password and returns the user instance
        """
        return get_user_model().objects.create_user(
            **validated_data, is_active=False
        )

    def update(self, instance, validated_data):
        """
        Update a user, setting the password correctly and return it
        """
        password = validated_data.pop('password', None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def get_token(cls, user):
        token = super().get_token(user)
        token["example"] = "example"

        return token

    def validate(self, attrs):
        data = super().validate(attrs)
        data["user_id"] = self.user.id
        return data


class JWTCookieTokenRefreshSerializer(TokenRefreshSerializer):
    refresh = None

    def validate(self, attrs):
        attrs["refresh"] = self.context["request"].COOKIES.get(
            settings.SIMPLE_JWT["REFRESH_TOKEN_NAME"])

        if attrs["refresh"]:
            return super().validate(attrs)
        else:
            raise InvalidToken("No valid refresh token found")


class AccountActivationSerializer(serializers.Serializer):
    pass


class LogOutSerializer(serializers.Serializer):
    pass
