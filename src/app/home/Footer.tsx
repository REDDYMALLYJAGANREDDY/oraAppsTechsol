import React from "react";
import "./Footer.css";

import twitter from "../../assets/images/social-twr.png";
import fb from "../../assets/images/social-fb.png";
import insta from "../../assets/images/social-ins.png";
import skype from "../../assets/images/social-skype.png";
import linkedin from "../../assets/images/social-in.png";

const Footer = () => {
  return (
    <footer>
      {/* Social Section */}
      <div className="social-section">
        <div className="social-box">
          <span>Connect with us:</span>
          <div className="social-icons">
            <a href="#">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="#">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#">
              <img src={skype} alt="Skype" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <div className="address">
          <h4>Oraappstech LLP</h4>
          <p>C 206, 2nd Floor, Business Park, US, Canada, UK.</p>

          <div className="location">
            <span className="location-icon">
              <img src="" alt="" />
            </span>
            <div>
              <h4>Oraappstech LLP</h4>
              <p>
                Flat No 51, Hi-rise homes phase-2 Road No-1; Vasant Nagar
                Colony, Nizampet HYDERABAD, Telangana 500090 India.
              </p>
            </div>
          </div>
        </div>

        <div className="email-box">
          <div className="email-card">
            <span className="email-icon">
              <i className="fa-regular fa-envelope"></i>
            </span>
            <p>info@oraappstech.com</p>
          </div>
        </div>

        <div className="phone-box">
          <div className="phone-card">
            <div className="phone-icons">
              <span>
                <i className="fa-brands fa-whatsapp"></i>
              </span>
              <span>
                <i className="fa-solid fa-phone"></i>
              </span>
            </div>
            <p>+91 63033 22050</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2025 ©Copyright Oraappstech. All Rights are Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
