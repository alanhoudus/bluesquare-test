import Ticket from "../models/Ticket";

import fetchAPI from "../utils/fetch";

export async function getTickets(): Promise<Ticket[]> {
    try {
        const response = await fetchAPI({ path: "tickets/all/" });
        console.log(response);
        return response as Ticket[];
    } catch (error) {
        console.log(error);
        throw error;
    }
}
