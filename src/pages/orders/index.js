import Datatable from "../../components/DataTable";
import { orders } from "../../utils/ShippoApi/dummyData";


const Orders = () => {
    return (
        <div >
            <div >
             <Datatable table={orders}/>
            </div>
        </div>
    );
}


export default Orders;