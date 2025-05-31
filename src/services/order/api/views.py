# src/services/agency/api/views.py

from rest_framework import generics, permissions

from src.services.order.api.serializers import OrderPackageSerializer
from src.services.order.models import OrderPackage


class OrderPackageListCreateAPIView(generics.ListCreateAPIView):
    queryset = OrderPackage.objects.all()
    serializer_class = OrderPackageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OrderPackageRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = OrderPackage.objects.all()
    serializer_class = OrderPackageSerializer
    permission_classes = [permissions.IsAuthenticated]
