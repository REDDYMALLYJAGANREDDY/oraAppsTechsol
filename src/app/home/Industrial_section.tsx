import React from "react";
import "./Industrial_section.css";
import softwareImg from "../../assets/images/solution1.png";
import productImg from "../../assets/images/solution2.png";
import consulting from "../../assets/images/solution3.png";
import graphic from "../../assets/images/solution4.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Industrial_section = () => {
  const Solutions = React.useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(Solutions.current, {
      scrollTrigger: {
        start: "top 99%",
        toggleActions: "play stop stop reverse",
      },
      rotateY: "90deg",
      scale:1.2,
      duration: 2,
      delay: 0.5,
    });
  });
  return (
    <>
      <div ref={Solutions} className="industrial-section">
        <div className="container-fluid2">
          <div className="industry-title">
            <h1>Intelligent Solutions for Every Sector</h1>
          </div>
        </div>
        <div className="Solutions">
          <div className="industry-types">
            <div className="software-industry">
              <div className="containerbox">
                <h5>
                  Software
                  <br />
                  Developement
                </h5>
                <img src={softwareImg} alt="" />
              </div>
            </div>
            <div className="product-industry">
              <div className="containerbox">
                <h5>
                  Product
                  <br />
                  Developement
                </h5>
                <img src={productImg} alt="" />
              </div>
            </div>
            <div className="software-consulting">
              <div className="containerbox">
                <h5>
                  Software
                  <br />
                  Consulting
                </h5>
                <img src={consulting} alt="" />
              </div>
            </div>
            <div className="graphic-design">
              <div className="containerbox">
                <h5>
                  Graphic
                  <br />
                  Design
                </h5>
                <img src={graphic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industrial_section;
