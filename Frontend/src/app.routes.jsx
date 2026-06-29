import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Login from "./features/auth/Pages/Login";
import Register from "./features/auth/Pages/Register";

export const router = createBrowserRouter([
    {
        path: '/login',
        element : <Login/>
    },
    {
        path : '/Register',
        element : <Register/>
    }
])