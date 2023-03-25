import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useGetUserToken } from "../components/account/useGetUserToken";

interface HeaderProps {
    title: string;
}

function removeUserToken(setUserToken: (_: string) => void) {
    localStorage.removeItem("userToken");
    setUserToken("");
}

export default function Header({ title }: HeaderProps) {
    const [userToken, setUserToken] = useState<string | null>(null);
    const { userToken: token, isLoading } = useGetUserToken();
    useEffect(() => {
        if (token && !isLoading) {
            setUserToken(token);
        }
    }, [token]);
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className="flex justify-between items-center py-4 px-6 bg-gray-200">
                <Link href="/">
                    <h1 className="sm:2xl md:text-5xl font-bold text-[#5050c1]">Blue Square Test</h1>
                </Link>
                <nav className="flex gap-10">
                    <Link href="/" className="hover:text-[#5050c1]"> Accueil </Link>
                    {userToken ? (
                        <>
                            <Link href="/account/profile" className="hover:text-[#5050c1]"> Mon compte </Link>
                            <Link href="/tickets/list" className="hover:text-[#5050c1]"> Les tickets en cours </Link>
                            <Link href="/tickets/new" className="hover:text-[#5050c1]"> Nouveau ticket  </Link>
                            <Link href="/" className="hover:text-[#5050c1]" onClick={() => removeUserToken(setUserToken)}> Déconnexion </Link>
                        </>
                    ) : (
                        <>

                            <Link href="/account/login" className="hover:text-[#5050c1]"> Connexion </Link>
                            <Link href="/account/register" className="hover:text-[#5050c1]"> Inscription </Link>
                        </>
                    )
                    }
                </nav>
            </header>
        </>
    );
}