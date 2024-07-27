import { useEffect } from 'react';
import { AddressAutofill } from '@mapbox/search-js-react';

const AddressForm = ({address, setAddress}) => {
    const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    const handleChange = (e) => {
      const { name, value } = e.target;

      setAddress((prevState)=>({
        ...prevState,
        [name]: value
      }))  
    }

    useEffect(()=> {
      console.log('Address:', address)
    }, [address]);

    return (
        <form className='rounded-lg m-4 py-4 px-6 border'>
        <label><h1 className='pb-2 font-medium'>Contact Information</h1></label>
        
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='name'>Name *</label>
        <input value={address.name} onChange={handleChange} type="text" name="name" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
        </div>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='company'>Company</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="company"/>
        </div>
        </div>

        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='email'>Email</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="email"/>
        </div>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='phone'>Phone</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="phone"/>
        </div>
        </div>

        <label><h1 className='pb-2 font-medium'>Address</h1></label>
        
        <AddressAutofill accessToken={accessToken} >
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='street1'>Address 1 *</label>
        <input onChange={handleChange} type="text" name="street1" autoComplete="address-line1" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='street2'>Address 2</label>
        <input type="text" name="street2" autoComplete="address-line2" className="block w-full  p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='city'>City *</label>
        <input value={address.city} onChange={handleChange} type="text" name="city" autoComplete="address-level2" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='state'>State/Province *</label>
        <input onChange={handleChange} type="text" name="state" autoComplete="address-level1" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        </div>

        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='country'>Country *</label>
        <input onChange={handleChange} type="text" name="country" autoComplete="country-name" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='zip'>Postal/Zip Code *</label>
        <input value={address.zip} onChange={handleChange} type="text" name="zip" autoComplete="postal-code" required className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        </div>
      </AddressAutofill>
        </form>
    );
}


export default AddressForm;


// if (name==='state'){
      //   let stateCode = null

      //   for (const stateName in stateCodeMap) {
      //     if (stateName.toLowerCase()===value.toLowerCase()){
      //         stateCode = stateCodeMap[stateName];
      //         break;
      //     }
      //   }
      //   if (stateCode){
      //   setAddress((prevState)=>({
      //     ...prevState,
      //     [name]: stateCode
      //   }));
      //   } else {
      //     setAddress((prevState)=>({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      // } else if (name==='country'){
      //   let countryCode = null

      //   for (const countryName in countryCodeMap) {
      //     if (countryName.toLowerCase()===value.toLowerCase()){
      //         countryCode = countryCodeMap[countryName];
      //         break;
      //     }
      //   }
      //   if (countryCode){
      //   setAddress((prevState)=>({
      //     ...prevState,
      //     [name]: countryCode
      //   }));
      //   } else {
      //     setAddress((prevState)=>({
      //       ...prevState,
      //       [name]: value
      //     }));
      //   }
      // } else {
      // setAddress((prevState) => ({
      //   ...prevState,
      //   [name]: value
      // }));
      // }