import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';
import Inventory from '../utils/ShippoApi/dummyData';


const Datatable = () => {
      
    return (
        <div>
            
            <DataTable value={Inventory} sortMode='multiple'
            paginator
            rows={10}
            rowsPerPageOptions={[5,10,15]}
            >
                <Column field='SKU' header='SKU'/>
                <Column field='Name' header='Name'sortable/>
                <Column field='Description' header='Description'/>
                <Column field='Inventory' header='Inventory' sortable/>
                <Column field='Weight' header='Weight' sortable/>
                <Column field='Dimensions' header='Dimensions' sortable/>
            </DataTable>
        </div>
    );
}

export default Datatable;