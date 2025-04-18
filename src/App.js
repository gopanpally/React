import { lazy, Suspense } from 'react';
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";



const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Outlet/>
        
    </div>;
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<h1>Loading .....</h1>}>
                        <About/>
                    </Suspense>
                ),
            },
            {
                path: "/Contact",
                element: <Contact/>,
            },
            {
                path: "/Restaurants/:resId",
                element: <RestaurantMenu/>,
            },
        ],
        errorElement: <Error/>,
    },
   
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);
