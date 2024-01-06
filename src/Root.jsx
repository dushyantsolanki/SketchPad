import React, { useEffect, useState } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./component/Layout";
import RegisterForm from "./pages/signup/RegisterForm";
import LoginForm from "./pages/login/LoginForm";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/authcontext/authContext";
import ErrorPage from "./pages/404error/ErrorPage";

function Root() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData(window.localStorage.getItem("users"));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: !userData ? <Navigate to="login" /> : <Home />,
        },
        {
          path: "signup",
          element: !userData ? <RegisterForm /> : <Navigate to="/" />,
        },
        {
          path: "login",
          element: !userData ? <LoginForm /> : <Navigate to="/" />,
        },
        {
          path: "*",
          element: <ErrorPage />,
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
