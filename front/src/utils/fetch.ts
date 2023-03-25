import Cookies from "js-cookie";

interface fetchAPIProps {
    path: string;
    method?: string;
    body?: any;
}

export default async function fetchAPI({
    path,
    method = "GET",
    body,
}: fetchAPIProps) {
    const csrfResponse = await fetch(`${process.env.NEXT_PUBLIC_BACK_URL}/users/csrf/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        },
        credentials: 'same-origin'
    });

    const data = await csrfResponse.json();
    const csrfToken = data.csrfToken;

    const headers = new Headers();
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
        headers.append('Authorization', `Token ${userToken}`);
    }
    console.log(userToken)
    headers.append('X-CSRFToken', csrfToken);
    if (body) {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_URL}/${path}`,
        {
            method,
            headers,
            body: body ? new URLSearchParams(body).toString() : undefined,
        }
    ).catch((error) => {
        console.error("API could not be reached");
    });

    if (response) {
        if (!response.ok) {
            const responseText = await response.text();
            return Promise.reject(JSON.parse(responseText ?? "{}"));
        }
        return response.json();
    }

    return Promise.reject("unreachable_api");
}