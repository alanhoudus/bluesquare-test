from rest_framework.decorators import api_view
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from tickets.models import Ticket
from comments.models import Comment
from comments.serializers.input import NewCommentInput, NewCommentTicketIdInput


def _parse_request(request):
    text_serializer = NewCommentInput(data=request.data)
    text_serializer.is_valid(raise_exception=True)
    content = text_serializer.validated_data.get("content")
    id_serializer = NewCommentTicketIdInput(data=request.GET)
    id_serializer.is_valid(raise_exception=True)
    ticket_id = id_serializer.validated_data.get("ticket_id")
    return content, ticket_id


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def new_comment(request):
    content, ticket_id = _parse_request(request)
    author = request.user
    ticket = Ticket.objects.get(id=ticket_id)
    comment = Comment(
        content=content,
        author=author,
        ticket=ticket)
    if comment is not None:
        comment.save()
        return Response({}, status=201)
    else:
        return Response({}, status=400)
