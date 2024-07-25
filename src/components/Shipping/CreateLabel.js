import { Outlet } from "react-router-dom";

const CreateLabel = () =>{
    return (
        <div className="bg-gray-100">
        <div className="flex justify-around items-center sticky bg-white shadow-md h-20">
            <div className="flex items-center justify-center h-16 w-40 ">
                <button className="text-sm font-normal rounded-sm hover:shadow-xl py-2 px-4">Back to Orders</button>
            </div>
            <div className="flex items-center justify-center h-16 w-40">
                <p>Create New Label</p>
            </div>
            <div className="flex items-center justify-center h-16 w-40">
            <button className="text-sm font-normal rounded-sm hover:shadow-xl bg-gray-800 text-white py-2 px-4">Next<span className="hidden md:inline">: Order Details</span></button>
            </div>
        </div>
        <Outlet/> 
        </div>
    )
}

export default CreateLabel;