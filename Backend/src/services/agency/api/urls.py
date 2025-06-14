from django.urls import path

from src.services.finance.api.views import WalletRetrieveAPIVIew, BankAccountListCreateView, BankAccountDeleteAPIView, \
    WithdrawalListCreateAPIView, TransactionListAPIView

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    AgencyViewSet, AgencyVehicleViewSet, AgencyVehicleImageViewSet,
    PlaceViewSet, PlaceImageViewSet
)

app_name = "agency-api"

router = DefaultRouter()
router.register(r'', AgencyViewSet)
router.register(r'vehicles', AgencyVehicleViewSet)
router.register(r'vehicle-images', AgencyVehicleImageViewSet)
router.register(r'places', PlaceViewSet)
router.register(r'place-images', PlaceImageViewSet)

urlpatterns = [
    path('agency/', include(router.urls)),
]
