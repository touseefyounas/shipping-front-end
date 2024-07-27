import { FaAngleDown } from "react-icons/fa6";

const TopMenu = () => {
    return (
        <>
            <div className="flex h-full justify-between shadow-lg items-center bg-white">
                <h1 className='px-3 py-2 text-lg font-semibold font-sans text-text'>ShipYard</h1>
                <div className='px-3 py-1 flex items-center gap-3'>
                    <button className="flex items-center bg-gray-800 text-white w-24  py-2 px-4 hover:bg-gray-950"><FaAngleDown/>Profile</button>
                </div>
            </div>
        </>
    );
}

export default TopMenu;