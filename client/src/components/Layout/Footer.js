import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-data">
        <img
          className="footer-img"
          src={require("../../images1/besan-laddoo.jpg")}
        ></img>
        <div className="d-flex links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <hr className="line" />
      <div className="footer-text">
        <div>@SugarBites | Founder:Sima Ghorpade</div>
        <div className="social-media">
          <a href="">INSTAGRAM</a>
          <a href="">FACEBOOK</a>
          <a href="">TWITTER</a>
          <a href="">PINTEREST</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
