import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import RegisterForm from "./pages/signup/RegisterForm";
import LoginForm from "./pages/login/LoginForm";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/authcontext/authContext";

function Root() {
  const [userData, setUserData] = useState(null);
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
  return (
    <>
      <AuthProvider value={{ userData, setUserData }}>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default Root;
