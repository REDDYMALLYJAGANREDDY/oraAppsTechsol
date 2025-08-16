import React, { useRef } from "react";
import "./Home_about_us.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home_about_us = () => {
  const JoinCard = React.useRef<HTMLInputElement>(null);
  const AboutUsText = React.useRef<HTMLHeadingElement>(null);
  const BgImageCard = React.useRef<HTMLDivElement>(null);
  const knowmore = React.useRef<HTMLButtonElement>(null);
  const textcontent = React.useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: JoinCard.current,
        start: "top 90%",
        end: "bottom 50%",
        once:true,
      },
    });

    tl.from(JoinCard.current, {
      y: 100,
      opacity: 0,
      duration: 1,
    })
      .from(knowmore.current, {
        x: -100,
        duration: 0.8,
      })
      .from(BgImageCard.current, {
        scale: 0,
        opacity: 0,
        duration: 1.4,
      })
      .from(AboutUsText.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
      });
    gsap.from(textcontent.current, {
      y: -410,
      opacity: 50,
      duration: 1,
    });
  });

  return (
    <>
      <div ref={JoinCard} className="Home_about">
        <div className="join-our">
          <div className="join-our-content">
            <div className="textcontainer">
              Join our growing global team and reach your full potential.
            </div>
            {/* <div ref={knowmore} className="btnAnimation"> */}
            <button ref={knowmore} className="know_more">
              <span>Know more</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            {/* </div> */}
          </div>
        </div>
        <div ref={BgImageCard} className="aboutUs">
          <div className="contents-wrapper">
            <div className="text-box">
              <h3 ref={AboutUsText}>About Us</h3>
              <div ref={textcontent} className="inner-text">
                <div className="text-content">
                  <p>
                    we specialize in consulting, software development, UI/UX
                    design, web and app development, AI solutions, and project
                    support. Our expert team focuses on innovation, quality, and
                    customer satisfaction, ensuring tailored solutions for every
                    business need.
                  </p>
                  <button>
                    know more
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_about_us;
