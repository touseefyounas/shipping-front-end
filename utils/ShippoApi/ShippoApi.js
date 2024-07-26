
const Shippo_token = process.env.REACT_APP_SHIPPO_API 
const getRates = async () =>{
    const response = fetch('https://api.goshippo.com/shipments/',{
        method:'POST',
        headers: {
          'Authorization':`ShippoToken ${Shippo_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
      })
}