import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import HomePage from '../pages/index'
import Blogs from "../pages/blogs";
import Post from '../pages/blogs/_id'
import About from '../pages/About'


export const router = createBrowserRouter([

    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path: "blog",
                element: <Blogs/>,
            },           
            {
                path: "about",
                element: <About/>,
            },
            {
                path: "blog/:id",
                element: <Post/>,
            },
        ]
    },
])