import { getUser } from '@/src/api/getUser';
import { useGetUserToken } from '@/src/components/account/useGetUserToken';
import TicketInformation from '@/src/components/tickets/TicketInformation';
import Main from '@/src/layout/Main'
import User from '@/src/models/User'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

export default function TicketPage() {
    const [user, setUser] = useState<User | null>(null);
    const { userToken, isLoading } = useGetUserToken();
    const router = typeof window !== "undefined" ? useRouter() : null;

    useEffect(() => {
        if (!isLoading && !userToken && router) {
            console.log("redirect")
            router.push("/account/login");
        }
    }, [isLoading, userToken, router]);

    useEffect(() => {
        (async () => {
            if (userToken) {
                const user = await getUser();
                setUser(user);
            }
        })();
    }, [userToken]);

    return (
        <Main headerTitle="Nouveau ticket">
            {user ? (<TicketInformation user={user} />) : (<div>Chargement...</div>)}
        </Main>
    );
}
