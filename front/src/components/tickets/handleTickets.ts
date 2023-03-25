import fetchAPI from "@/src/utils/fetch";

interface handleNewTicket {
    type: string;
    priority: string;
    title: string;
    description: string;
    context: string;
    page: string;
    setErrors: (errors: Map<string, string>) => void;
    errors: Map<string, string>;
}

export function handleNewTicket({ type, priority, title, description, context, page, setErrors, errors }: handleNewTicket) {
    fetchAPI({
        path: "tickets/new/",
        method: "POST",
        body: { type, priority, title, description, context, page }
    }).then((response) => {
        setErrors(new Map());
        console.log(response)
    })
        .catch((error) => {
            const newErrors = new Map(errors);
            if (error.detail === "unknown user") {
                newErrors.set('password', "Identifiants incorrects.");
            } else {
                newErrors.delete('password');
            }
            setErrors(newErrors);
        })
}