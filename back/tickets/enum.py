from django.db import models


class TicketPriority(models.TextChoices):
    low = "low"
    medium = "medium"
    high = "high"


class TicketType(models.TextChoices):
    bug = "bug"
    feature = "feature"
    other = "other"


class TicketStatus(models.TextChoices):
    open = "open"
    closed = "closed"
