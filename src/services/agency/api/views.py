from rest_framework import viewsets
from .serializers import (
    AgencySerializer, AgencyVehicleSerializer, AgencyVehicleImageSerializer,
    PlaceSerializer, PlaceImageSerializer
)
from ..models import Agency, AgencyVehicle, AgencyVehicleImage, Place, PlaceImage


class AgencyViewSet(viewsets.ModelViewSet):
    queryset = Agency.objects.all()
    serializer_class = AgencySerializer


class AgencyVehicleViewSet(viewsets.ModelViewSet):
    queryset = AgencyVehicle.objects.all()
    serializer_class = AgencyVehicleSerializer


class AgencyVehicleImageViewSet(viewsets.ModelViewSet):
    queryset = AgencyVehicleImage.objects.all()
    serializer_class = AgencyVehicleImageSerializer


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer


class PlaceImageViewSet(viewsets.ModelViewSet):
    queryset = PlaceImage.objects.all()
    serializer_class = PlaceImageSerializer
