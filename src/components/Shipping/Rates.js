import getRates from "../../utils/ShippoApi/ShippoApi";
import { useState } from "react";
import { Calendar } from "primereact/calendar";

const Rates = () => {

    const [rates, setRates] = useState([]);
    const [date, setDate ] = useState('');

    const body = JSON.stringify({
        "address_from": {
            "name": "First Test",
            "street1": "253 International Avenue",
            "city": "LaSalle",
            "state": "ON",
            "zip": "N9J1V1",
            "country": "CA"
        },
        "address_to": {
            "name": "Mrs. Hippo",
            "street1": "59 Kingston Road",
            "city": "Toronto",
            "state": "ON",
            "zip": "M4L1S5",
            "country": "CA"
        },
        "parcels": [{
            "length": "5",
            "width": "5",
            "height": "5",
            "distance_unit": "in",
            "weight": "2",
            "mass_unit": "lb"
        }],
        "async": false
    })

    const handleRateClick = async ()=>{
        const rates = await getRates(body);
        const sortedRates = rates.sort((a,b) => Number(a.amount)-Number(b.amount));
        setRates(sortedRates);
    }


    return (
        <div className="flex flex-col items-center gap-3 m-3">
            <button onClick={handleRateClick} className="text-sm font-normal rounded-sm xl:w-1/4 hover:shadow-xl hover:bg-gray-950 bg-gray-800 text-white py-2 px-4">Get Rates</button>
            <p className='text-sm self-start'>Shipment Date</p>
            <Calendar value={date} onChange={(e) => setDate(e.value)} showButtonBar className='border py-2 px-4 hover:shadow-xl w-full mb-1'/>
            {rates.map(rate=>{
                return(
                    <div className='flex justify-between border hover:shadow-xl hover:bg-blue-300 p-4 rounded-lg w-full'>
                        <div className='flex  items-center'>
                        <img src={rate.provider_image} alt='logo'/>
                        <p className='font-medium px-2'>{rate.serviceLevel}</p>
                        </div>
                        <div>
                        <p className='font-semibold'>{rate.amount} {rate.currency}</p> 
                        <p className='font-normal'>{rate.estimated_days} day</p>
                        </div>
                    </div>
                )
            })

            }
        </div>
        );
}

export default Rates;