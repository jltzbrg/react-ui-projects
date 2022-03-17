import React from "react";
import Layout from "../Layout";
import "./index.css";

function Colors() {
  const name = ["M", "O", "R", "T", "Y"];
  return (
    <Layout>
      <div className="colors-parent">
        <div className="row h-100 align-items-center justify-content-center">
          {name.map((letter, index) => {
            return (
              <div key={index} className={`col-md-2 letter letter${index}`}>
                {letter}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Colors;
