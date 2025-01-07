import Navbar from "../components/components/navbar";
import Banner from "./components/banner";
import Events from "./components/events";
import Table from "./components/table";


export default function Dashboard(){

    return(
        <>
        <Navbar/>  
        <div className="container mx-auto">
            <Banner/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Table/>
                <Events/>
            </div>

        </div>
        </>
    )

}