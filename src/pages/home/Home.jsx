import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import auth from "../../appwrite/services/authentication";
import { useAuth } from "../../context/authcontext/authContext";
import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

const Home = () => {
  const { userData } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      // console.log(userData);
      navigate("/login");
    }
    // console.log(userData);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", inset: 0 }}>
       
        <Tldraw />
      </div>
    </>
  );
};

export default Home;
