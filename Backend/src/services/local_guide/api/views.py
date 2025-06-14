from rest_framework import viewsets, permissions
from ..models import Language, Certification, AgentProfile, Place, AgentOffer
from .serializers import (
    LanguageSerializer, CertificationSerializer, AgentProfileSerializer,
    PlaceSerializer, AgentOfferSerializer
)
from rest_framework.permissions import IsAuthenticated


class LanguageViewSet(viewsets.ModelViewSet):
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer
    permission_classes = [permissions.IsAuthenticated]


class CertificationViewSet(viewsets.ModelViewSet):
    queryset = Certification.objects.all()
    serializer_class = CertificationSerializer
    permission_classes = [permissions.IsAuthenticated]


class AgentProfileViewSet(viewsets.ModelViewSet):
    serializer_class = AgentProfileSerializer
    queryset = AgentProfile.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return AgentProfile.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.IsAuthenticated]


class AgentOfferViewSet(viewsets.ModelViewSet):
    serializer_class = AgentOfferSerializer
    queryset = AgentOffer.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return AgentOffer.objects.filter(agent__user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(agent=self.request.user.agentprofile)
