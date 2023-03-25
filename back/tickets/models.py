from django.db import models
from tickets.enum import TicketPriority, TicketType, TicketStatus
from users.models import User
from commons.base_model import BaseModel


class Ticket(BaseModel):
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    type = models.CharField(max_length=20, choices=TicketType.choices)
    priority = models.CharField(
        max_length=20, choices=TicketPriority.choices, default='low')
    title = models.CharField(max_length=200)
    description = models.TextField()
    context = models.TextField()
    page = models.CharField(max_length=200)
    priority = models.CharField(
        max_length=20, choices=TicketStatus.choices, default='open')
