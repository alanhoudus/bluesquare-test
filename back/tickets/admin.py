from django.contrib import admin

# Register your models here.
from django.contrib import admin

from tickets.models import Ticket


@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'author',
        'type',
        'priority',
        'title',
        'description',
        'context',
        'page',
    ]
