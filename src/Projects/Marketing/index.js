import React from "react";
import Layout from "../Layout";
import "./index.css";

function Marketing() {
  return (
    <Layout>
      <div className="marketing-parent">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-md-4 text-center">
            <h1 data-aos="slide-right">Julio Litzenberg</h1>
            <div className="h-50 p-5">
              <lottie-player
                src="https://assets9.lottiefiles.com/packages/lf20_4vyzn06l.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
            <h2 data-aos="slide-left">Marketing Analyst</h2>
          </div>
          <div className="col-md-7">
            <div className="p-5 h-50" data-aos="slide-down">
              <lottie-player
                src="https://assets3.lottiefiles.com/private_files/lf30_i0cTdc.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Marketing;
