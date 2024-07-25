import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';
import Inventory from './pages/invetory';
import Orders from './pages/orders';
import Shipments from './pages/Shipments';
import CreateLabel from './components/Shipping/CreateLabel';
import ShippingAddress from './components/Shipping/ShippingAddress';

const App = () => {
    const appRouter = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Dashboard/>} />
                <Route path='inventory' element={<Inventory/>}/>
                <Route path='orders' element={<Orders/>}/>
                <Route path='shipments' element={<Shipments/>}/>
            </Route>
            <Route path='orders/create' element={<CreateLabel/>}>
                <Route index element={<ShippingAddress/>}/>
            </Route>
        </>
    ))

    return (
        <>
        <RouterProvider router={appRouter}/>
        </>
    );
}


export default App;