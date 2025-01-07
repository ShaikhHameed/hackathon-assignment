

export default function PrimaryLoader(){
    return(
        <>
            <div role="status" className="flex w-full items-center justify-center h-60  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-400">
                    <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}