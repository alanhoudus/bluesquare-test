import fetchAPI from "@/src/utils/fetch";
import Cookies from "js-cookie";

interface HandleLoginProps {
    email: string;
    password: string;
    setErrors: (errors: Map<string, string>) => void;
    errors: Map<string, string>;
}

export function handleLogin({ email, password, errors, setErrors }: HandleLoginProps) {
    fetchAPI({
        path: "users/login/",
        method: "POST",
        body: { email, password }
    }).then((response) => {
        setErrors(new Map());
        const userToken = response.token;
        localStorage.setItem('userToken', userToken);
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