"use server";

import { UserData } from "@/app/register/page";

export const UserRegistration = async (data: UserData) => {
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-store",
    });
    const userRes = await res.json();
    return userRes;
};
