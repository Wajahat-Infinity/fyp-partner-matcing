from django.core.exceptions import ValidationError
from django.db import models

from src.services.agency.models import TravelPackage
from src.services.users.models import User

# Create your models here.
""" ORDER """
class OrderPackage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    travel_package = models.ForeignKey(TravelPackage, on_delete=models.CASCADE, related_name='orders')
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('CONFIRMED', 'Confirmed'),
        ('COMPLETED', 'Completed'),
        ('CANCELLED', 'Cancelled'),
    ]
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    payment_status_choices = [
        ('PENDING', 'Pending'),
        ('PAID', 'Paid'),
        ('FAILED', 'Failed'),
    ]
    payment_status = models.CharField(max_length=20, choices=payment_status_choices, default='PENDING')
    payment_method = models.CharField(max_length=100, blank=True, null=True)
    payment_reference = models.CharField(max_length=255, blank=True, null=True)
    booking_date = models.DateTimeField(auto_now_add=True)
    check_in_date = models.DateField()
    check_out_date = models.DateField()
    number_of_people = models.PositiveIntegerField(default=1)
    special_requests = models.TextField(blank=True, null=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['check_in_date']),
            models.Index(fields=['check_out_date']),
        ]

    def __str__(self):
        return f"Order for {self.travel_package.title} by {self.user.username}"

    def clean(self):
        if self.check_out_date <= self.check_in_date:
            raise ValidationError("Check-out date must be after check-in date.")
        if self.travel_package:
            if self.check_in_date < self.travel_package.start_date or self.check_out_date > self.travel_package.end_date:
                raise ValidationError("Order dates must fall within the travel package's start and end dates.")