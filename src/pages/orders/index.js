import { Button } from "primereact/button";
import Datatable from "../../components/DataTable";
import { orders } from "../../utils/ShippoApi/dummyData";
import { Link } from "react-router-dom";


const Orders = () => {
    return (
        <div className="h-screen p-4">
            <div className="flex flex-col p-2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-row justify-between border-b bg-white">
                <h1 className="text-2xl font-bold m-4">Orders</h1>
                <div className="flex space-x-4 m-4">
                    <Button className="text-sm font-normal rounded-sm hover:shadow-xl bg-gray-800 text-white py-2 px-4"><Link to='create'>Create Label</Link></Button>
                    <Button className="text-sm font-normal rounded-sm hover:shadow-xl bg-gray-800 text-white py-2 px-4">Upload Orders</Button>
                    <Button className="text-sm font-normal rounded-sm hover:shadow-xl bg-gray-800 text-white py-2 px-4">Create Order</Button>
                </div>
            </div>
            <div >
                <Datatable table={orders}/>
            </div>
            </div>
        </div>
    );
}


export default Orders;
