import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { config } from "../config.js";
import img from "../images/profile/scotty.jpg";

const App = () => (
  <Layout>
    <SEO title="Hitscotty" />
    <div id="profile-card-container" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div id="profile-card" className="card">
              <div id="profile" className="right">
                <img alt="my-profile" className="img-responsive" src={img} />
              </div>
              <div className="card-content">
                <div className="info-headings">
                  <h4 className="text-uppercase left">{config.profile.name}</h4>
                  <h6 className="text-capitalize left">
                    {config.profile.title}
                  </h6>
                </div>
                <div className="infos">
                  <ul className="profile-list">
                    <li className="clearfix">
                      <span className="content">{config.profile.memo}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default App;
