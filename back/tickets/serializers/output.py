from rest_framework import serializers

from tickets.enum import TicketType, TicketPriority


class TicketOutput(serializers.Serializer):
    id = serializers.IntegerField()
    author = serializers.CharField()
    type = serializers.ChoiceField(TicketType.choices)
    priority = serializers.ChoiceField(TicketPriority.choices)
    title = serializers.CharField()
    description = serializers.CharField()
    context = serializers.CharField()
    page = serializers.CharField()
