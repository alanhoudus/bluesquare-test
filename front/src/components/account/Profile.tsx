import { getUser } from "@/src/api/getUser";
import User from "@/src/models/User"
import { useRouter } from "next/router";
import { useEffect, useState } from "react"
import { useGetUserToken } from "./useGetUserToken";

export default function Profile() {
    const [user, setUser] = useState<User | null>(null);
    const { userToken, isLoading } = useGetUserToken();
    const router = typeof window !== "undefined" ? useRouter() : null;
    console.log(userToken)

    useEffect(() => {
        if (!isLoading && !userToken && router) {
            console.log("redirect")
            router.push("/account/login");
        }
    }, [isLoading, userToken, router, setUser]);

    useEffect(() => {
        (async () => {
            if (userToken) {
                const user = await getUser();
                setUser(user);
            }
        })();
    }, [userToken]);
    return (
        <div className="flex flex-col justify-center items-center h-[500px]">
            {userToken && (<>
                <h1 className="text-3xl font-bold mb-4">Mon compte</h1>
                <div className="bg-blue-100 rounded-lg shadow-xl p-6 mb-6 border border-blue-300 min-w-[500px] ">
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-blue-500">Email:</p>
                        {user ? <p className="text-blue-900 w-full bg-white rounded-xl p-2">{user.email}</p> : <p>Loading...</p>}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold mt-4 text-blue-500">Prénom :</p>
                        {user ? <p className="text-blue-900 w-full bg-white rounded-xl p-2">{user.firstName}</p> : <p>Loading...</p>}
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold mt-4 text-blue-500">Nom :</p>
                        {user ? <p className="text-blue-900 w-full bg-white rounded-xl p-2">{user.lastName}</p> : <p>Loading...</p>}
                    </div>
                </div>
            </>)
            }
        </div>
    )
}