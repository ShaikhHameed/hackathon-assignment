'use client';
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";


export default function Navbar(){

    const { data: session } = useSession();

    return(
        <>
            <div className="container mx-auto">
                <nav className="flex p-3 justify-between rounded-xl">
                    <div>
                        <Link href={'/dashboard'}><span className="font-bold text-fuchsia-900 text-3xl">.HackaThon </span></Link>
                    </div>
                    <div>
                    {session?
                        <div className="flex gap-3">
                        <Link href={'/add-event'}><button className="bg-purple-800 text-white px-3 font-normal py-2 rounded-lg hover:bg-purple-900">Add an Event</button></Link>
                        <button onClick={()=>{signOut()}} className="bg-red-800 text-white px-3 font-normal py-2 rounded-lg hover:bg-red-900">Logout</button>
                        </div>
                    :
                        <Link href={'/auth/login'}><button className="bg-purple-800 text-white px-5 font-normal py-2 rounded-lg hover:bg-purple-900">Login</button></Link>
                    }
                    </div>
                </nav>
            </div>
        </>
    )

}