from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from tickets.models import Ticket
from tickets.serializers.input import NewTicketInput


def _parse_request(request):
    serializer = NewTicketInput(data=request.data)
    serializer.is_valid(raise_exception=True)
    return serializer.validated_data


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def new_ticket(request):
    data = _parse_request(request)
    user = request.user
    ticket = Ticket(
        type=data.get('type'),
        priority=data.get('priority'),
        title=data.get('title'),
        description=data.get('description'),
        context=data.get('context'),
        page=data.get('page'),
        author=user
    )
    if ticket is not None:
        ticket.save()
        return Response({}, status=201)
    else:
        return Response({}, status=400)
