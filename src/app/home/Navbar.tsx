import React from "react";
import "./Navbar.css";
import Symbollogo from "../../assets/images/oraappstech-symbol-logo.png";
import Title from "../../assets/images/oraappstech-tit-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="Container">
      <div className="NavHead">
        <div className="contact">
          We consistently recruit on these technologies
          <a href="#" className="ApplyButton">
            Apply
          </a>
        </div>
        <div className="whatsapp">
          <FontAwesomeIcon icon={faWhatsapp} />
          +91 63033 22050
        </div>
      </div>
      <div className="Navthings">
        <div className="Nav">
          <a href="#">
            <img className="symbollogo" src={Symbollogo} alt="symbol logo" />
            <img src={Title} alt="title-logo" className="titlelogo" />
          </a>
        </div>
        <ul className="Services">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SOFTWARE DEVELOPMENT</li>

          <li className="dropdown">
            SERVICES ▼            
            <ul className="dropdown-menu">
              <a href="#">Consulting & Outsourcing</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Trainings</a>
              <a href="#">Project Support</a>
              <a href="#">Gen AI Services</a>
            </ul>
            
          </li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
