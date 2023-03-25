import { useEffect, useState } from "react";
import NextLink from "next/link";
import Input from "@/src/ui/Input";
import { useRouter } from "next/router";
import { handleLogin } from "./handleLogin";
import { useGetUserToken } from "./useGetUserToken";

export default function Login() {
    const { userToken: token, isLoading } = useGetUserToken();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registered, setRegistered] = useState(false);
    const [errors, setErrors] = useState(new Map());
    const router = useRouter();
    const query = router.query;
    const isButtonDisabled = !email || !password;

    useEffect(() => {
        if (query.registered) {
            setRegistered(true);
        }
    }, [query]);

    useEffect(() => {
        if (token && !isLoading) {
            router.push("/");
        }
    }, [token]);

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-[700px]">
            {registered && (
                <div className="text-success">
                    Votre compte a bien été créé, vous pouvez vous connecter.
                </div>
            )}
            <form
                onSubmit={(e) => { e.preventDefault() }}
                className="flex flex-col gap-3 w-[250px]"
            >
                <div className="flex flex-col items-center gap-3">
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
                </div>
                <div className="flex flex-col gap-5">
                    <button
                        className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full " + (isButtonDisabled ? "opacity-50 cursor-not-allowed" : "")}
                        type="submit"
                        onClick={() => {
                            if (isButtonDisabled) return;
                            handleLogin({ email, password, errors, setErrors })
                        }}
                    >
                        Connexion
                    </button>
                    <div className="flex flex-col gap-2 text-center">
                        <p>Vous n'avez pas de compte ? </p>
                        <NextLink href="/account/register" className="text-blue-500 hover:font-semibold">
                            Créer un compte
                        </NextLink>
                    </div>
                </div>
            </form>
        </div>
    );
}
