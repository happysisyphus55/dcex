'use client';

import { Button } from "@/components/ui/button";

export const DCexButton = ({children, onClick}: {
    children: React.ReactNode,
    onClick: () => void 
}) => {
    return <Button>{children}</Button>
}