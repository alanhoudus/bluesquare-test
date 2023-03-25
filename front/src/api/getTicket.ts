import Ticket from "../models/Ticket";

import fetchAPI from "../utils/fetch";

export async function getTicket(id: number): Promise<Ticket> {
    try {
        const response = await fetchAPI({ path: `tickets/single/?ticket_id=${id}` });
        console.log(response);
        return response as Ticket;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
