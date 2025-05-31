from django.contrib import admin
from .models import AgentOffer, AgentProfile, Certification, Language

admin.site.register(AgentProfile)
admin.site.register(AgentOffer)
admin.site.register(Certification)
admin.site.register(Language)