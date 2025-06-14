from django.urls import path, include

app_name = 'order'
urlpatterns = [
    path('/', include('src.services.order.api.urls', namespace='order-api')),
]
