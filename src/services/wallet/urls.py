from django.urls import path, include

app_name = "wallet"

urlpatterns = [
    path('wallet/api/', include('src.services.wallet.api.urls', namespace='wallet-api')),
]
