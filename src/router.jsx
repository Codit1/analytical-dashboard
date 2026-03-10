// import { createBrowserRouter } from "react-router-dom";
import { createBrowserRouter } from "react-router";

import Homepage from "./Pages/Home/Homepage";
import MainLayouts from "./layouts/MainLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        // errorElement: <ErrorPage/>,
        element: <MainLayouts/>,
        children: [
            {
                element: <Homepage/>,
                index: true
            }
        ]
    },
])

export default router;

