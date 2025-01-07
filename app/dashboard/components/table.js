'use client'

import PrimaryLoader from "@/app/components/components/loaders/primaryLoader";
import { useEffect, useState } from "react";

export default function Table(){
    const [users,setUsers] = useState([]);
    const [loaded,setLoaded] = useState(false);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/users'); // Use the global fetch API
                const data = await response.json();
                if (data) {
                    setLoaded(true);
                    setUsers(data.users);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchData();
    },[]);

    return(
        <>
        <div>
            
            {loaded?
            <>
            <h2 className="text-3xl font-normal tracking-widest text-fuchsia-900 uppercase mb-4">Signed Up users</h2>
            <div className="relative overflow-x-auto w-full shadow-md sm:rounded-lg">
            <table className="w-full table-hover text-sm text-left rtl:text-right bg-gray-200	 ">
                <thead className="text-xs text-gray-900 uppercase bg-gray-300	">
                    <tr>
                        <th className="px-6 py-3 ">S no.</th>
                        <th className="px-6 py-3">Fullname</th>
                        <th className="px-6 py-3">Email</th>
                        <th className="px-6 py-3">Age</th>
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {users && users.length > 0 ?(
                        users.map((user)=>(
                    <tr key={user.id}>
                        <td className="px-6 py-3">{user.id}</td>
                        <td className="px-6 py-3">{user.firstName +' '+user.lastName}</td>
                        <td className="px-6 py-3">{user.email}</td>
                        <td className="px-6 py-3">{user.age}</td>
                    </tr>
                    ))
                ) :<tr>
                    <td>No User Found</td>
                   </tr>}
                </tbody>
            </table>
            </div>
            </>
            : 
            <PrimaryLoader/>
            }
            </div>
        </>
    );

}