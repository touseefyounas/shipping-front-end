import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Navigation from './components/Navigation';

const App = () => {
    const appRouter = createBrowserRouter(createRoutesFromElements(
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Dashboard />} />
            </Route>
    ))

    return (
        <>
        <RouterProvider router={appRouter}/>
        </>
    );
}


export default App;