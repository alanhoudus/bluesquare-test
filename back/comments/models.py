from django.db import models
from users.models import User
from tickets.models import Ticket
from commons.base_model import BaseModel


class Comment(BaseModel):
    ticket = models.ForeignKey(
        Ticket, on_delete=models.CASCADE, related_name='comments')
    author = models.ForeignKey(User, on_delete=models.PROTECT)
    content = models.TextField()
