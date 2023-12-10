import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../appwrite/services/authentication";
import { Tldraw } from "@tldraw/tldraw";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const currentLogin = auth.getLoginAccount();

    currentLogin.then((response) => {
      if (response) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  }, []);

  return (
    <>
      <Tldraw />
    </>
  );
};

export default Home;
