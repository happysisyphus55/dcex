'use client';
import { useSession } from "next-auth/react";

export const AppBar = () => {
    const session = useSession();
    return <div className="border-b px-2 py-2 justify-between">
        <div>
            dcex
        </div>
        <div>
           
        </div>
    </div>
}