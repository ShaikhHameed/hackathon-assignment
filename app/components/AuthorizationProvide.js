'use client';
import { SessionProvider } from "next-auth/react";

export default function AuthorizationProvider({children}){

    return <SessionProvider>{children}</SessionProvider>;

}