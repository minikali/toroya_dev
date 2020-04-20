import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="gradient" />
      <div className="container">
        <p className="copyright">
          © Toroya 2019 - <a href="toroya.fr">www.toroya.fr</a>
        </p>
        <p className="author">
          Design par{" "}
          <a
            href="https://www.malt.fr/profile/remilak"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rémi LAK
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
