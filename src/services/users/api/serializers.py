from django.apps import apps
from rest_framework import serializers

from src.core.models import Language
from src.services.users.models import UserImage, Address, User, \
    UserContact, BlockedUser


# """ ---------------------User Serializers--------------------- """


class UserSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile_image', 'bio', 'images',
                  'date_joined', 'last_login', ]
        read_only_fields = ['username', 'email', 'date_joined', 'images', 'last_login']

    def get_images(self, obj):
        images = obj.images.all()
        return UserImageSerializer(images, many=True).data


class UserDetailSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile_image', 'bio', 'images',
                  'date_joined', 'last_login', ]
        read_only_fields = ['username', 'email', 'date_joined', 'images', 'last_login']

    def get_images(self, obj):
        images = obj.images.all()
        return UserImageSerializer(images, many=True).data


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'profile_image', 'bio', ]


class UserImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImage
        fields = ['id', 'image']


class UserAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'user', 'address', 'city', 'region', 'country', 'zip_code', ]
        read_only_fields = ['user']


# """ ---------------------User Contact Serializers--------------------- """
class UserContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserContact
        fields = ['id', 'name', 'phone_number']


# """ ---------------------User Block and Report Serializers--------------------- """
class UserBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlockedUser
        fields = ['id', 'blocked_user', 'reason', 'created_at']
        read_only_fields = ['id', 'created_at']

    def validate_blocked_user(self, blocked_user):
        """Ensure the user is not blocking the same user again."""
        user = self.context['request'].user
        if BlockedUser.objects.filter(user=user, blocked_user=blocked_user).exists():
            raise serializers.ValidationError("You have already blocked this user.")
        return blocked_user


report = apps.get_model('reporting', 'Report')


class ReportingSerializer(serializers.ModelSerializer):
    class Meta:
        model = report
        fields = ['id', 'report_type', 'reported_user', 'reason', 'additional_info', 'is_resolved',
                  'resolved_at']
        read_only_fields = ['id', 'is_resolved', 'resolved_at']

    def validate_reported_user(self, reported_user):
        user = self.context['request'].user
        if report.objects.filter(reported_user=reported_user, reported_by=user).exists():
            raise serializers.ValidationError("You have already reported this.")
        return reported_user
