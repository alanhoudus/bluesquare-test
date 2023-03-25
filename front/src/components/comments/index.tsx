import User from "@/src/models/User";
import AddComment from "./AddComment";
import Comments from "./Comments";

interface CommentSectionProps {
    user: User;
    ticketId: string;
}


export default function CommentSection({ user, ticketId }: CommentSectionProps) {
    return (
        <div className="flex flex-col gap-10">
            <Comments ticketId={ticketId} />
            <AddComment ticketId={ticketId} />
        </div>
    )
}