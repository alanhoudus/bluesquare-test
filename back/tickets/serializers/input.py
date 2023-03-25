from rest_framework import serializers

from tickets.enum import TicketType, TicketPriority


class NewTicketInput(serializers.Serializer):
    type = serializers.ChoiceField(TicketType.choices)
    priority = serializers.ChoiceField(TicketPriority.choices)
    title = serializers.CharField()
    description = serializers.CharField()
    context = serializers.CharField()
    page = serializers.CharField()


class GetTicketInput(serializers.Serializer):
    ticket_id = serializers.IntegerField()
