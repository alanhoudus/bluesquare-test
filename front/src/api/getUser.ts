import User, { parseUser } from "../models/User";
import fetchAPI from "../utils/fetch";

export async function getUser(): Promise<User> {
    try {
        const response = await fetchAPI({ path: "users/get/" });
        console.log(response);
        return parseUser(response) as User;
    } catch (error) {
        console.log(error);
        if (error.detail === "Invalid token.") {
            localStorage.removeItem("userToken");
        }
        throw error;
    }
}
