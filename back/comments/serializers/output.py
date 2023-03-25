from rest_framework import serializers

from comments.models import Comment


class CommentOuput(serializers.Serializer):
    ticket_id = serializers.IntegerField(source='ticket.id')
    author = serializers.CharField()
    content = serializers.CharField()

    class Meta:
        model = Comment
        fields = ['ticket_id', 'author', 'content']
