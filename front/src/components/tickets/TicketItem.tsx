import { useRouter } from "next/router";

interface TicketItemProps {
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

export default function TicketItem({ id, author, title, priority, description, context, page, status, type }: TicketItemProps) {
    const router = useRouter();
    return (
        <div className="flex justify-center gap-10" key={id}>
            <div>{id}</div>
            <div>{type}</div>
            <div>{title}</div>
            <div>{status}</div>
            <div>{priority}</div>
            <div>{author}</div>
            <button onClick={() => {
                router.push(`/tickets/item?id=${id}`);
            }} >Consulter</button>
        </div>
    )
}