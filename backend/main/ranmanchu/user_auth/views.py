from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from ranmanchu.user_auth.serializers import UserSerializer


class RegisterAPIView(CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = []

    def post(self, request, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        return Response(data=serializer.data, status=status.HTTP_400_BAD_REQUEST)


class TokenLogoutView(APIView):
    def post(self, request):

        # refresh token을 blacklist에 추가함 으로써 logout 구현
        refresh_token = RefreshToken(request.data['refresh_token'])
        refresh_token.blacklist()

        content = {
            'message': 'logout succeed'
        }

        return Response(data=content, status=status.HTTP_200_OK)
