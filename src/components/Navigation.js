import TopMenu from "./TopMenu";
import SideBar from "./SideBar";
import { Outlet  } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <div className='grid grid-rows-12 gap-0 grid-cols-1 md:grid-cols-12 max-h-screen'>
            <header className='col-span-12 md:col-span-10 row-start-1'>
                <TopMenu />
            </header>
            <aside className='col-span-12 md:col-start-1 md:col-span-2 row-start-1 row-span-11 hidden md:block'>
                <SideBar />
            </aside>
            <div className='bg-gray-100 col-span-12 md:col-start-3 md:col-span-10 row-start-2 row-span-11 overflow-y-scroll max-h-dvh'>
                <Outlet/>
            </div>
        </div>
        </>
    );
}

export default Navigation;
