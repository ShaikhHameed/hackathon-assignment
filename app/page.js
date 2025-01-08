'use client';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(session){
      router.push('/dashboard')
    }else{
      router.push('/auth/login');
    }
  },[session]);

  return (
    <>
      <div className="h-screen w-full flex justify-center items-center text-center">
        <h1 className="text-4xl text-gray-900">Please Wait...</h1>
      </div>
    </>
  );
}
