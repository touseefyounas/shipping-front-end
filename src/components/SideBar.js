import { Link } from "react-router-dom";



const SideBar = () => {
    return (
        <>
        <nav>
            <ul className="text-lg font-normal py-4 px-2 bg-secondary space-y-2 h-screen">
                <li className="text-text py-2 px-4 rounded-lg hover:text-white hover:bg-primary"><Link to='/'>Dashboard</Link></li>
                <li className="text-text py-2 px-4 rounded-lg hover:text-white hover:bg-primary"><Link to='orders'>Orders</Link></li>
                <li className="text-text py-2 px-4 rounded-lg hover:text-white hover:bg-primary"><Link to='shipments'>Shipments</Link></li>
                <li className="text-text py-2 px-4 rounded-lg hover:text-white hover:bg-primary"><Link to='/inventory'>Inventory</Link></li>
            </ul>
        </nav>
        </>
    );
}

export default SideBar;