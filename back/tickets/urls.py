from django.urls import path
from tickets.views.new_ticket import new_ticket
from tickets.views.get_all_tickets import get_all_tickets
from tickets.views.get_one_ticket import get_one_ticket


app_name = "tickets"

urlpatterns = [
    path('new/', new_ticket, name='new-ticket'),
    path('all/', get_all_tickets, name='get-all-tickets'),
    path('single/', get_one_ticket, name='get-one-ticket')
]
