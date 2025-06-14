from django.contrib import admin
from .models import Interest, UserInterest, UserMatch


# Admin for Interest
@admin.register(Interest)
class InterestAdmin(admin.ModelAdmin):
    list_display = ['name', 'user_count']
    search_fields = ['name']
    ordering = ['name']

    def user_count(self, obj):
        return obj.users.count()
    user_count.short_description = 'Number of Users'

# Admin for UserInterest
@admin.register(UserInterest)
class UserInterestAdmin(admin.ModelAdmin):
    list_display = ['user', 'interest']
    list_filter = ['interest']
    search_fields = ['user__username', 'user__email', 'interest__name']
    autocomplete_fields = ['user', 'interest']
    raw_id_fields = ['user']

# Admin for UserMatch
@admin.register(UserMatch)
class UserMatchAdmin(admin.ModelAdmin):
    list_display = ['user', 'matched_user', 'score', 'created_at']
    list_filter = ['created_at']
    search_fields = ['user__username', 'matched_user__username']
    date_hierarchy = 'created_at'
    raw_id_fields = ['user', 'matched_user']
    ordering = ['-score']
