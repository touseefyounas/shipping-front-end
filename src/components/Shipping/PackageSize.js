import { useEffect } from "react";


const PackageForm = ({dimensions, setDimensions}) => {

    const handleChange = (e) =>{
        const { name, value } = e.target;

        setDimensions((prevState)=>({
            ...prevState,
            [name]: value
        }))

    }

    useEffect(()=>{
        console.log('Dimensions:', dimensions);
    }, [dimensions])

    return (
        <>
        <form className='rounded-lg m-4 py-4 px-6 border'>
        <label><p className='pb-2 text-sm font-light text-text'>Rates are calculated based on package dimensions and weight. It's recommended to enter the correct weight and dimensions. If not, you may receive adjustment charges.</p></label>
        
        <div className='flex md:flex-wrap flex-col md:flex-row md:space-x-4'>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='weight'>Package weight</label>
        <input type="number" name="weight" required value={dimensions.weight} onChange={handleChange} className="block w-full p-2.5 text-sm bg-background rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='mass_unit'>Unit</label>
        <select name="mass_unit" value={dimensions.mass_unit} onChange={handleChange} className="block w-full p-2.5 text-sm text-text bg-background rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white" >
            <option value='kg'>Kg</option>
            <option value='lb'>lb</option>
        </select>
        </div>
        </div>

        <div className='flex flex-wrap gap-3'>
        <div className='mb-5 md:w-1/5'>
        <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='length'>Length</label>
        <input type="number" name="length" required value={dimensions.length} onChange={handleChange} className="block w-full p-2.5 text-sm bg-background rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='mb-5 md:w-1/5'>
        <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='width'>Width</label>
        <input type="number" name="width" required value={dimensions.width} onChange={handleChange} className="block w-full p-2.5 text-sm bg-background rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='mb-5 md:w-1/5'>
        <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='height'>Height</label>
        <input type="number" name="height" required value={dimensions.height} onChange={handleChange} className="block w-full p-2.5 text-sm bg-background rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"/>
        </div>
        <div className='mb-5'>
        <label className='block m-1 text-sm font-medium text-text dark:text-white' htmlFor='distance_unit'>Unit</label>
        <select name="distance_unit" value={dimensions.distance_unit} onChange={handleChange} className="block w-full p-2.5 text-sm text-text bg-background rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
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