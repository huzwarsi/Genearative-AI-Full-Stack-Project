import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Login from "./features/auth/Pages/Login";
import Register from "./features/auth/Pages/Register";
import Protected from "./features/auth/Protected";

export const router = createBrowserRouter([
    {

        path: '/login',
        
        element :<Login/>
          
        
    },
    {
        path : '/Register',
        element : <Register/>
    },
    {
        path : '/',
        element : (
        <Protected>
        <h1>Home Page</h1>
 </Protected>
    )

    }
])