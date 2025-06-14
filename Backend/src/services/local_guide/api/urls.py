from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    LanguageViewSet, CertificationViewSet, AgentProfileViewSet,
    PlaceViewSet, AgentOfferViewSet
)
app_name = "local-guide-api"

router = DefaultRouter()
router.register('languages', LanguageViewSet)
router.register('certifications', CertificationViewSet)
router.register('', AgentProfileViewSet)
router.register('places', PlaceViewSet)
router.register('offers', AgentOfferViewSet)

urlpatterns = [
    path('local-guide/', include(router.urls)),
]
