import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import auth from "../../appwrite/services/authentication";
import { useAuth } from "../../context/authcontext/authContext";
import { Tldraw } from "@tldraw/tldraw";

const Home = () => {
  const { userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      console.log(userData);
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Tldraw />
    </>
  );
};

export default Home;
