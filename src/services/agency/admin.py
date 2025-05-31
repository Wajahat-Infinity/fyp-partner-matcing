from django.contrib import admin
from .models import (
    User, Agency, AgencyVehicle, AgencyVehicleImage, Place, PlaceImage,
    Hotel, HotelRoom, RoomBooking, AgencyAgent, AgencyAgentCertification,
    TravelPackage, TravelPackageImage, TravelPackageVehicle, TravelPackageHotel,
    TravelPackageGuide, Review
)

# Inlines
class AgencyVehicleInline(admin.TabularInline):
    model = AgencyVehicle
    fields = ['name', 'vehicle_type', 'seats', 'price', 'is_active']
    show_change_link = True
    extra = 0

class HotelInline(admin.TabularInline):
    model = Hotel
    fields = ['name', 'latitude', 'longitude', 'rating']
    show_change_link = True
    extra = 0

class AgencyAgentInline(admin.TabularInline):
    model = AgencyAgent
    fields = ['full_name', 'experience_years', 'availability', 'rating']
    show_change_link = True
    extra = 0

class PlaceImageInline(admin.TabularInline):
    model = PlaceImage
    fields = ['image', 'caption', 'is_primary', 'priority']
    extra = 1

class AgencyVehicleImageInline(admin.TabularInline):
    model = AgencyVehicleImage
    fields = ['image', 'is_primary']
    extra = 1

class HotelRoomInline(admin.TabularInline):
    model = HotelRoom
    fields = ['room_type', 'price_per_night', 'floor', 'beds', 'is_available']
    extra = 1

class AgencyAgentCertificationInline(admin.TabularInline):
    model = AgencyAgentCertification
    fields = ['name', 'file', 'description']
    extra = 1

class TravelPackageImageInline(admin.TabularInline):
    model = TravelPackageImage
    fields = ['image', 'is_primary', 'priority']
    extra = 1

class TravelPackageVehicleInline(admin.TabularInline):
    model = TravelPackageVehicle
    fields = ['vehicle']
    extra = 1
    autocomplete_fields = ['vehicle']

class TravelPackageHotelInline(admin.TabularInline):
    model = TravelPackageHotel
    fields = ['hotel']
    extra = 1
    autocomplete_fields = ['hotel']

class TravelPackageGuideInline(admin.TabularInline):
    model = TravelPackageGuide
    fields = ['guide']
    extra = 1
    autocomplete_fields = ['guide']

# Admin Classes
@admin.register(Agency)
class AgencyAdmin(admin.ModelAdmin):
    list_display = ['agency_name', 'established_year', 'rating', 'verified']
    search_fields = ['agency_name', 'description']
    list_filter = ['verified', 'established_year']
    inlines = [AgencyVehicleInline, HotelInline, AgencyAgentInline]
    ordering = ['agency_name']


    def save_formset(self, request, form, formset, change):
        if not change:  # For new Agency instances
            form.instance.save()  # Save the Agency first
        return super().save_formset(request, form, formset, change)

@admin.register(Place)
class PlaceAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'rating', 'is_active']
    search_fields = ['name', 'description']
    list_filter = ['category', 'is_active', 'agency']
    inlines = [PlaceImageInline]
    ordering = ['name']  # Add this line


@admin.register(AgencyVehicle)
class AgencyVehicleAdmin(admin.ModelAdmin):
    list_display = ['name', 'vehicle_type', 'seats', 'price', 'is_active']
    search_fields = ['name', 'description']
    list_filter = ['vehicle_type', 'is_active']
    inlines = [AgencyVehicleImageInline]
    ordering = ['name']  # Add this line

@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ['name', 'latitude', 'longitude', 'rating']
    search_fields = ['name', 'description']
    list_filter = ['rating']
    inlines = [HotelRoomInline]

@admin.register(HotelRoom)
class HotelRoomAdmin(admin.ModelAdmin):
    list_display = ['room_type', 'price_per_night', 'is_available']
    search_fields = ['room_type']
    list_filter = ['is_available', 'floor']

@admin.register(RoomBooking)
class RoomBookingAdmin(admin.ModelAdmin):
    list_display = ['user', 'room', 'check_in', 'check_out', 'status']
    search_fields = ['user__username']
    list_filter = ['status', 'check_in', 'check_out']
    date_hierarchy = 'check_in'

@admin.register(AgencyAgent)
class AgencyAgentAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'experience_years', 'availability', 'rating']
    search_fields = ['full_name']
    list_filter = ['availability', 'verified']
    inlines = [AgencyAgentCertificationInline]

@admin.register(TravelPackage)
class TravelPackageAdmin(admin.ModelAdmin):
    list_display = ['title', 'place', 'start_date', 'end_date', 'price', 'is_active']
    search_fields = ['title', 'description']
    list_filter = ['is_active', 'start_date', 'end_date', 'agency']
    inlines = [
        TravelPackageImageInline,
        TravelPackageVehicleInline,
        TravelPackageHotelInline,
        TravelPackageGuideInline
    ]
    fieldsets = [
        ('Basic Info', {'fields': ['agency', 'title', 'description', 'place']}),
        ('Details', {'fields': ['food_included', 'itinerary']}),
        ('Dates and Price', {'fields': ['start_date', 'end_date', 'price']}),
        ('Status', {'fields': ['is_active']}),
    ]
    autocomplete_fields = ['agency', 'place']

@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ['user', 'content_object_display', 'rating', 'created_at']
    search_fields = ['comment']
    list_filter = ['rating', 'created_at', 'content_type']

    def content_object_display(self, obj):
        return str(obj.content_object)
    content_object_display.short_description = 'Content Object'
