import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicePage.css";

gsap.registerPlugin(ScrollTrigger);

const ServicePage = () => {
  const ServicePage = React.useRef<HTMLInputElement>(null);

  useGSAP(() => {
    gsap.from(ServicePage.current, {
      scrollTrigger: {
        trigger: ServicePage.current,
        start: "top 90%",
        end: "bottom 60%",  
        toggleActions: "play reverse play reverse",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
    });
  }, []);
  return (
    <>
      <section>
        <div ref={ServicePage} className="Services-Page">
          <div className="services">
            <div className="left-container">
              <div className="all-services-side">
                <div className="our-services">Our Services</div>
                <h2>All Services</h2>
                <div className="service-description">
                  We offer innovative and tailored technology solutions to help
                  businesses thrive in the digital era. From consulting and
                  software development to UI/UX design, AI solutions, and
                  project support, we deliver excellence with every service.
                </div>
                <div className="types-of-services">
                  <ul className="left-aligned">
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      Consulting and Outsourcing
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      Software Development
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      UI/UX Design
                    </li>
                  </ul>
                  <ul className="right-aligned">
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      Training Programs
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      Project Support
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>
                      Guidewire/SmartComm
                    </li>
                  </ul>
                </div>
                <div className="know-more">Know more</div>
              </div>
            </div>
            <div className="right-container">
              <div className="service-types">
                <div className="service-1">
                  <div className="consultancy">
                    <i className="fa-solid fa-users" />
                    <div className="consultancy-description">
                      <h3>Consulting and Outsourcing</h3>
                      <p>
                        We help businesses streamline operations by offering
                        expert IT consulting and outsourcing solutions...
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div className="line12"></div> */}
                {/* <div className="line"></div> */}
                <div className="service-2">
                  <div className="Software-Development">
                    <i className="fa-solid fa-cloud" />
                    <div className="software-description">
                      <h3 className="">Software Development</h3>
                      <p>
                        We craft tailored software solutions that align with
                        your business objectives...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="line2"></div> */}
              <div className="service-wrapper2">
                <div className="service-3">
                  <div className="ui-ux-Development">
                    <i className="fa-brands fa-figma" />
                    <div className="ui-ux-description">
                      <h3 className="">UI/UX Design</h3>
                      <p>
                        Our UI/UX design services focus on creating seamless...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="service-4">
                  <div className="Training-Development">
                    <i className="fa-brands fa-leanpub" />
                    <div className="Training-description">
                      <h3 className="">Training Programs</h3>
                      <p>
                        We provide specialized training sessions to equip
                        professionals...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
