import React from "react";
import Layout from "../Layout";
import { FaReact } from "react-icons/fa";
import "./index.css";

function Home() {
  return (
    <Layout>
      <div className="home-parent">
        <div className="d-flex parts align-items-center">
          <div className="part1 text-center text-white d-flex align-items-center justify-content-center flex-column">
            <h3 className="my-5" data-aos="slide-right">
              <FaReact />
              <b>React Developer</b>
            </h3>
            <div className="h-50">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_m9fz64i8.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="part2 text-center text-white d-flex align-items-center justify-content-center flex-column">
            <div className="h-50">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_bwbbmn9r.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h3 className="my-5" data-aos="slide-left">
              <b>UI - Web - Mobile</b>
            </h3>
          </div>
        </div>
        <div className="seperator">
          <span>JULIO</span>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
