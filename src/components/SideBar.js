import { Link } from "react-router-dom";



const SideBar = () => {
    return (
        <>
        <nav>
            <ul className="text-lg font-normal py-4 px-2 bg-gray-800 space-y-2 h-screen">
                <li className="text-white py-2 px-4 rounded-lg hover:bg-gray-600"><Link to='/'>Dashboard</Link></li>
                <li className="text-white py-2 px-4 rounded-lg hover:bg-gray-600">Orders</li>
                <li className="text-white py-2 px-4 rounded-lg hover:bg-gray-600">Shipping</li>
                <li className="text-white py-2 px-4 rounded-lg hover:bg-gray-600"><Link to='/stock'>Inventory</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default SideBar;