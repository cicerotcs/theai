import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer">
        <h2 className="gradient__text">
          Do you want to step into the <br /> future before others
        </h2>
        <button type="button">Request Early Access</button>
        <div className="footer__desc">
          <div className="footer__logo">
            <p>THEAI</p>
          </div>
          <div className="footer__links">
            <p className="header_text">Links</p>
            <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__company">
            <p className="header_text">Company</p>
            <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__contact">
            <p className="header_text">Get in touch</p>
            <ul>
              <li>
                Crechterwoord K12 <br /> 182 DK Alknjkcb
              </li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
        <p
          style={{
            marginTop: 80,
            color: "white",
            fontSize: 12,
            marginBottom: 30,
          }}
        >
          2022 THEAI by Cicero Teixeira. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
