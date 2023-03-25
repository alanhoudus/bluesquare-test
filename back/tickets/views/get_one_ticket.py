from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from tickets.models import Ticket
from tickets.serializers.input import GetTicketInput
from tickets.serializers.output import TicketOutput


def _parse_request(request):
    serializer = GetTicketInput(data=request.GET)
    serializer.is_valid(raise_exception=True)
    ticket_id = serializer.validated_data.get("ticket_id")
    return ticket_id


@api_view(['GET'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def get_one_ticket(request):
    ticket_id = _parse_request(request)
    ticket = Ticket.objects.get(id=ticket_id)
    print(ticket)
    if ticket is None:
        return Response({}, status=404)

    return Response(TicketOutput(instance=ticket,).data, status=200)
