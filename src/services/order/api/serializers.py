# src/services/agency/api/serializers.py

from rest_framework import serializers

from src.services.order.models import OrderPackage


class OrderPackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderPackage
        fields = '__all__'
        ref_name = 'OrderPackageSerializer'
