import React, { useContext } from "react";
import ScottyLogo from "../../images/logos/scottylogocard.png";
import "./Footer.css";
import ConfigContext from "../../config";

const Footer = () => {
  const { username } = useContext(ConfigContext);
  return (
    <footer>
      <div className="container">
        <p className="text-center">
          <a href="" target="_blank">
            <strong>@{username}</strong>
          </a>
          <img className="footer-logo" alt="hitscotty logo" src={ScottyLogo} />
          <strong>Built with React.js</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
