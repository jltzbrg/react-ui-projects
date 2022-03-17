import React from "react";
import Layout from "../Layout";
import { Parallax, Background } from "react-parallax";
import "./index.css";

function ParallaxEffect() {
  return (
    <Layout>
      <div className="parallax-parent">
        <Parallax strength={500}>
          <Background>
            <img
              src="https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </Background>
          <div className="parallax-content">
            <div>
              <h1>Julio Litzenberg</h1>
              <h3>React Developer - Mobile & Web</h3>
              <button>Let's Go</button>
            </div>
          </div>
        </Parallax>

        <div className="bottom-content">
          <div className="p-5 m-5">
            <lottie-player
              src="https://assets3.lottiefiles.com/packages/lf20_n9ryrmts.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className="container">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              reprehenderit eaque expedita eligendi alias pariatur soluta ut a,
              libero, quos dolorem molestias, magnam nihil atque ea
              necessitatibus corporis. Repudiandae, possimus!
            </p>
          </div>
        </div>
        <div className="parallax-footer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1A132F"
              fill-opacity="1"
              d="M0,224L1440,64L1440,320L0,320Z"
            ></path>
          </svg>
          <div className="footer-content">
            <p>Designed and Developed By</p>
            <div className="footer-border"></div>
            <h4>Julio Litzenberg - {new Date().getFullYear()}</h4>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ParallaxEffect;
