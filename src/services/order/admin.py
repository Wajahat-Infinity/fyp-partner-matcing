from django.contrib import admin

from src.services.order.models import OrderPackage


# Register your models here.

@admin.register(OrderPackage)
class OrderPackageAdmin(admin.ModelAdmin):
    list_display = ['user', 'travel_package', 'status', 'payment_status', 'booking_date']
    search_fields = ['user__username', 'travel_package__title']
    list_filter = ['status', 'payment_status', 'booking_date']
    date_hierarchy = 'booking_date'