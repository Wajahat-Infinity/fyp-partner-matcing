from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.views.static import serve

from root.settings import ENVIRONMENT, MEDIA_ROOT, STATIC_ROOT
from src.core.handlers import (
    handler404, handler500
)

urlpatterns = []

""" HANDLERS ------------------------------------------------------------------------------------------------------- """
handler404 = handler404
handler500 = handler500

""" INTERNAL REQUIRED APPS ----------------------------------------------------------------------------------------- """
urlpatterns += [
    path('', include('src.api.urls')),
    path('', include('src.apps.whisper.urls')),
]

"""INTERNAL REQUIRED SERVICES --------------------------------------------------------------------------------------"""
urlpatterns += [
    path('', include('src.services.users.urls', namespace='users')),
    path('', include('src.services.wallet.urls', namespace='wallet')),
    path('', include('src.services.agency.urls', namespace='agency')),
    path('', include('src.services.local_guide.urls', namespace='local_guide')),
    path('', include('src.services.order.urls', namespace='local_guide')),
    path('', include('src.services.finance.urls', namespace='finance')),
    path('', include('src.apps.stripe.urls', namespace='stripe')),

]

""" EXTERNAL REQUIRED APPS ----------------------------------------------------------------------------------------- """
urlpatterns += [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),

    path("ckeditor5/", include('django_ckeditor_5.urls'), name="ck_editor_5_upload_file"),

]

""" STATIC AND MEDIA FILES ----------------------------------------------------------------------------------------- """
urlpatterns += [
    re_path(r'^media/(?P<path>.*)$', serve, {'document_root': MEDIA_ROOT}),
    re_path(r'^static/(?P<path>.*)$', serve, {'document_root': STATIC_ROOT}),
]
