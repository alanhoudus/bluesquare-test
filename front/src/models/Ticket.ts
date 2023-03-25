export default interface Ticket {
    id: number;
    author: string;
    title: string;
    priority: string;
    description: string;
    context: string;
    page: string;
    status: string;
    type: string;
}