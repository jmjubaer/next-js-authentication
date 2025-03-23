/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Sidebar from "@/components/shared/Sidebar";
import { getUserInfo } from "@/utils/getUserFromToken";
import { JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Next Auth Dashboard",
//     description: "Generated by create next app",
// };

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [user, setUser] = useState<JwtPayload | null>(null);
    // const router = useRouter();
    useEffect(() => {
        const userData = getUserInfo();
        // console.log(userData);
        if (userData) {
            setUser(userData);
        }
    }, []);
    // console.log(user);
    return (
        <div className='min-h-screen my-2'>
            <div className='flex justify-between'>
                <div className='w-[20%]'>
                    <Sidebar />
                </div>
                <div className='w-[80%] bg-slate-100 rounded-xl ml-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}
