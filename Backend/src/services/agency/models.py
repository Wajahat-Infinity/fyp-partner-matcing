from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.core.exceptions import ValidationError
from datetime import date

from src.services.users.models import User


class Agency(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    agency_name = models.CharField(max_length=255)
    description = models.TextField()
    established_year = models.PositiveIntegerField(
        null=True, blank=True,
        validators=[MinValueValidator(1800), MaxValueValidator(date.today().year)],
        help_text="Year the agency was established"
    )
    license_number = models.CharField(max_length=100, blank=True, help_text="Govt registered travel license")
    logo = models.ImageField(upload_to='agency-logos/', blank=True)
    cover_image = models.ImageField(upload_to='profiles-cover/', blank=True, null=True)
    website = models.URLField(blank=True)
    team_size = models.PositiveIntegerField(default=1)
    rating = models.DecimalField(
        max_digits=3, decimal_places=2, default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)],
        help_text="Average rating (0.0 to 5.0)"
    )
    verified = models.BooleanField(default=False)

    class Meta:
        indexes = [models.Index(fields=['agency_name'])]

    def __str__(self):
        return f"Agency: {self.agency_name}"


class AgencyVehicle(models.Model):
    agency = models.ForeignKey(Agency, on_delete=models.CASCADE, related_name='vehicles')
    vehicle_type = models.CharField(max_length=255, choices=[
        ('SEDAN', 'Sedan'),
        ('SUV', 'SUV'),
        ('HYBRID', 'Hybrid'),
        ('OFFROAD', 'Offroad'),
    ])
    name = models.CharField(max_length=255)
    description = models.TextField()
    vehicle_model = models.CharField(max_length=255)
    air_conditioned = models.BooleanField(default=True)
    seats = models.PositiveIntegerField(
        default=4,
        validators=[MinValueValidator(1), MaxValueValidator(50)],
        help_text="Number of seats in the vehicle"
    )
    price = models.DecimalField(max_digits=10, decimal_places=2)
    pricing_period = models.CharField(max_length=255, choices=[
        ('PER_MINUTE', 'Per Minute'),
        ('PER_HOUR', 'Per Hour'),
        ('PER_DAY', 'Per Day'),
    ])
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [models.Index(fields=['vehicle_type'])]


class AgencyVehicleImage(models.Model):
    agency_vehicle = models.ForeignKey(AgencyVehicle, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='service_images/')
    is_primary = models.BooleanField(default=False, help_text="Mark if this is the primary image (Thumbnail)")
    priority = models.PositiveIntegerField(default=0, help_text="Priority for display order (lower = higher)")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Vehicle Image"
        verbose_name_plural = "Vehicle Images"
        ordering = ['priority', 'created_at']
        constraints = [
            models.UniqueConstraint(
                fields=['agency_vehicle', 'is_primary'],
                condition=models.Q(is_primary=True),
                name='unique_primary_image_per_vehicle'
            )
        ]

    def __str__(self):
        return f"Image for {self.agency_vehicle.name}"

    def save(self, *args, **kwargs):
        if self.is_primary:
            AgencyVehicleImage.objects.filter(agency_vehicle=self.agency_vehicle, is_primary=True).exclude(
                pk=self.pk).update(is_primary=False)
        super().save(*args, **kwargs)


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
    agency = models.ForeignKey(
        Agency, on_delete=models.SET_NULL, null=True, blank=True, related_name='places',
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

    @property
    def latitude(self):
        return self.location.y if self.location else None

    @property
    def longitude(self):
        return self.location.x if self.location else None


class PlaceImage(models.Model):
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='place-images/')
    caption = models.CharField(max_length=255, blank=True, help_text="Caption or description")
    is_primary = models.BooleanField(default=False, help_text="Mark as primary image")
    priority = models.PositiveIntegerField(default=0, help_text="Priority for display order")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Place Image"
        verbose_name_plural = "Place Images"
        ordering = ['priority', 'uploaded_at']
        constraints = [
            models.UniqueConstraint(
                fields=['place', 'is_primary'],
                condition=models.Q(is_primary=True),
                name='unique_primary_image_per_place'
            )
        ]

    def __str__(self):
        return f"Image for {self.place.name} ({self.caption or 'No caption'})"

    def save(self, *args, **kwargs):
        if self.is_primary:
            PlaceImage.objects.filter(place=self.place, is_primary=True).exclude(pk=self.pk).update(is_primary=False)
        super().save(*args, **kwargs)


class Hotel(models.Model):
    agency = models.ForeignKey(Agency, on_delete=models.CASCADE, related_name='hotels')
    name = models.CharField(max_length=255)
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
    description = models.TextField()
    rating = models.DecimalField(
        max_digits=3, decimal_places=2, default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)]
    )
    amenities = models.TextField(help_text="Comma-separated")
    image = models.ImageField(upload_to='hotels/', null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [models.Index(fields=['name'])]

    def __str__(self):
        return self.name


class HotelRoom(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='rooms')
    room_type = models.CharField(max_length=255, choices=[
        ('SINGLE', 'Single'),
        ('DOUBLE', 'Double'),
        ('DELUXE', 'Deluxe'),
        ('SUITE', 'Suite')
    ])
    price_per_night = models.DecimalField(max_digits=10, decimal_places=2)
    floor = models.PositiveIntegerField(default=1, validators=[MinValueValidator(0)])
    beds = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1)])
    is_available = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.hotel.name} - {self.room_type} (Floor {self.floor})"


