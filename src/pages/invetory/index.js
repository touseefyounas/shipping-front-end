import Datatable from "../../components/DataTable";
import { inventory } from "../../utils/ShippoApi/dummyData";
//import { Link } from "react-router-dom";
import { Button } from "primereact/button";

const Inventory = () => {
    return (
        <div className="min-h-full bg-accent p-4">
        <div className="flex flex-col p-2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold m-4">Inventory</h1>
                <div className="flex space-x-4 m-4">
                    <Button className="text-sm font-normal rounded-sm hover:shadow-xl bg-accent hover:bg-gray-950 text-black hover:text-white py-2 px-4">Add Item</Button>
                    <Button className="text-sm font-normal rounded-sm hover:shadow-xl bg-primary text-white py-2 px-4">Upload Items</Button>
                </div>
            </div>
            <div className="overscroll-auto">
             <Datatable table={inventory}/>
            </div>
        </div>
        </div>
    );
}

export default Inventory;