import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import RegisterForm from "./pages/signup/RegisterForm";
import LoginForm from "./pages/login/LoginForm";
import Home from "./pages/home/Home";

function Root() {

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "signup",
          element: <RegisterForm />,
        },
        {
          path: "login",
          element: <LoginForm />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default Root;
