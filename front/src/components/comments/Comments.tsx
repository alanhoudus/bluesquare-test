import { getComments } from "@/src/api/getComments";
import Comment from "@/src/models/Comment";
import { useEffect, useState } from "react";

interface CommentProps {
    ticketId: string;
}

export default function Comments({ ticketId }: CommentProps) {
    const [comments, setComments] = useState<Comment[] | null>(null);
    const commentsLoading = comments === null;

    useEffect(() => {
        (async () => {
            const allComments = await getComments(ticketId);
            setComments(allComments);
        })();
    }, [])
    return (
        <div>
            {commentsLoading && (<div>Chargement des commentaires...</div>)}
            {!commentsLoading && comments?.length === 0 && (<div>Aucun commentaire</div>)}
            {!commentsLoading && comments?.length > 0 && (
                <div>
                    {comments.map((comment) => (
                        <div>
                            <div>
                                {comment.author}
                            </div>
                            <div>
                                {comment.content}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}