import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SoftwareDevelopment.css";


import Banner from "../../assets/images/software-development-bnr.jpg"
import Appdev from "../../assets/images/app-development.jpg"
import Softwaredvp from "../../assets/images/software-dvlpmnt.jpg"
import UI_UX from "../../assets/images/ui-ux-design.jpg"
import GenAI from "../../assets/images/generative-ai.jpg"

gsap.registerPlugin(ScrollTrigger);

const SoftwareDevelopment = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reset",
            },
          }
        );
      }
    });
  }, []);
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main>
      <img
        src={Banner}
        className="img-fluid"
        alt="Software Development Banner"
      />

      <section className="services py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Appdev}
                className="img-fluid"
                alt="App Development"
              />
            </div>
            <div className="col-lg-6 box-align" ref={addToRefs}>
              <div className="service-card shadow-md">
                <h5 className="fw-bold lt-blue-c">App Development</h5>
                <p>
                  Our mobile app development services cover iOS, Android, and
                  cross-platform solutions, delivering high-performance apps
                  with advanced functionalities, seamless UI/UX, and strong
                  security to meet business and customer needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 box-align" ref={addToRefs}>
              <div className="service-card p-4 shadow-md">
                <h5 className="fw-bold lt-blue-c">Software Development</h5>
                <p>
                  We specialize in custom software development, delivering
                  scalable, secure, and high-performance solutions tailored to
                  your business needs. From enterprise applications to
                  cloud-based solutions, we use the latest technologies to build
                  robust and future-ready software.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={Softwaredvp}
                className="img-fluid"
                alt="Software Development"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img
                src={UI_UX}
                className="img-fluid"
                alt="UI/UX Design"
              />
            </div>
            <div className="col-lg-6 box-align" ref={addToRefs}>
              <div className="service-card p-4 shadow-md">
                <h5 className="fw-bold lt-blue-c">UI/UX Design</h5>
                <p>
                  Our UI/UX design services focus on crafting intuitive,
                  user-friendly interfaces that enhance engagement and user
                  satisfaction. We use human-centered design principles to
                  create seamless digital experiences for websites,
                  applications, and enterprise software.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 box-align" ref={addToRefs}>
              <div className="service-card p-4 shadow-md">
                <h5 className="fw-bold lt-blue-c">Generative AI Services</h5>
                <p>
                  Leverage the power of Generative AI to automate tasks, enhance
                  productivity, and create intelligent solutions. From
                  AI-powered chatbots to content generation, we integrate
                  AI-driven technologies to boost efficiency and innovation.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={GenAI}
                className="img-fluid"
                alt="Generative AI"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoftwareDevelopment;
