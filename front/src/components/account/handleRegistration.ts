import fetchAPI from "@/src/utils/fetch";

interface HandleRegistrationProps {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    setErrors: (errors: Map<string, string>) => void;
    errors: Map<string, string>;
    onSuccess: () => void;
}
export async function handleRegistration({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    setErrors,
    errors,
    onSuccess,
}: HandleRegistrationProps) {
    const newErrors = new Map(errors);

    fetchAPI({
        path: "users/register/",
        method: "POST",
        body: {
            email,
            first_name: firstName,
            last_name: lastName,
            password: password,
            password1: password,
            password2: confirmPassword
        }
    }).then((_) => {
        setErrors(new Map());
        onSuccess();
    }).catch((error) => {
        console.log(error)
        if (error.email) {
            if (error.email.includes('Enter a valid email address.')) {
                newErrors.set('email', "Entrez une adresse email valide.");
            }
            if (error.email.includes("User with this Email already exists.")) {
                newErrors.set('email', "Cette adresse mail est déjà utilisée.");
            }
        } else {
            newErrors.delete('email');
        }
        if (error.password2) {
            if (error.password2.includes('The two password fields didn’t match.')) {
                newErrors.set('confirmPassword', "Les mots de passe ne correspondent pas.");
            }
            if (error.password2.includes('This password is too short. It must contain at least 8 characters.')) {
                newErrors.set('password', "Le mot de passe doit contenir au moins 8 caractères.");
            }
        } else {
            newErrors.delete('confirmPassword');
            newErrors.delete('password');
        }
        setErrors(newErrors);
    });

}