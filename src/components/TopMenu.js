

const TopMenu = () => {
    return (
        <>
        <header className="h-12 bg-white shadow-lg">
            <div className="flex justify-between">
                <h1 className='px-3 py-2 text-lg font-semibold font-sans text-text'>ShipYard</h1>
                <div className='px-3 py-2 flex items-center gap-3'>
                    <h3 className="text-lg font-semibold font-sans text-text">John Doe</h3>
                    <button className="bg-blue-500 text-white w-24  py-1 rounded-lg hover:bg-blue-700">Profile</button>
                </div>
            </div>
        </header>
        </>
    );
}

export default TopMenu;