class RoomBooking(models.Model):
    room = models.ForeignKey(HotelRoom, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    check_in = models.DateTimeField()
    check_out = models.DateTimeField()
    booked_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[
        ('BOOKED', 'Booked'),
        ('CANCELLED', 'Cancelled'),
        ('COMPLETED', 'Completed')
    ], default='BOOKED')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user} booked {self.room}"

    def clean(self):
        if self.check_out <= self.check_in:
            raise ValidationError("Check-out must be after check-in.")
        # Check for overlapping bookings
        overlapping_bookings = RoomBooking.objects.filter(
            room=self.room,
            status='BOOKED',
            check_in__lt=self.check_out,
            check_out__gt=self.check_in
        ).exclude(pk=self.pk)
        if overlapping_bookings.exists():
            raise ValidationError("This room is already booked for the selected dates.")


class AgencyAgent(models.Model):
    agency = models.ForeignKey(Agency, on_delete=models.CASCADE, related_name='agents')
    full_name = models.CharField(max_length=150)
    experience_years = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='agent-profile-images/', blank=True)
    cover_image = models.ImageField(upload_to='profiles-cover/', blank=True, null=True)
    languages_spoken = models.CharField(max_length=255, help_text="Comma-separated")
    skills = models.TextField(help_text="Describe specialties (e.g., Tour guide, Visa expert)")
    availability = models.CharField(max_length=50, default='AVAILABLE', choices=[
        ('AVAILABLE', 'Available'),
        ('BOOKED', 'Booked'),
    ])
    rating = models.DecimalField(
        max_digits=3, decimal_places=2, default=0.0,
        validators=[MinValueValidator(0.0), MaxValueValidator(5.0)]
    )
    verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Agent: {self.full_name}"


class AgencyAgentCertification(models.Model):
    agency_agent = models.ForeignKey(AgencyAgent, on_delete=models.CASCADE, related_name='certifications')
    name = models.CharField(max_length=100)
    file = models.FileField(upload_to='agent-certifications/')
    description = models.TextField(blank=True, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Certifications'
        constraints = [
            models.UniqueConstraint(fields=['agency_agent', 'name'], name='unique_certification_per_agent')
        ]

    def __str__(self):
        return self.name


class TravelPackageVehicle(models.Model):
    travel_package = models.ForeignKey('TravelPackage', on_delete=models.CASCADE, related_name='vehicle_associations')
    vehicle = models.ForeignKey(AgencyVehicle, on_delete=models.CASCADE, related_name='package_associations')

    class Meta:
        unique_together = ['travel_package', 'vehicle']


class TravelPackageHotel(models.Model):
    travel_package = models.ForeignKey('TravelPackage', on_delete=models.CASCADE, related_name='hotel_associations')
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name='package_associations')

    class Meta:
        unique_together = ['travel_package', 'hotel']


class TravelPackageGuide(models.Model):
    travel_package = models.ForeignKey('TravelPackage', on_delete=models.CASCADE, related_name='guide_associations')
    guide = models.ForeignKey(AgencyAgent, on_delete=models.CASCADE, related_name='package_associations')

    class Meta:
        unique_together = ['travel_package', 'guide']


class TravelPackage(models.Model):
    agency = models.ForeignKey(Agency, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    place = models.ForeignKey(Place, on_delete=models.SET_NULL, null=True, blank=True, related_name='travel_packages')
    vehicles = models.ManyToManyField(AgencyVehicle, through=TravelPackageVehicle, blank=True)
    hotels = models.ManyToManyField(Hotel, through=TravelPackageHotel, blank=True)
    guides = models.ManyToManyField(AgencyAgent, through=TravelPackageGuide, blank=True)
    food_included = models.BooleanField(default=True)
    itinerary = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=['start_date']),
            models.Index(fields=['end_date']),
        ]

    def __str__(self):
        return self.title

    def clean(self):
        if self.end_date <= self.start_date:
            raise ValidationError("End date must be after start date.")


class TravelPackageImage(models.Model):
    travel_package = models.ForeignKey(TravelPackage, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='packages/')
    is_primary = models.BooleanField(default=False, help_text="Mark as primary image")
    priority = models.PositiveIntegerField(default=0, help_text="Priority for display order")
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['priority', 'created_at']
        constraints = [
            models.UniqueConstraint(
                fields=['travel_package', 'is_primary'],
                condition=models.Q(is_primary=True),
                name='unique_primary_image_per_package'
            )
        ]

    def __str__(self):
        return f"Image for {self.travel_package.title}"

    def save(self, *args, **kwargs):
        if self.is_primary:
            TravelPackageImage.objects.filter(travel_package=self.travel_package, is_primary=True).exclude(
                pk=self.pk).update(is_primary=False)
        super().save(*args, **kwargs)


class Review(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    rating = models.DecimalField(
        max_digits=3, decimal_places=2,
        validators=[MinValueValidator(1.0), MaxValueValidator(5.0)],
        help_text="Rating from 1.0 to 5.0"
    )
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['user', 'content_type', 'object_id'], name='unique_user_review')
        ]
        indexes = [
            models.Index(fields=['content_type', 'object_id']),
        ]

    def __str__(self):
        return f"Review by {self.user} - {self.rating} stars"
