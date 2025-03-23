"use client"
import { jwtDecode } from "jwt-decode";

export const getUserInfo = () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
        return jwtDecode(token);
    }
    return null;
};
