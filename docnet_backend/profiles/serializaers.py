from rest_framework import serializers
from profiles.models import Profile
from accounts.serializers import UserSerializer


class ProfileListSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = (
            'id',
            'user',
            'picture',
            'first_name',
            'last_name',
        )
        read_only_fields = ('id', 'user')


class ProfileDetailSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = (
            'id',
            'user',
            'first_name',
            'last_name',
            'bio',
            'date_of_birth',
            'gender',
            'address',
            'zip_code',
            'city',
            'country',
            'phone_number',
            'picture',
            'languages',
            'created_at',
            'updated_at'
        )
        read_only_fields = ('id', 'user', 'created_at', 'updated_at')
