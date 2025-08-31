import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import projSupportImg from "../../../assets/images/proj-support.jpg";
import aboutImg2 from "../../../assets/images/about-img-2.jpg";
import aboutBgImg from "../../../assets/images/about-bg-img.jpg";
import './ProjectSupport.css'

const ProjSupport = () => {
  const fadeLeftRef = useRef<HTMLDivElement>(null);
  const fadeRightRef = useRef<HTMLDivElement>(null);
  const fadeUpSections = useRef<HTMLDivElement[]>([]);

  // Register fade-up elements dynamically
  const addFadeUpRef = (el: HTMLDivElement) => {
    if (el && !fadeUpSections.current.includes(el)) {
      fadeUpSections.current.push(el);
    }
  };

  useEffect(() => {
    // Fade Left
    if (fadeLeftRef.current) {
      gsap.fromTo(
        fadeLeftRef.current,
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: fadeLeftRef.current }
      );
    }

    // Fade Right
    if (fadeRightRef.current) {
      gsap.fromTo(
        fadeRightRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.5, scrollTrigger: fadeRightRef.current }
      );
    }

    // Fade Up for all sections
    fadeUpSections.current.forEach((section) => {
      gsap.fromTo(
        section,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, scrollTrigger: section }
      );
    });
  }, []);

  return (
    <main>
      {/* Top Banner */}
      <img src={projSupportImg} alt="Project Support" className="img-fluid w-100" />

      {/* Intro Section */}
      <section className="bg-light py-5 text-justify">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6" ref={fadeLeftRef}>
              <h2 className="base-h2 lt-blue-c">Project Support</h2>
              <p className="fs-5">
                Streamline team collaboration with the best tools and solutions.
                Our services ensure efficient project execution.
              </p>
              <a href="/contact-us" className="btn btn-primary">Get Started</a>
            </div>
            <div className="col-lg-6" ref={fadeRightRef}>
              <img src={aboutImg2} className="img-fluid shadow" alt="About Project" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-wrapper py-5" ref={addFadeUpRef}>
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-lg-5">
              <div className="services-left-wrap">
                <div className="services-title-wrap">
                  <div className="subtitle">
                    <span>Our Services</span>
                    <h2>All Services</h2>
                    <div className="content-wrap">
                      We offer innovative and tailored technology solutions to help
                      businesses thrive in the digital era. From consulting and
                      software development to UI/UX design, AI solutions, and project
                      support, we deliver excellence with every service.
                    </div>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li><i className="fa-regular fa-circle-check"></i> Consulting and Outsourcing</li>
                    <li><i className="fa-regular fa-circle-check"></i> Software Development</li>
                    <li><i className="fa-regular fa-circle-check"></i> UI/UX Design</li>
                  </ul>
                  <ul>
                    <li><i className="fa-regular fa-circle-check"></i> Training Programs</li>
                    <li><i className="fa-regular fa-circle-check"></i> Project Support</li>
                    <li><i className="fa-regular fa-circle-check"></i> Guidewire/SmartComm</li>
                  </ul>
                </div>
                <a className="btn text-white knw-btn">Know more</a>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-7">
              <div className="services-column-wrap">
                {[
                  { icon: "fa-users", title: "Consulting and Outsourcing", desc: "We help businesses streamline operations by offering expert IT consulting and outsourcing solutions..." },
                  { icon: "fa-cloud", title: "Software Development", desc: "We craft tailored software solutions that align with your business objectives..." },
                  { icon: "fa-figma", title: "UI/UX Design", desc: "Our UI/UX design services focus on creating seamless..." },
                  { icon: "fa-leanpub", title: "Training Programs", desc: "We provide specialized training sessions to equip professionals..." }
                ].map((service, idx) => (
                  <div className="services-column" key={idx}>
                    <div className="content-item">
                      <div className="media-icon">
                        <div className="icon-wrapper">
                          <span><i className={`fa-solid ${service.icon}`}></i></span>
                        </div>
                      </div>
                      <div className="content-details-group">
                        <div className="content-title"><h5>{service.title}</h5></div>
                        <div className="content-desc"><p>{service.desc}</p></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="container-fluid bg-light py-5" ref={addFadeUpRef}>
        <div className="container mt-5">
          <div className="row text-center bg-white p-3 rounded">
            <div className="col-lg-6">
              <div className="p-4 border rounded shadow-sm">
                <img className="img-fluid" src={aboutBgImg} alt="Features" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="p-4 border rounded shadow-sm">
                <i className="bi bi-people fs-1 text-primary"></i>
                <h5>Team Collaboration</h5>
                <p>Enhance project workflow with our structured support.</p>
              </div>
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm bg-white">
                <i className="bi bi-gear fs-1 text-success"></i>
                <h5>Technical Support</h5>
                <p>24/7 assistance to ensure smooth operations.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 border rounded shadow-sm bg-white">
                <i className="bi bi-file-earmark-text fs-1 text-danger"></i>
                <h5>Project Documentation</h5>
                <p>Detailed documentation for seamless project execution.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center my-5" ref={addFadeUpRef}>
        <div className="p-5 bg-primary text-white rounded">
          <h2>Need Project Assistance?</h2>
          <p>Contact us to get professional project support.</p>
          <a href="/contact-us" className="btn btn-light">Contact Us</a>
        </div>
      </div>
    </main>
  );
};

export default ProjSupport;
