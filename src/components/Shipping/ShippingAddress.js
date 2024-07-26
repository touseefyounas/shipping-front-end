import AddressForm from "./AddressAutoFill";
import PackageForm from "./PackageSize";

const ShippingAddress = () => {
    return (
        <div>
            <div className='flex flex-row flex-wrap md:flex-nowrap justify-center gap-5'>
                <div className='flex flex-col md:my-5 md:ml-5 w-full gap-5 md:w-3/5'>
                    {/* <div className="bg-white rounded-md shadow-md min-h-40 w-full md:w-3/4 lg:w-4/5">
                        <h1 className='m-2 p-2 font-medium'>Sender</h1>
                        <AddressForm/>             
                    </div> */}
                    <div className="bg-white rounded-md shadow-md min-h-40 w-full ">
                    <h1 className='m-2 p-2 font-medium'>Recipient</h1>
                    <AddressForm/>
                    </div>
                    <div className="bg-white rounded-md shadow-md min-h-40 w-full">
                    <h1 className='m-2 p-2 font-medium'>Package</h1>
                    <PackageForm/>
                    </div>
                </div>
                <div className='flex flex-col order-first md:order-last md:my-5 md:mr-5 w-full gap-5 md:w-2/5'>
                <div className="bg-white rounded-md shadow-md min-h-40 w-full">
                    <h1 className='m-2 p-2 font-medium'>Rates</h1>
                    <AddressForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ShippingAddress;