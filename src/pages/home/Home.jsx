import React from "react";

import { Tldraw } from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";

const Home = () => {
  return (
    <>
      <div style={{ position: "fixed", inset: 0 }}>
        <Tldraw />
      </div>
    </>
  );
};

export default Home;
