from django.db import models
from django.utils import timezone

from src.services.users.models import User


class Report(models.Model):
    REPORT_TYPE_CHOICES = [
        ('user', 'User'),
        ('service', 'Service'),
    ]

    reported_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='reports_made',
        help_text="The user who submitted the report."
    )
    report_type = models.CharField(
        max_length=20, choices=REPORT_TYPE_CHOICES, default='user',
        help_text="The type of report: either 'User' or 'Service'."
    )
    reported_user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='reports_received',
        null=True, blank=True,
        help_text="The user being reported, if applicable."
    )

    reason = models.TextField(
        help_text="The reason for reporting. Provide as much detail as possible."
    )
    additional_info = models.TextField(
        blank=True, null=True,
        help_text="Optional additional information about the report."
    )
    created_at = models.DateTimeField(
        default=timezone.now,
        help_text="The date and time when the report was created."
    )
    is_resolved = models.BooleanField(
        default=False,
        help_text="Indicates whether the report has been resolved."
    )
    resolved_at = models.DateTimeField(
        null=True, blank=True,
        help_text="The date and time when the report was resolved."
    )

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'
    def __str__(self):
        return f"Report by {self.reported_by.username}"

    def resolve(self):
        """Mark the report as resolved and set the resolved_at timestamp."""
        self.is_resolved = True
        self.resolved_at = timezone.now()
        self.save()
