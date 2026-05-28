import { createBrowserRouter } from "react-router";

import Products from "../pages/Products";
import CreateProduct from "../pages/CreateProduct";
// import EditProduct from "../pages/EditProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Products />
    },
    {
        path: '/products/create',
        element: <CreateProduct />
    },
    // {
    //     path: '/edit/:id/edit',
    //     element: <EditProduct />
    // }
]);