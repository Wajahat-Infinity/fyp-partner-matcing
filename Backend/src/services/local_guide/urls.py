from django.urls import path, include

app_name = 'local-guide-api'
urlpatterns = [
    path('/', include('src.services.local_guide.api.urls', namespace='local-guide-api')),
]


