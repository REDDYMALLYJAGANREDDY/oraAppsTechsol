import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './gen-ai.css'
gsap.registerPlugin(ScrollTrigger);

import genAiImg from "../../../assets/images/gen-ai.jpg";
import transformingBusinessesImg from "../../../assets/images/Transforming-Businesses.jpg";
import customAiImg from "../../../assets/images/Custom-AI-Solutions.jpg";
import seamlessAiImg from "../../../assets/images/Seamless-AI-Integration.jpg";

const GenAi: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    
    sectionsRef.current.forEach((el) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
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

  const services = [
    {
      title: "Transforming Businesses with Generative AI",
      text: `Generative AI has revolutionized industries by automating content creation, streamlining workflows, and enhancing decision-making processes. At OraAppsTech, we offer cutting-edge Generative AI solutions tailored to business needs. Whether it's AI-driven text generation, image synthesis, code automation, or chatbot development, our AI-powered solutions help businesses boost efficiency, reduce costs, and enhance customer experiences.`,
      img: transformingBusinessesImg,
    },
    {
      title: "Custom AI Solutions for Enhanced Productivity",
      text: `Our Generative AI services go beyond automation, enabling businesses to generate unique, high-quality content for various applications. From marketing copies, blog content, and personalized recommendations to real-time AI-assisted customer support, we ensure that businesses leverage AI for maximum productivity.`,
      img: customAiImg,
    },
    {
      title: "Seamless AI Integration with Scalable Solutions",
      text: `At OraAppsTech, we specialize in integrating Generative AI with existing enterprise systems to ensure smooth adoption and scalability. Our AI models learn from structured and unstructured data, helping businesses gain actionable insights and make data-driven decisions while ensuring security and ethical practices.`,
      img: seamlessAiImg,
    },
  ];

  return (
    <main>
      <img src={genAiImg} className="img-fluid w-full" alt="Generative AI" />
      <section className="services py-5">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="row my-5 items-center"
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-lg-6">
                    <img
                      src={service.img}
                      className="img-fluid rounded-lg"
                      alt={service.title}
                    />
                  </div>
                  <div className="col-lg-6 box-align">
                    <div className="service-card p-4 shadow-sm">
                      <h5 className="fw-bold lt-blue-c">{service.title}</h5>
                      <p className="text-justify">{service.text}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-lg-6 box-align">
                    <div className="service-card p-4 shadow-sm">
                      <h5 className="fw-bold lt-blue-c">{service.title}</h5>
                      <p className="text-justify">{service.text}</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src={service.img}
                      className="img-fluid rounded-lg"
                      alt={service.title}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GenAi;
