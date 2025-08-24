import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Trainings.css";


import TrainingBanner from "../../../assets/images/training-bnr.jpg";
import TrainingImage from "../../../assets/images/traning.jpg";
import CareerImage from "../../../assets/images/career.avif";

gsap.registerPlugin(ScrollTrigger);

const Trainings = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
      const animationType = el.getAttribute("data-aos");

      let fromProps = {};
      if (animationType === "fade-down") {
        fromProps = { y: -50, opacity: 0 };
      } else if (animationType === "fade-left") {
        fromProps = { x: 50, opacity: 0 };
      } else if (animationType === "fade-right") {
        fromProps = { x: -50, opacity: 0 };
      } else {
        fromProps = { y: 50, opacity: 0 };
      }

      gsap.fromTo(
        el,
        fromProps,
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", 
            toggleActions: "play none none reset",
          },
        }
      );
    });
  }, []);

  return (
    <main>
      <img
        src={TrainingBanner}
        alt="Training Banner"
        className="img-fluid w-100"
      />
      <div className="container">
        <section className="mt-5">
          <div className="row">
            <div
              className="col-lg-12"
              data-aos="fade-down"
              ref={addToRefs}
            >
              <h1 className="light-blue">
                Empowering Professionals with Expert IT Training
              </h1>
              <div>
                <p className="fs-5">
                  At OraAppsTech, we provide comprehensive IT training programs
                  designed to help individuals and businesses stay ahead in the
                  ever-evolving tech landscape. Our training modules cover a
                  wide range of cutting-edge technologies, including cloud
                  computing, cybersecurity, software development, data
                  analytics, AI, and UI/UX design. Whether you are a beginner or
                  an experienced professional looking to upskill, our structured
                  programs cater to all skill levels, ensuring a hands-on
                  learning experience that bridges the gap between theory and
                  real-world application.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              ref={addToRefs}
            >
              <img
                src={TrainingImage}
                alt=""
                className="img-fluid"
              />
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              ref={addToRefs}
            >
              <h1 className="light-blue">Industry-Focused Learning Approach</h1>
              <p className="fs-5">
                Our IT training programs follow an industry-driven approach,
                incorporating practical projects, live demonstrations, and
                interactive sessions. We believe in learning by doing, and our
                courses are structured to provide real-world exposure through
                case studies, simulations, and project-based learning. Our
                expert trainers, with years of industry experience, guide
                learners through the latest tools and technologies, ensuring
                they gain the necessary skills to excel in modern IT
                environments.
              </p>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div
                className="col-lg-6"
                data-aos="fade-left"
                ref={addToRefs}
              >
                <h4 className="light-blue">
                  Flexible and Career-Oriented Training Programs
                </h4>
                <p className="fs-5">
                  Understanding the need for flexibility, we offer both online
                  and in-person training options, allowing professionals to
                  learn at their own pace. Our certification-based training
                  programs are designed to enhance employability and career
                  growth, helping individuals land better job opportunities or
                  advance within their organizations. At OraAppsTech, our
                  mission is to equip learners with job-ready skills,
                  empowering them to thrive in the competitive IT industry with
                  confidence and expertise.
                </p>
              </div>
              <div
                className="col-lg-6"
                data-aos="fade-right"
                ref={addToRefs}
              >
                <img
                  src={CareerImage}
                  alt=""
                  className="img-fluid w-75"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Trainings;