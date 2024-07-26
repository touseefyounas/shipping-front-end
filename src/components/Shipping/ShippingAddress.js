import AddressForm from "./AddressAutoFill";
import PackageForm from "./PackageSize";

const ShippingAddress = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 items-start m-5'>
            {/* <div className="bg-white rounded-md shadow-md min-h-40 w-full md:w-3/4 lg:w-4/5">
                <h1 className='m-2 p-2 font-medium'>Sender</h1>
                <AddressForm/>             
            </div> */}
            <div className="bg-white rounded-md shadow-md min-h-40 w-full md:w-3/5">
            <h1 className='m-2 p-2 font-medium'>Recipient</h1>
            <AddressForm/>
            </div>
            <div className="bg-white rounded-md shadow-md min-h-40 w-full md:w-3/5">
            <h1 className='m-2 p-2 font-medium'>Package</h1>
            <PackageForm/>
            </div>
            </div>
        </div>
    );
}


export default ShippingAddress;