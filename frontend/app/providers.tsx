'use client';

//as session provider is wrapped in commponent 

import { SessionProvider } from "next-auth/react";

export function Providers({children}: {children: React.ReactNode}) {
    return <SessionProvider>{children}</SessionProvider>
}

