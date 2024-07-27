import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';


const Datatable = ({table}) => {
    const columnWidth = {
      'SKU': 'w-1/8',
      'Name': 'w-auto',
      'Description': 'w-auto',
      'Inventory': 'w-1/8',
      'Weight': 'w-1/8',
      'Dimensions': 'w-1/6',
      'OrderId':'w-1/8',
      'OrderDate':'w-1/8'
    }
    const dataTable = Object.keys(table[0]);
    
    const formatHeader = (key) => {
      // Insert spaces before uppercase letters, then capitalize the first letter of each word
      return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  };

    return (
        <div>
            
            <DataTable value={table} sortMode='multiple'
            paginator
            rows={10}
            rowsPerPageOptions={[5,10,15]}
            >
                {dataTable.map(key=>{
                  const width = columnWidth[key] || 'w-auto';
                  return <Column key={key} field={key} header={formatHeader(key)} sortable className={width}/>
                })}
            </DataTable>
        </div>
    );
}

export default Datatable;