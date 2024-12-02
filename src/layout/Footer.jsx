import React from "react";
import "../sass/layout/Footer.scss";
import logo from "../assets/logo-footer.png";
function Footer() {
  return (
    <div className="footer">
        <div className="footer__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer__copyright"> © 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
