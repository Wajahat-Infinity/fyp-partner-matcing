from rest_framework import serializers
from ..models import Language, Certification, AgentProfile, Place, AgentOffer


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = '__all__'


class AgentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgentProfile
        fields = '__all__'
        read_only_fields = ['user', 'rating', 'verified', 'created_at', 'updated_at']


class PlaceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = '__all__'
        ref_name = 'LocalGuidePlace'


class AgentOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model = AgentOffer
        fields = '__all__'
