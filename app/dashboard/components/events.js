'use client'
import PrimaryLoader from "@/app/components/components/loaders/primaryLoader";
import { useEffect, useState } from "react";
export default function Events(){
    const [loaded,setLoaded] = useState(false);
    const [events,setEvents] = useState([
        {
            'id':1,
            'location':'Mumbai',
            'title':'Hacakathon goregaon',
        },
        {
            'id':2,
            'location':'Pune',
            'title':'Hacakathon Pune',
        },
        {
            'id':3,
            'location':'Chennai',
            'title':'Hacakathon Chennai',
        },
    ]);

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true);
        },1000)
    })

    return(
        <>
        {loaded?
        <>
            <div className="relative">
            <div className="flex flex-col gap-4 align-start h-auto sticky top-5">
            <h2 className="text-3xl font-normal tracking-widest text-purple-700 uppercase">Upcoming Events</h2>
                {events.map((event)=>(
                <div className="p-4 card shadow rounded-lg border" key={event.id}>
                    <div className="flex justify-between w-full items-center">
                        <div>
                            <h2 className="m-0 text-2xl font-semibold capitalize text-gray-900">{event.title}</h2>
                            <h5 className="font-semibold text-gray-400">{event.location}</h5>
                        </div>
                        <div>
                            <button className="bg-fuchsia-700 text-white px-3 font-normal py-2 rounded-lg hover:bg-fuchsia-900">Enroll Now</button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </>
            :<PrimaryLoader/>}

        </>
    );

}