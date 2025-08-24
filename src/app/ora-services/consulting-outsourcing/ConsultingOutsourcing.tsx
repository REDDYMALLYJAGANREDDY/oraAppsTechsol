import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ConsultingOutsourcing.css";


import Consulting_Outsourcing from "../../../assets/images/consult-outsourcing.jpg"
import Outsourcing from "../../../assets/images/outsourcing.jpg"
import Outsourcing1 from "../../../assets/images/outsourcing-1.jpg"


gsap.registerPlugin(ScrollTrigger);

const ConsultingOutsourcing= () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    sectionsRef.current.forEach((el) => {
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
    });
  }, []);

  return (
    <main>
      <img
        src={Consulting_Outsourcing}
        alt="Consulting & Outsourcing"
        className="img-fluid"
      />

      <div className="container">
        <section className="mt-5">
          <div className="row">
            <div
              className="col-lg-6"
              ref={addToRefs}
            >
              <h2 className="lt-blue-c">Consulting and Outsourcing Services</h2>
              <p className="fs-5">
                At OraAppsTech, we provide expert IT consulting and outsourcing
                services designed to help businesses streamline operations,
                reduce costs, and enhance productivity. Our consulting process
                begins with a detailed assessment of your business needs,
                challenges, and goals. We analyze your existing systems,
                identify gaps, and recommend tailored strategies to improve
                efficiency and scalability. Our team of industry experts ensures
                that businesses adopt the right technologies, frameworks, and
                methodologies to stay ahead in a competitive market.
              </p>
            </div>
            <div
              className="col-lg-6"
              ref={addToRefs}
            >
              <img
                src={Outsourcing}
                alt="Outsourcing"
                className="img-fluid"
              />
            </div>
          </div>
        </section>

        <div className="row mt-5">
          <div
            className="col-lg-5"
            ref={addToRefs}
          >
            <img
              src={Outsourcing1}
              alt="Outsourcing 1"
              className="img-fluid"
            />
          </div>
          <div
            className="col-lg-7"
            ref={addToRefs}
          >
            <p className="fs-5">
              Once the strategy is defined, our outsourcing process begins with
              selecting the right talent and resources to execute the project.
              We provide dedicated teams, managed services, and staff
              augmentation, ensuring businesses have the right expertise without
              the overhead of in-house hiring. Our outsourcing model is built on
              transparency, flexibility, and efficiency, allowing seamless
              collaboration and faster project execution while maintaining
              high-quality standards.
            </p>
          </div>
        </div>
      </div>

      <section className="wrap-outsourcing">
        <div className="container">
          <div className="row">
            <div
              className="col-12 mt-5"
              ref={addToRefs}
            >
              <div className="white-box">
                <p className="fs-5">
                  With continuous monitoring and support, we ensure that our
                  consulting and outsourcing solutions drive long-term success.
                  Our experts provide ongoing maintenance, optimization, and
                  performance analysis to keep businesses ahead of industry
                  trends. By partnering with OraAppsTech, companies gain access
                  to cutting-edge technology, global expertise, and
                  cost-effective solutions to accelerate growth and achieve
                  operational excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ConsultingOutsourcing;
