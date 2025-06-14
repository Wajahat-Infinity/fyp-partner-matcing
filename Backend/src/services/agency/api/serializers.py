from rest_framework import serializers

from src.services.agency.models import Agency, AgencyVehicleImage, AgencyVehicle, PlaceImage, Place


class AgencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Agency
        fields = '__all__'


class AgencyVehicleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgencyVehicleImage
        fields = '__all__'


class AgencyVehicleSerializer(serializers.ModelSerializer):
    images = AgencyVehicleImageSerializer(many=True, read_only=True)

    class Meta:
        model = AgencyVehicle
        fields = '__all__'


class PlaceImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlaceImage
        fields = '__all__'


class PlaceSerializer(serializers.ModelSerializer):
    images = PlaceImageSerializer(many=True, read_only=True)

    class Meta:
        model = Place
        fields = '__all__'
