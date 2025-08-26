// import React from "react";
// import "./Footer.css";

// import twitter from "../../assets/images/social-twr.png";
// import fb from "../../assets/images/social-fb.png";
// import insta from "../../assets/images/social-ins.png";
// import skype from "../../assets/images/social-skype.png";
// import linkedin from "../../assets/images/social-in.png";

// const Footer = () => {
//   return (
//     <footer>
//       {/* Social Section */}
//       <div className="social-section">
//         <div className="social-box">
//           <span>Connect with us:</span>
//           <div className="social-icons">
//             <a href="#">
//               <img src={twitter} alt="Twitter" />
//             </a>
//             <a href="#">
//               <img src={fb} alt="Facebook" />
//             </a>
//             <a href="#">
//               <img src={insta} alt="Instagram" />
//             </a>
//             <a href="#">
//               <img src={skype} alt="Skype" />
//             </a>
//             <a href="#">
//               <img src={linkedin} alt="LinkedIn" />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="contact-section">
//         <div className="address">
//           <h4>Oraappstech LLP</h4>
//           <p>C 206, 2nd Floor, Business Park, US, Canada, UK.</p>

//           <div className="location">
//             <span className="location-icon">
//               <img src="" alt="" />
//             </span>
//             <div>
//               <h4>Oraappstech LLP</h4>
//               <p>
//                 Flat No 51, Hi-rise homes phase-2 Road No-1; Vasant Nagar
//                 Colony, Nizampet HYDERABAD, Telangana 500090 India.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="email-box">
//           <div className="email-card">
//             <span className="email-icon">
//               <i className="fa-regular fa-envelope"></i>
//             </span>
//             <p>info@oraappstech.com</p>
//           </div>
//         </div>

//         <div className="phone-box">
//           <div className="phone-card">
//             <div className="phone-icons">
//               <span>
//                 <i className="fa-brands fa-whatsapp"></i>
//               </span>
//               <span>
//                 <i className="fa-solid fa-phone"></i>
//               </span>
//             </div>
//             <p>+91 63033 22050</p>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>2025 ©Copyright Oraappstech. All Rights are Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Footer.css";

import socialTwr from "../../assets/images/social-twr.png";
import socialFb from "../../assets/images/social-fb.png";
import socialIns from "../../assets/images/social-ins.png";
import socialSkype from "../../assets/images/social-skype.png";
import socialIn from "../../assets/images/social-in.png";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const animatedElementsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !animatedElementsRef.current.includes(el)) {
      animatedElementsRef.current.push(el);
    }
  };

  useEffect(() => {
    animatedElementsRef.current.forEach((el) => {
      const animationType = el.getAttribute("data-aos");
      const duration = parseFloat(el.getAttribute("data-aos-duration") || "1000") / 1000;

      let fromProps = {};
      switch (animationType) {
        case "fade-up":
          fromProps = { y: 50, opacity: 0 };
          break;
        case "zoom-in-up":
          fromProps = { scale: 0.8, y: 50, opacity: 0 };
          break;
        default:
          fromProps = { opacity: 0 };
      }

      gsap.fromTo(
        el,
        fromProps,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: duration,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <footer className="footer-section mt-5">
      <div
        className="container"
        data-aos="fade-up"
        ref={addToRefs}
      >
        <div className="social-sec">
          <span className="social-title">Connect with us: </span>
          <span className="social-img">
            <a href="#">
              <img src={socialTwr} alt="Twitter" />
            </a>
            <a href="#">
              <img src={socialFb} alt="Facebook" />
            </a>
            <a href="#">
              <img src={socialIns} alt="Instagram" />
            </a>
            <a href="#">
              <img src={socialSkype} alt="Skype" />
            </a>
            <a href="#">
              <img src={socialIn} alt="LinkedIn" />
            </a>
          </span>
        </div>
      </div>

      <div className="footer-mid">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-12"
              data-aos="zoom-in-up"
              ref={addToRefs}
            >
              <div className="address-box d-flex align-items-center gap-4">
                <span>
                  <i className="fa-solid fa-location-dot m-2 fa-2x text-white"></i>
                </span>
                <div className="ml-3">
                  <h5 className="lt-blue-c">Oraappstech LLP</h5>
                  <p>
                    C 206, 2nd Floor, Business Park, US, Canada, UK.
                  </p>
                  <h5 className="lt-blue-c">Oraappstech LLP</h5>
                  <p>
                    Flat No 51, Hi-rise homes phase-2 Road No-1; Vasant Nagar
                    Colony, Nizampet HYDERABAD, Telangana 500090 India.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mt-3 xs-mb-1"
              data-aos="zoom-in-up"
              ref={addToRefs}
            >
              <div className="footer-box text-center mx-lg-4">
                <i className="fa-regular fa-envelope fa-2x mt-4" style={{ color: "#eff1f6" }}></i>
                <div className="mt-3">
                  <div className="p-0">
                    <a className="text-decoration-none text-white fs-5" href="mailto:info@oraappstech.com">
                      info@oraappstech.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 mt-3"
              data-aos="zoom-in-up"
              ref={addToRefs}
            >
              <div className="footer-box text-center mx-lg-4">
                <div className="foo-contact-icon">
                  <i className="fa-brands fa-whatsapp"></i>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="mt-3">
                  <p className="base-h4">+91 63033 22050</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-section text-center">
        <div className="lt-blue-c py-4">
          2025 &copy;Copyright Oraappstech. All Rights are Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;