import AddressForm from "./AddressAutoFill";

const ShippingAddress = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 items-center m-5'>
            <div className="bg-white rounded-md shadow-md min-h-40 w-full md:w-3/4 lg:w-4/5">
                <h1 className='m-2 p-2 font-medium'>Sender</h1>
                <AddressForm/>             
            </div>
            <div className="bg-white rounded-md shadow-md min-h-40 w-full md:w-3/4 lg:w-4/5">
            <h1 className='m-2 p-2 font-medium'>Recipient</h1>
            <AddressForm/>
            </div>
            </div>
        </div>
    );
}


export default ShippingAddress;