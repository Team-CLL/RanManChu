from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from ranmanchu.user_auth.views import RegisterAPIView, TokenLogoutView, UserInfoView

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('api/token/logout/', TokenLogoutView.as_view(), name='token_logout'),
    path('info/', UserInfoView.as_view(), name='user_information')
]