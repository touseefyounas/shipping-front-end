


const PackageForm = () => {
    return (
        <>
        <form className='rounded-lg m-4 col-span-1 md:col-start-1 lg:col-start-1 md:col-span-8 lg:col-span-6 py-4 px-6 border'>
        <label><p className='pb-2 text-sm font-light'>Rates are calculated based on package dimensions and weight. It's recommended to enter the correct weight and dimensions. If not, you may receive adjustment charges.</p></label>
        
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='name'>Package weight</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="number" name="name" required/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='weight_unit'>Unit</label>
        <select className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" name="weight_unit">
            <option value='kg'>Kg</option>
            <option value='lb'>lb</option>
        </select>
        </div>
        </div>
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='length'>Length</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="number" name="length" required/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='width'>Width</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="number" name="width" required/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='height'>Height</label>
        <input className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" type="number" name="height" required/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-gray-900 dark:text-white' htmlFor='dimension_unit'>Unit</label>
        <select className="block w-full p-2.5 text-sm bg-gray-50 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" name="dimension_unit">
            <option value='cm'>cm</option>
            <option value='in'>in</option>
        </select>
        </div>
        </div>
        </form>
        </>
    );
}

export default PackageForm;