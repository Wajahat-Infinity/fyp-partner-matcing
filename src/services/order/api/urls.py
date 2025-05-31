# src/services/agency/api/urls.py

from django.urls import path

from src.services.order.api.views import OrderPackageListCreateAPIView, OrderPackageRetrieveUpdateDestroyAPIView

app_name = "order-api"
urlpatterns = [
    path('order-packages/', OrderPackageListCreateAPIView.as_view(), name='orderpackage-list-create'),
    path('order-packages/<int:pk>/', OrderPackageRetrieveUpdateDestroyAPIView.as_view(), name='orderpackage-detail'),
]
