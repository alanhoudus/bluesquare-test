from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from tickets.models import Ticket
from tickets.serializers.output import TicketOutput


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_all_tickets(request):
    tickets = Ticket.objects.all()
    print(tickets.first().id)
    return Response(TicketOutput(instance=tickets, many=True).data, status=200)
