// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router";

import Homepage from "./Pages/Home/Homepage";
import MainLayouts from "./layouts/MainLayouts";
import Analysis from "./Pages/Analysis/Analysis";

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage/>,
        element: <Homepage/>,
        
    },
    {
        path: "/analysis",
        // errorElement: <ErrorPage/>,
        element: <MainLayouts/>,
        children: [
            {
                index: true,
                element: <Analysis/>
            }
        ]
    },
])

export default router;

