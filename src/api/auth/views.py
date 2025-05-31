from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.apple.views import AppleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView, SocialConnectView, VerifyEmailView
from dj_rest_auth.registration.serializers import VerifyEmailSerializer
from django.contrib.auth import authenticate, login
from rest_framework import permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.generics import RetrieveUpdateAPIView, CreateAPIView, GenericAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from root.settings import GOOGLE_CALLBACK_ADDRESS, APPLE_CALLBACK_ADDRESS
from src.api.auth.serializers import PasswordSerializer, UserSerializer, CustomLoginSerializer, \
    EmailConfirmationSerializer, PasswordResetSerializer, PasswordResetConfirmSerializer
from src.services.users.models import User


class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = GOOGLE_CALLBACK_ADDRESS
    client_class = OAuth2Client


class GoogleConnect(SocialConnectView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = GOOGLE_CALLBACK_ADDRESS
    client_class = OAuth2Client


class AppleLogin(SocialLoginView):
    adapter_class = AppleOAuth2Adapter
    callback_url = APPLE_CALLBACK_ADDRESS
    client_class = OAuth2Client


class AppleConnect(SocialConnectView):
    adapter_class = AppleOAuth2Adapter
    callback_url = APPLE_CALLBACK_ADDRESS
    client_class = OAuth2Client


class CustomLoginView(CreateAPIView):
    serializer_class = CustomLoginSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        login(request, user)
        Token.objects.filter(user=user).delete()
        new_token = Token.objects.create(user=user)
        return Response({'key': new_token.key}, status=status.HTTP_200_OK)



class PasswordResetView(GenericAPIView):
    serializer_class = PasswordResetSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {'detail': 'Password reset Otp has been sent.'},
            status=status.HTTP_200_OK,
        )

class PasswordResetConfirmView(GenericAPIView):
    serializer_class = PasswordResetConfirmSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {'detail': 'Password has been reset with the new password.'},
            status=status.HTTP_200_OK,
        )

class EmailConfirmationView(GenericAPIView):
    serializer_class = EmailConfirmationSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # Confirm email and respond
        email_address = serializer.confirm_email()
        if email_address:
            return Response(
                {"detail": "Email successfully verified."},
                status=status.HTTP_200_OK,
            )
        return Response(
            {"detail": "Email is already verified."},
            status=status.HTTP_400_BAD_REQUEST,
        )


class UserRetrieveChangeAPIView(RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user


class DeactivateUserAPIView(APIView):
    """ Deactivate user account """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PasswordSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        password = serializer.validated_data['password']
        user = request.user

        # Validate the password
        user = authenticate(email=user.email, password=password)
        if user is None:
            return Response(
                data={'error': 'Enter a Valid Password'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Deactivate the user account
        user.is_active = False
        user.save()

        return Response(
            data={'message': 'User account has been deactivated'},
            status=status.HTTP_200_OK
        )


class DeleteUserAPIView(APIView):
    """ Delete user account """
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PasswordSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        password = serializer.validated_data['password']
        user = request.user

        # Validate the password
        user = authenticate(email=user.email, password=password)
        if user is None:
            return Response(
                data={'error': 'Enter a Valid Password'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user.delete()

        return Response(
            data={'message': 'User account has been deactivated'},
            status=status.HTTP_200_OK
        )
