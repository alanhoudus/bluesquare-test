import { getTickets } from "@/src/api/getTickets";
import Ticket from "@/src/models/Ticket";
import User from "@/src/models/User";
import { useEffect, useState } from "react";
import TicketItem from "./TicketItem";

export default function TicketList() {
    const [tickets, setTickets] = useState<Ticket[] | null>(null)
    const ticketLoading = tickets === null;

    useEffect(() => {
        (async () => {
            const tickets = await getTickets();
            setTickets(tickets);
        })();
    }, [])
    return (
        <div>
            {ticketLoading && (<div>Chargement des tickets...</div>)}
            {!ticketLoading && tickets?.length === 0 && (<div>Aucun ticket</div>)}
            {!ticketLoading && tickets?.length > 0 && (
                <div className="flex flex-col gap-5">
                    <div className="flex justify-center gap-10">
                        <div>
                            #
                        </div>
                        <div>
                            Type
                        </div>
                        <div>
                            Titre
                        </div>
                        <div>
                            Statut
                        </div>
                        <div>
                            Priorité
                        </div>
                        <div>
                            Dernière activité
                        </div>
                    </div>
                    <div>
                        {tickets.map((ticket) => (
                            <TicketItem id={ticket.id} author={ticket.author} description={ticket.description} page={ticket.page} context={ticket.context} status={ticket.status} title={ticket.title} priority={ticket.priority} type={ticket.type} />
                        ))}
                    </div>

                </div>
            )}
        </div>
    )
}