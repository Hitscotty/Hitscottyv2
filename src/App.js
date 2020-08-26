import "./App.css";

import React from "react";
import { config } from "./config.js";
import img from "./images/profile/scotty.jpg";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  overflow: visible;
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 15px;
  padding-bottom: 30px;

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;
  }

  .row {
    margin-right: -15px;
    margin-left: -15px;
  }
`;

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }

  @media (min-width: 992px) {
    width: 970px;
  }

  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

const CardContainer = styled.div`
  position: relative;
  max-width: 400px;
  overflow: hidden;
  -webkit-transition: height 1s, color 1s, margin 1s;
  transition: height 1s, color 1s, margin 1s;
  z-index: 1;
  background: rgba(25, 6, 6, 0.67);
  margin: auto;

  .info-headings {
    max-width: 514px;
  }

  .info-headings h4 {
    display: block;
    width: 100%;
    font-weight: 900;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }

  .info-headings h6 {
    display: block;
    width: 100%;
    font-weight: 300;
    margin-top: -10px;
    margin-bottom: 30px;
    font-size: 1.2em;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
  }

  .infos {
    max-width: 515px;
    margin-top: 99px;
  }

  .infos .profile-list .title {
    display: block;
    float: left;
    color: #fff;
    line-height: 26px;
  }

  .infos .profile-list .title i {
    font-size: 23px;
  }

  .infos .profile-list .title .fa {
    padding-left: 2px;
  }

  .infos .profile-list .content {
    display: block;
    margin-left: 30px;
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    color: #fff;
  }

  .links {
    max-width: 500px;
    margin-left: -12px;
    margin-top: 12px;
    height: 100%;
  }

  .links social {
    color: #228dff;
  }

  .links .social {
    margin-left: 12px;
    margin-bottom: 4px;
    background: #228dff;
  }

  .links .social i {
    font-size: 15px;
    vertical-align: middle;
    padding-bottom: 15px;
  }

  .links .social i:hover {
    color: #2c3e50;
  }

  @media screen and (max-width: 400px) {
    .links .social {
      margin: 4px;
    }
  }

  @media screen and (max-width: 295px) {
    .links .social {
      margin: 1px;
    }
  }

  @media screen and (max-width: 990px) {
    .infos {
      max-width: 278px;
    }
    .links {
      max-width: 325px;
    }
    .info-headings {
      max-width: 270px;
    }
  }

  #profile {
    position: absolute;
    right: 0;
    z-index: 1;
  }

  #profile img {
    width: 400px;
    height: auto;
  }

  #profile .slant {
    top: 0;
    z-index: 1;
    position: absolute;
    border-style: solid;
    border-width: 400px 0 0 100px;
    border-color: rgba(223, 50, 50, 0) transparent transparent
      rgba(25, 6, 6, 0.67);
  }

  #profile .add-btn {
    position: absolute;
    background-color: #1976d2;
    top: 20%;
    right: 86%;
    overflow: hidden;
  }

  #profile .add-btn i {
    font-size: 35px;
    color: #fff;
  }

   {
    position: relative;
    width: 100%;
    overflow: visible;
    z-index: 1;
    top: 34px;
  }
  #profile {
    position: absolute;
    bottom: 85%;
    left: 0;
    width: 150px;
    height: auto;
    margin-right: auto;
    margin-left: auto;
    z-index: 1;
    background-color: transparent;
  }
  #profile img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  #profile .slant {
    display: none;
    opacity: 0;
    overflow: hidden;
  }
  #profile .add-btn {
    display: none;
  }
  .social {
    top: 0;
    margin-left: 5px;
    margin-bottom: 4px;
  }
  .infos {
    display: table;
    margin: 0 auto;
    max-width: 100%;
    padding: 0;
  }
  .links {
    display: table;
    max-width: 100%;
    padding: 0;
    margin: 0 auto 9px;
  }
  .links #first_one {
    margin-left: 0;
  }
  .info-headings {
    max-width: 100%;
    text-align: center;
    margin-top: 38px;
  }
  .info-headings h6 {
    margin-bottom: 20px;
  }
  .card-content {
    padding: 10px;
  }
`;

const CardContentContainer = styled.div`
  padding: 30px;
  border-radius: 0 0 2px 2px;

  p {
    margin: 0;
    color: inherit;
    text-align: center;
  }

  ul {
    padding-left: 0;
    list-style-type: none;
  }
`;

const App = () => (
  <ProfileCardContainer>
    <Container>
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <CardContainer id="profile-card" className="card">
            <div id="profile" className="right">
              <img alt="my-profile" className="img-responsive" src={img} />
            </div>
            <CardContentContainer>
              <div className="info-headings">
                <h4 className="text-uppercase left">{config.profile.name}</h4>
                <h6 className="text-capitalize left">{config.profile.title}</h6>
              </div>
              <div className="infos">
                <ul className="profile-list">
                  <li className="clearfix">
                    <span className="content">{config.profile.memo}</span>
                  </li>
                </ul>
              </div>
            </CardContentContainer>
          </CardContainer>
        </div>
      </div>
    </Container>
  </ProfileCardContainer>
);

export default App;
