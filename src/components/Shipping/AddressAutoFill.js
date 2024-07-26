import { AddressAutofill } from '@mapbox/search-js-react';

const AddressForm = () => {
    const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

    return (
        <form className='rounded-lg m-4 py-4 px-6 border'>
        <label><h1 className='pb-2 font-medium'>Contact Information</h1></label>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='name'>Name *</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="name" required/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='company'>Company</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="company" />
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='email'>Email</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="email"/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='phone'>Phone</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="phone"/>
        </div>
        <label><h1 className='pb-2 font-medium'>Address</h1></label>
        
        <AddressAutofill accessToken={accessToken}>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='address-1'>Address 1</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="address-1" autocomplete="address-line1" required/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='address-2'>Address 2</label>
        <input className="block w-full  p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="address-2" autocomplete="address-line2" />
        </div>
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='city'>City</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="city" autocomplete="address-level2" required/>
        </div>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='state'>State/Province</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="state" autocomplete="address-level1" required/>
        </div>
        
        </div>
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='country'>Country</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="country" autocomplete="country-name" required/>
        </div>
        <div className='mb-5 flex-1'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='zip'>Postal/Zip Code</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="text" name="zip" autocomplete="postal-code" required/>
        </div>
        </div>
      </AddressAutofill>
        </form>
    );
}


export default AddressForm;