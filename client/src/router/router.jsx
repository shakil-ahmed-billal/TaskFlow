import { createBrowserRouter } from "react-router-dom";
import MainPage from "../layout/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
        children: [
            {
                path: "/",
                element: <p>Home</p>
            },
            {
                path: "/about",
                element: <p>About</p>
            },
            {
                path: "/contact",
                element: <p>Contact</p>
            },
        ],
    },
]);

export default router