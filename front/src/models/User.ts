export default interface User {
    email: string;
    firstName: string;
    lastName: string;
}

export function parseUser(input: any): User {
    return {
        firstName: input.first_name,
        lastName: input.last_name,
        email: input.email,
    };
}