import random
import uuid

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
from django.utils.timezone import now
from django_otp.models import Device
from django_resized import ResizedImageField
from phonenumber_field.modelfields import PhoneNumberField

from src.core.models import Country


class User(AbstractUser):
    """Custom User Model to allow switching between ServiceProvider and ServiceSeeker"""
    USER_TYPES = [
        ('admin', 'Admin'),
        ('agency', 'Agency'),
        ('local_guide', 'Local Guide'),
        ('user', 'User'),
    ]

    is_agent = models.BooleanField(default=True)
    is_agency = models.BooleanField(default=True)

    email = models.EmailField(unique=True, max_length=200)
    profile_image = ResizedImageField(
        upload_to='users/images/profiles/', null=True, blank=True, size=[250, 250], quality=75, force_format='PNG',
        help_text='Profile image must be 250x250 and in PNG format', crop=['middle', 'center']
    )
    bio = models.TextField(blank=True, null=True, help_text="Short description about the user.")
    user_type = models.CharField(max_length=20, choices=USER_TYPES, default='service_seeker')
    phone_number = PhoneNumberField(null=True, blank=True, unique=True)
    interests = models.ManyToManyField('match.Interest', through='match.UserInterest')

    REQUIRED_FIELDS = ["username"]
    USERNAME_FIELD = "email"

    class Meta:
        ordering = ['-id']
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        """Override save to set user_type for admin users"""
        if self.is_staff:
            self.user_type = 'admin'
        return super(User, self).save(*args, **kwargs)

    def get_service_provider_profile(self):
        """Helper to get the service provider profile if the user is a provider"""
        if hasattr(self, 'service_provider_profile'):
            return self.service_provider_profile
        return None

    def get_user_wallet(self):
        if hasattr(self, 'wallet'):
            return self.wallet
        return None

    def get_provider_location(self):
        """Returns formatted location details from the ServiceProvider model"""
        if hasattr(self, 'address') and self.address.address:
            return f"{self.address.city}, {self.address.region}, {self.address.country.name}"
        return None

    def get_address(self):
        if hasattr(self, 'address'):
            return self.address
        return None

    def is_stripe_connected(self):
        return self.get_user_wallet().is_stripe_connected()

    def is_stripe_account_active(self):
        return self.get_user_wallet().is_stripe_account_active()

    def get_available_balance(self):
        return self.get_user_wallet().get_available_balance()

    def get_pending_balance(self):
        return self.get_user_wallet().get_pending_balance()

    def get_connect_balance(self):
        return self.get_user_wallet().get_connect_balance()

    def bank_account_active(self):
        """Check if the user has an active bank account"""
        return True if self.bank_accounts.filter(is_active=True).first() else False


class Address(models.Model):
    """Consolidated Address Model for both ServiceProvider and Users"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='address')
    address = models.CharField(max_length=255, help_text="Service location address.")
    city = models.CharField(null=True, blank=True, max_length=100, help_text="City of the service location.")
    region = models.CharField(null=True, blank=True, max_length=100, help_text="Region of the service location.")
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, blank=True,
                                related_name="user_addresses")
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True,
                                   help_text="Latitude of the service location.")
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True,
                                    help_text="Longitude of the service location.")
    zip_code = models.CharField(max_length=20, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'User Address'
        verbose_name_plural = 'User Addresses'
        ordering = ['-created_at']

    def __str__(self):
        return str(self.address)


class UserImage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='images')
    image = ResizedImageField(
        upload_to='users/images/', size=[800, 800], quality=75, force_format='PNG',
        help_text='size of logo must be 800*800 and format must be png image file', crop=['middle', 'center']
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'User Image'
        verbose_name_plural = 'User Images'
        ordering = ['-created_at']


class UserContact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contacts')
    name = models.CharField(max_length=255, blank=True, null=True)
    phone_number = PhoneNumberField()

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = 'User Contact'
        verbose_name_plural = 'User Contacts'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.username} - {self.phone_number}"


class BlockedUser(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blocked_users',
        help_text="The user who blocked another user."
    )
    blocked_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='blocked_by',
        help_text="The user who is being blocked."
    )
    reason = models.TextField(blank=True, null=True, help_text="Optional reason for blocking the user.")

    created_at = models.DateTimeField(auto_now_add=True, help_text="The date and time when the user was blocked.")
    updated_at = models.DateTimeField(auto_now=True, help_text="The date and time when the block was last updated.")

    class Meta:
        unique_together = ['user', 'blocked_user']
        verbose_name = 'Blocked User'
        verbose_name_plural = 'Blocked Users'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.username} blocked {self.blocked_user.username}"


class PasswordResetOTP(models.Model):
    user = models.OneToOneField("User", on_delete=models.CASCADE, related_name="otp")
    otp_code = models.CharField(max_length=6)
    created_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField()

    def is_valid(self):
        """Check if the OTP is still valid"""
        return timezone.now() < self.expires_at

    def __str__(self):
        return f"OTP for {self.user.email} - {self.otp_code}"
