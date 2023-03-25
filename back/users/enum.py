from django.db import models


class UserRole(models.TextChoices):
    client = "client"
    dev = "dev"
