import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './AboutPage.css';
import BannerPng from '../../assets/images/about-us-bnr.jpg';
import AboutUsBg from '../../assets/images/about-us-1.jpg';
import OurMission from '../../assets/images/our-mission.jpg';
import OurVision from "../../assets/images/our-vision.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", 
            toggleActions: "play none none reverse", 
          },
        }
      );
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <main>
      <img
        src={BannerPng}
        className="img-fluid"
        alt="About Us Banner"
      />

      <section className="bg-light py-5 text-justify">
        <div className="container">
          <section className="mt-5">
            <div className="row">
              <div className="col-lg-6" ref={addToRefs}>
                <h2 className="base-h2 lt-blue-c">Who We Are</h2>
                <p className="fs-5">
                  Founded in 2010, OraAppsTechSol is a dynamic technology
                  company committed to innovation and excellence. With a team of
                  50+ skilled professionals, we bring expertise in consulting,
                  software development, UI/UX design, AI solutions, and more.
                  Our goal is to empower businesses with customized digital
                  solutions that enhance performance and growth.
                </p>
                <p className="fs-5">
                  We believe in a user-first approach, ensuring every solution
                  we build is intuitive, functional, and future-ready. By
                  combining creativity with technical excellence, we help
                  businesses stay ahead in the ever-evolving digital landscape.
                </p>
              </div>

              <div className="col-lg-6" ref={addToRefs}>
                <img
                  src={AboutUsBg}
                  className="img-fluid shadow"
                  alt="About Us"
                />
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="container text-justify">
        <section className="row mt-5">
          <div className="col-lg-6" ref={addToRefs}>
            <div className="card px-md-3 shadow">
              <div className="card-body">
                <h2 className="base-h4 lt-blue-c py-3">Our Mission</h2>
                <img
                  src={OurMission}
                  className="img-fluid mb-3"
                  alt="Our Mission"
                />
                <p className="fs-5">
                  To empower businesses with innovative, scalable, and
                  cost-effective technology solutions, enabling them to achieve
                  operational excellence, enhance customer experiences, and stay
                  ahead in the competitive digital landscape.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" ref={addToRefs}>
            <div className="card px-md-3 shadow">
              <div className="card-body">
                <h2 className="base-h4 lt-blue-c py-3">Our Vision</h2>
                <img
                  src={OurVision}
                  className="img-fluid mb-3"
                  alt="Our Vision"
                />
                <p className="fs-5">
                  To be a globally recognized technology leader, known for
                  delivering cutting-edge solutions that drive business growth,
                  digital transformation, and technological innovation across
                  industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="about-cta mt-5 mb-5 shadow-lg"
          ref={addToRefs}
        >
          <h2>Build the Future with Us</h2>
          <p>
            Join our team of innovators and explore new opportunities to grow,
            create, and make a difference.
          </p>
          <a href="/contact-us" className="cta-button">
            Get in Touch
          </a>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
