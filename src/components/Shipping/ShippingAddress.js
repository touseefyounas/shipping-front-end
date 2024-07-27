import { useState } from "react";

import AddressForm from "./AddressAutoFill";
import PackageForm from "./PackageSize";
import Rates from "./Rates";

const ShippingAddress = () => {
    
    const [ address, setAddress ] = useState({
            "name": "",
            "street1 address-search": "",
            "city": "",
            "state": "",
            "zip": "",
            "country": ""
    });
    const [ dimensions, setDimensions ] = useState({
            "length": "",
            "width": "",
            "height": "",
            "distance_unit": "in",
            "weight": "",
            "mass_unit": "lb"
    });

    return (
        <div className="container lg:w-3/4 mx-auto">
            <div className='flex flex-row flex-wrap md:flex-nowrap gap-5'>
                <div className='flex flex-col md:my-5 md:ml-5 w-full gap-5 md:basis-3/5'>
                    <div className="bg-white rounded-md shadow-md min-h-40">
                    <h1 className='m-2 p-2 font-medium'>Recipient</h1>
                    <AddressForm address={address} setAddress={setAddress}/>
                    </div>
                    <div className="bg-white rounded-md shadow-md min-h-40">
                    <h1 className='m-2 p-2 font-medium'>Package</h1>
                    <PackageForm dimensions={dimensions} setDimensions={setDimensions}/>
                    </div>
                </div>
                <div className='flex flex-col order-first md:order-last md:my-5 md:mr-5 w-full gap-5 md:basis-2/5'>
                <div className="bg-white rounded-md shadow-md min-h-64 w-full">
                    <h1 className='m-2 p-2 font-medium'>Rates</h1>
                    <Rates address={address} dimensions={dimensions}/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ShippingAddress;