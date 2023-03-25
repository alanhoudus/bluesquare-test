import { getUser } from "@/src/api/getUser";
import TextArea from "@/src/ui/TextArea";
import { useState } from "react";
import { sendComment } from "./sendComment";

interface AddCommentProps {
    ticketId: string;
}

export default function AddComment({ ticketId }: AddCommentProps) {
    const [content, setContent] = useState<string>("");
    const user = getUser();
    const isButtonDisabled = !content;
    return (
        <div className="flex flex-col justify-center">
            <div>user a écrit..</div>
            <TextArea
                label="Commentaire"
                id="comment"
                placeholder="Ajouter un commentaire.."
                value={content}
                rows={2}
                onChange={(e) => setContent(e)}
            />
            <button
                className={"bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[150px] " + (isButtonDisabled ? "opacity-50 cursor-not-allowed" : "")}
                type="submit"
                onClick={() => {
                    if (isButtonDisabled) return;
                    sendComment({ content, ticketId })
                }}
            >
                Ajouter
            </button>
        </div>
    )
}