import Navbar from "../components/components/navbar";

export default function AddEvent(){

    return(
        <>
            <Navbar/>

            <div className="container mx-auto">
                <div className="my-4 border w-full max-w-lg mx-auto my-5 shadow rounded-lg p-5">
                <h2 className="text-3xl font-normal tracking-widest text-gray-900 text-center mb-5 ">Upcoming Events</h2>

                    <div className="grid grid-cols-1 gap-5">
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
                        <div className="">
                        <button
                            type="submit"
                            className="w-full text-white bg-purple-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                        >
                           Create Event
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}