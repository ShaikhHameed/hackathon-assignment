import Navbar from "../components/components/navbar";

export default function AddEvent(){

    return(
        <>
            <Navbar/>

            <div className="container mx-auto">
                <div className="my-4 border shadow rounded-lg p-5">
                <h2 className="text-3xl font-normal tracking-widest text-gray-900 text-center mb-5 ">Upcoming Events</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="">
                            <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">
                            Event name
                            </label>
                            <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            />
                        </div>

                        <div className="">
                            <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">
                            Event Location
                            </label>
                            <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            />
                        </div>
                        <div className="">
                            <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900">
                            URL
                            </label>
                            <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            required
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}