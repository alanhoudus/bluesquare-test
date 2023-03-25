import { useState } from "react";
import NextLink from "next/link";
import Input from "@/src/ui/Input";
import fetchAPI from "@/src/utils/fetch";
import { handleRegistration } from "./handleRegistration";
import { useRouter } from "next/router";

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState(new Map());
    const router = useRouter();
    function handleSuccess() {
        router.push("/account/login?registered=true");
    };
    const isButtonDisabled = !firstName || !lastName || !email || !password || !confirmPassword;
    return (
        <div className="flex flex-col gap-4 justify-center items-center h-[700px] ">
            <form onSubmit={(e) => { e.preventDefault() }} className="flex flex-col gap-3 w-[250px]">
                <div className="flex flex-col items-center gap-3">
                    <Input
                        label="Prénom"
                        id="firstname"
                        placeholder="Prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e)}
                        errorsList={errors}
                        error="firstName"
                    />
                    <Input
                        label="Nom de famille"
                        id="lastname"
                        placeholder="Nom de famille"
                        value={lastName}
                        onChange={(e) => setLastName(e)}
                        errorsList={errors}
                        error="lastName"
                    />
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e)}
                        errorsList={errors}
                        error="email"
                    />
                    <Input
                        label="Mot de passe"
                        id="password"
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e)}
                        errorsList={errors}
                        error="password"
                    />
                    <Input
                        label="Confirmer le mot de passe"
                        id="confirmpassword"
                        type="password"
                        placeholder="Mot de passe"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e)}
                        errorsList={errors}
                        error="confirmPassword"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <button
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full " + (isButtonDisabled ? "opacity-50 cursor-not-allowed" : "")}
                        type="submit"
                        onClick={() => {
                            if (isButtonDisabled) return;
                            handleRegistration({ firstName, lastName, email, password, confirmPassword, setErrors, errors, onSuccess: handleSuccess });
                        }}
                    >
                        S'inscrire
                    </button>
                </div>
            </form>
            <div className="flex flex-col gap-2 text-center">
                <p>Vous avez déjà un compte ? </p>
                <NextLink href="/account/login" className="text-blue-500 hover:font-semibold">
                    Se connecter
                </NextLink>
            </div>
        </div>
    );

}