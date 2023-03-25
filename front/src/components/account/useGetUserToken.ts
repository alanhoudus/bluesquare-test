import { useEffect, useState } from "react";

export function useGetUserToken() {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
            setUserToken(token);
        }
        setIsLoading(false);
    });

    return { userToken, isLoading };
}