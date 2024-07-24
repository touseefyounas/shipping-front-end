import TopMenu from "./TopMenu";
import SideBar from "./SideBar";
import { Outlet  } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <div className='grid grid-rows-auto gao-0 grid-cols-1 md:grid-cols-12'>
            <header className='md:col-span-12 row-start-1'>
                <TopMenu />
            </header>
            <aside className='col-span-12 md:col-span-2 row-start-2 hidden md:block'>
                <SideBar />
            </aside>
            <div className='col-span-12 md:col-span-10 row-start-2 h-screen'>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default Navigation;