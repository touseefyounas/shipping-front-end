import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Root from "./Root";

const App = () => {
    const appRouter = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Root/>}>
            <Route/>

        </Route>
    ))

    return (
        <>
        <RouterProvider router={appRouter}/>
        </>
    );
}


export default App;