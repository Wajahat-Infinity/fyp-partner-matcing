from django.urls import path

from src.services.users.api.views import UserRetrieveUpdateAPIView, UserImageCreateAPIView, UserImageDestroyAPIView, \
    UserAddressRetrieveUpdateAPIView, UserContactListCreateAPIView, UserContactUpdateDestroyAPIView, \
    UserRetrieveAPIView, BlockedUserListCreateAPIView, BlockedUserDestroyAPIView, \
    ReportListCreateApiView

app_name = "users-api"

"""SERVICE SEEKER URLS"""
urlpatterns = [
    path('v1/profile/', UserRetrieveUpdateAPIView.as_view(), name='user-update'),
    path('v1/profile/<str:pk>/', UserRetrieveAPIView.as_view(), name='user-detail'),
    path('v1/image/', UserImageCreateAPIView.as_view(), name='image-update'),
    path('v1/image/<str:pk>/', UserImageDestroyAPIView.as_view(), name='image-delete'),
    path('v1/address/', UserAddressRetrieveUpdateAPIView.as_view(), name='address-update'),
    path('v1/contact/', UserContactListCreateAPIView.as_view(), name='user-contact'),
    path('v1/contact/<str:pk>/', UserContactUpdateDestroyAPIView.as_view(), name='user-contact-delete'),
]

urlpatterns += [
    path('v1/blocked-users/', BlockedUserListCreateAPIView.as_view(), name='blocked-user'),
    path('v1/blocked-users/<str:pk>/', BlockedUserDestroyAPIView.as_view(), name='blocked-user-delete'),
]

urlpatterns += [
    path('v1/report/', ReportListCreateApiView.as_view(), name='report'),
]
