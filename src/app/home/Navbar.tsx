import React from "react";
import "./Navbar.css";
import Symbollogo from "../../assets/images/oraappstech-symbol-logo.png";
import Title from "../../assets/images/oraappstech-tit-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/">
            <img className="symbollogo" src={Symbollogo} alt="symbol logo" />
            <img src={Title} alt="title-logo" className="titlelogo" />
          </NavLink>
        </div>

        <ul className="Services">
          <li>
            <NavLink to="/" className="nav-link">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className="nav-link">
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/software-development" className="nav-link">
              SOFTWARE DEVELOPMENT
            </NavLink>
          </li>

          <li className="dropdown">
            <span className="nav-link">SERVICES ▼</span>
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/ora-services/consulting-outsourcing" className="dropdown-link">
                  Consulting & Outsourcing
                </NavLink>
              </li>
              <li>
                <NavLink to="/ora-services/ux-ui-design" className="dropdown-link">
                  UI/UX Design
                </NavLink>
              </li>
              <li>
                <NavLink to="/ora-services/trainings" className="dropdown-link">
                  Trainings
                </NavLink>
              </li>
              <li>
                <NavLink to="/ora-services/proj-support" className="dropdown-link">
                  Project Support
                </NavLink>
              </li>
              <li>
                <NavLink to="/ora-services/gen-ai" className="dropdown-link">
                  Gen AI Services
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/contact-us" className="nav-link">
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
