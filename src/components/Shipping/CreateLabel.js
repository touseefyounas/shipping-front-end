import { Outlet, Link } from "react-router-dom";
import { FaAngleLeft } from 'react-icons/fa6';

const CreateLabel = () =>{
    return (
        <div className="bg-background">
        <div className="flex justify-around items-center sticky bg-white shadow-md h-20">
            <div className="flex items-center justify-center h-16 w-40 ">
                <button className="text-sm font-normal rounded-sm hover:shadow-xl py-2 px-4 hover:bg-primary hover:text-white text-text border bg-accent"><div className="flex items-center"><FaAngleLeft/><Link to='/orders'> Orders</Link></div></button>
            </div>
            <div className="flex items-center justify-center h-16 w-40">
                <p>Create New Label</p>
            </div>
            <div className="flex items-center justify-center h-16 w-40">
            <button className="text-sm font-normal rounded-sm hover:shadow-xl bg-secondary hover:bg-primary hover:text-white text-text py-2 px-4">Save</button>
            </div>
        </div>
            <Outlet/> 
        </div>
    )
}

export default CreateLabel;