from django.urls import path, include

app_name = 'agency-api'
urlpatterns = [
    path('/', include('src.services.agency.api.urls', namespace='agency-api')),
]


