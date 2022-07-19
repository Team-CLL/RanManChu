from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    birth = models.DateField(null=True)
    profile_image = models.CharField(null=True, max_length=2083)