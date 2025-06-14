from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.core.exceptions import ValidationError
from src.services.users.models import User


class Language(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name


class Certification(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    file = models.FileField(upload_to='certifications-lol/', blank=True, null=True)

    def __str__(self):
        return self.name


class AgentProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=150)
    experience_years = models.PositiveIntegerField(
        default=0,
        validators=[MinValueValidator(0), MaxValueValidator(50)],
        help_text="Years of experience (0-50)"
    )
    image = models.ImageField(upload_to='agent-profile-images/', blank=True)
    cover_image = models.ImageField(upload_to='profiles-cover/', blank=True, null=True)
    languages_spoken = models.ManyToManyField(Language, blank=True)
    skills = models.TextField(help_text="Describe your specialties (e.g., Tour guide, Visa expert)")
    certifications = models.ManyToManyField(Certification, blank=True)
    availability = models.CharField(max_length=50, default='AVAILABLE', choices=[
        ('AVAILABLE', 'Available'),
        ('BOOKED', 'Booked'),
    ])
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.0)
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [models.Index(fields=['full_name'])]

    def __str__(self):
        return f"Agent: {self.full_name}"


class Place(models.Model):
    PLACE_CATEGORIES = [
        ('TOURIST_ATTRACTION', 'Tourist Attraction'),
        ('HISTORICAL_SITE', 'Historical Site'),
        ('NATURAL_LANDMARK', 'Natural Landmark'),
        ('CULTURAL_SITE', 'Cultural Site'),
        ('ADVENTURE', 'Adventure Spot'),
        ('OTHER', 'Other'),
    ]
    name = models.CharField(max_length=255, unique=True, help_text="Name of the place")
    description = models.TextField(blank=True, help_text="Detailed description of the place")
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True,
        validators=[MinValueValidator(-90.0), MaxValueValidator(90.0)],
        help_text="Latitude of the place"
    )
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, null=True, blank=True,
        validators=[MinValueValidator(-180.0), MaxValueValidator(180.0)],
        help_text="Longitude of the place"
    )
    category = models.CharField(
        max_length=50, choices=PLACE_CATEGORIES, default='TOURIST_ATTRACTION',
        help_text="Category of the place"
    )
    address = models.CharField(max_length=255, blank=True, help_text="Physical address of the place")
    contact_number = models.CharField(max_length=20, blank=True, help_text="Contact phone number")
    website = models.URLField(blank=True, help_text="Official website")
    operating_hours = models.TextField(blank=True, help_text="Operating hours (e.g., Mon-Fri: 9 AM - 5 PM)")
    accessibility_info = models.TextField(blank=True, help_text="Accessibility details")
    local_guide = models.ForeignKey(
        AgentProfile, on_delete=models.SET_NULL, null=True, blank=True, related_name='places',
        help_text="Agency managing or associated with this place"
    )
    rating = models.DecimalField(
        max_digits=3, decimal_places=2, default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)],
        help_text="Average rating (0.0 to 5.0)"
    )
    is_active = models.BooleanField(default=True, help_text="Whether the place is active")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Place"
        verbose_name_plural = "Places"
        indexes = [
            models.Index(fields=['name']),
            models.Index(fields=['category']),
        ]

    def __str__(self):
        return self.name




class AgentOffer(models.Model):
    agent = models.ForeignKey(AgentProfile, on_delete=models.CASCADE, related_name='offers')
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    service_type = models.CharField(max_length=100, help_text="e.g., Tour Guide, Interpreter, Personal Shopper")
    place = models.ForeignKey('Place', on_delete=models.SET_NULL, null=True, blank=True, related_name='agent_offers')
    start_date = models.DateField()
    end_date = models.DateField()
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [models.Index(fields=['title'])]

    def __str__(self):
        return f"{self.agent.full_name} - {self.title}"

    def clean(self):
        if self.end_date <= self.start_date:
            raise ValidationError("End date must be after start date.")
