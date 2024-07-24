import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';
import Inventory from './pages/invetory';

const App = () => {
    const appRouter = createBrowserRouter(createRoutesFromElements(
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Dashboard/>} />
                <Route path='stock' element={<Inventory/>}/>
            </Route>
    ))

    return (
        <>
        <RouterProvider router={appRouter}/>
        </>
    );
}


export default App;