import React from "react";
import Layout from "../Layout";
import { FaReact } from "react-icons/fa";
import "./index.css";

function Rotated() {
  return (
    <Layout>
      <div className="rotated-parent">
        <div className="row h-100 align-items-center">
          <div className="col-md-6">
            <div className="h-75 p-5">
              <lottie-player
                src="https://assets3.lottiefiles.com/packages/lf20_enpgdatq.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-md-6">
            <div className="rotated-text-part">
              <h1 data-aos="slide-right">
                <b>Julio Litzenberg</b>
              </h1>
              <p data-aos="slide-left">
                UI - Web - Mobile <FaReact />
                <b>Developer</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Rotated;
