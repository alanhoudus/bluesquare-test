import Comment from "../models/Comment";

import fetchAPI from "../utils/fetch";

export async function getComments(id: string): Promise<Comment[]> {
    try {
        const response = await fetchAPI({ path: `comments/all/?ticket_id=${id}` });
        console.log(response);
        return response as Comment[];
    } catch (error) {
        console.log(error);
        throw error;
    }
}
