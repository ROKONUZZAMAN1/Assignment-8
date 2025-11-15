
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Home/Apps";
import Installation from "../Pages/Home/Installation";
import ErrorPage from "../Pages/ErrorPage";
import AppDetails from "../Pages/AppDetails/AppDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                path: '/',
                // loader: () => fetch('/Alldata.json').then(res => res.json()),
                errorElement: <ErrorPage></ErrorPage>,
                hydrateFallbackElement: <p>Loading ............</p>,
                Component: Home
            },
            {
                path: '/apps',
                Component: Apps
            },
            {
                path: '/installation',
                Component: Installation
            },
            {
                path: '/AppDetails/:id',
                Component: AppDetails
            },

        ]
    },
    {
        path: '/*',
        Component: ErrorPage
    }
]);