import { getComments } from "@/src/api/getComments";
import fetchAPI from "@/src/utils/fetch";
import Cookies from "js-cookie";

interface sendCommentProps {
    content: string;
    ticketId: string;
}

export function sendComment({ content, ticketId }: sendCommentProps) {
    fetchAPI({
        path: `comments/new/?ticket_id=${ticketId}`,
        method: "POST",
        body: { content }
    }).then((response) => {
        console.log(response);
    })
        .catch((error) => {
            console.log(error);
        })
}