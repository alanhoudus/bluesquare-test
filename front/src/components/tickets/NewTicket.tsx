import User from "@/src/models/User"
import Input from "@/src/ui/Input";
import Select from "@/src/ui/Select";
import TextArea from "@/src/ui/TextArea";
import { useState } from "react";
import { handleNewTicket } from "./handleTickets";


export default function NewTicket() {
    const [type, setType] = useState<string | null>("");
    const [priority, setPriority] = useState<string | null>("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [context, setContext] = useState("");
    const [page, setPage] = useState("");
    const [errors, setErrors] = useState(new Map());

    const priorityMap = new Map([
        ["Basse", "low"],
        ["Moyenne", "medium"],
        ["Haute", "high"],
    ]);
    const typeMap = new Map([
        ["Bug", "bug"],
        ["Amélioration", "feature"],
        ["Autre", "other"],
    ]);

    console.log(type)

    const isButtonDisabled = !type || !priority || !title || !description || !context || !page;

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-[1000px]">
            <form
                onSubmit={(e) => { e.preventDefault() }}
                className="flex flex-col gap-3 w-[250px]"
            >
                <div className="flex flex-col items-center gap-5">
                    <div className="flex gap-10">
                        <Select
                            label="Type"
                            placeholder="Choisir un type"
                            onChange={(e) => setType(e)}
                            values={typeMap}
                            selected={type}
                        />
                        <Select
                            label="Priorité"
                            placeholder="Choisir une priorité"
                            onChange={(e) => setPriority(e)}
                            values={priorityMap}
                            selected={type}
                        />
                    </div>
                    <Input
                        label="Titre"
                        id="titre"
                        placeholder="Titre"
                        value={title}
                        onChange={(e) => setTitle(e)}
                        errorsList={errors}
                        error="title"
                        inputClassName="w-[400px]"
                    />
                    <TextArea
                        label="Description"
                        id="description"
                        placeholder="Veuillez décrire au mieux le problème rencontré."
                        value={description}
                        onChange={(e) => setDescription(e)}
                        errorsList={errors}
                        error="description"
                    />
                    <TextArea
                        label="Contexte"
                        id="context"
                        placeholder="Veuillez décrire le contexte du problème."
                        value={context}
                        onChange={(e) => setContext(e)}
                        errorsList={errors}
                        error="context"
                    />
                    <TextArea
                        label="Page concernée"
                        id="page"
                        placeholder="Sur quelle page étiez-vous lorsque vous avez rencontré ce problème ?"
                        value={page}
                        onChange={(e) => setPage(e)}
                        errorsList={errors}
                        error="page"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <button
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full " + (isButtonDisabled ? "opacity-50 cursor-not-allowed" : "")}
                        type="submit"
                        onClick={() => {
                            if (isButtonDisabled) return;
                            handleNewTicket({ type, priority, title, description, context, page, setErrors, errors })
                        }}
                    >
                        Envoyer le formulaire
                    </button>
                </div>
            </form>
        </div>
    );
}