from rest_framework import serializers
from profiles.models import Profile
from django_countries.fields import Country
from accounts.serializers import UserSerializer


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = None
        fields = (
            'id',
            'caption',
            'file',
            'profile',
            'uploaded_at',
            'modified_at'
        )
        read_only_fields = ('id', 'profile', 'uploaded_at', 'modified_at')


class ProfileListSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = (
            'id',
            'user',
        )
        read_only_fields = (
            'id',
            'user'
        )


class CountryFieldSerializer(serializers.Field):
    def to_representation(self, value):
        if isinstance(value, Country):
            return str(value)
        return value

    def to_internal_value(self, data):
        return Country(data)


class ProfileDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    country = CountryFieldSerializer()

    class Meta:
        model = Profile
        fields = (
            'id',
            'user',
            'bio',
            'date_of_birth',
            'gender',
            'address',
            'zip_code',
            'city',
            'country',
            'languages',
        )
        read_only_fields = ('id', 'user')
