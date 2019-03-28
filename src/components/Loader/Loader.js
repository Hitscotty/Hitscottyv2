import React from "react";
import "./Loader.css";
const $ = window.$;

const Loader = () => (
  <div id="loading">
    <div id="loading-center">
      <div id="loading-center-absolute">
        <div className="box-holder animated bounceInDown">
          <div className="container">
            <div className="right">
              <h4 className="randoms" />
              <h1 className="randoms" />
              <h4 className="randoms" />
            </div>
            <div className="left">
              <h4 className="randoms" />
              <h1 className="randoms" />
              <h4 className="randoms" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
