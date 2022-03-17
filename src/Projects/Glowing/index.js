import React from "react";
import Layout from "../Layout";
import "./index.css";

function Glowing() {
  return (
    <Layout>
      <div className="glowing-parent">
        <div className="h-100">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_ep20cd8e.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="glowing-text-part">
          <h1>Julio Litzenberg</h1>
          <p>Frontend Developer - Mobile & Web</p>
        </div>
      </div>
    </Layout>
  );
}

export default Glowing;
