
const Shippo_token = process.env.REACT_APP_SHIPPO_API 
    JSON.stringify({
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

const getRates = async (requestBody) =>{
    const quotes=[];

    const response = await fetch('https://api.goshippo.com/shipments/',{
        method:'POST',
        headers: {
          'Authorization':`ShippoToken ${Shippo_token}`,
          'Content-Type': 'application/json'
        },
        body: requestBody 
      });
    
    const data = await response.json();
    const rates = data.rates;

    rates.map(quote=>{
        return quotes.push({
            object_id: quote['object_id'],
            object_created: quote['object_created'],
            amount: quote['amount'],
            currency: quote['currency'],
            attributes: quote['attributes'],
            provider: quote['provider'],
            provider_image: quote['provider_image_75'],
            duration_terms: quote['duration_terms'],
            serviceLevel: quote['servicelevel']['display_name'],
            estimated_days: quote['estimated_days']

        })
    })
    return quotes;
}

export default getRates;