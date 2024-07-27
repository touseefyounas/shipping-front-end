import Datatable from "../../components/DataTable";
import { inventory } from "../../utils/ShippoApi/dummyData";

const Inventory = () => {
    return (
        <div >
            <div >
             <Datatable table={inventory}/>
            </div>
        </div>
    );
}

export default Inventory;