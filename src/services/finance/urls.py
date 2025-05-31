from django.urls import path, include

app_name = 'finance'
urlpatterns = [
    path('finance/api/', include('src.services.finance.api.urls', namespace='finance-api')),
]


