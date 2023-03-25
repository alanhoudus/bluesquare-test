import { getTicket } from "@/src/api/getTicket";
import Ticket from "@/src/models/Ticket";
import User from "@/src/models/User";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CommentSection from "../comments";

export default function TicketInformation(user: User) {
    const router = useRouter();
    const { id } = router.query;
    const [ticket, setTicket] = useState<Ticket | null>(null);

    useEffect(() => {
        (async () => {
            const ticket = await getTicket(id);
            setTicket(ticket);
        })();
    }, [])
    return (
        <div>
            {ticket ? (
                <div className="flex flex-col gap-10">
                    <div>
                        <div>
                            {ticket.author}
                        </div>
                        <div>
                            {ticket.title}
                        </div>
                        <div>
                            {ticket.description}
                        </div>
                        <div>
                            {ticket.page}
                        </div>
                        <div>
                            {ticket.type}
                        </div>
                    </div>


                    <CommentSection user={user} ticketId={id} />
                </div>
            ) : (<div>Chargement...</div>)}
        </div>
    )
}