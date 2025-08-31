import React, { useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import "./home.css";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import solution1 from "../../assets/images/solution1.png";
import solution2 from "../../assets/images/solution2.png";
import solution3 from "../../assets/images/solution3.png";
import solution4 from "../../assets/images/solution4.png";

export interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  openings?: string;
}

interface HomeProps {
  jobs: Job[];
}

const Home: React.FC<HomeProps> = ({ jobs }) => {
  useEffect(() => {
    const sections = gsap.utils.toArray<HTMLElement>(".animate-section");
    sections.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
        }
      );
    });
  }, []);

  return (
    <div className="home-page">
      <div
        id="zoomCarousel"
        className="carousel slide mt-4-plus animate-section"
      >
        <div className="carousel-inner">
          {[
            { img: hero1, words: ["Transform", "Your", "Business"] },
            { img: hero2, words: ["Innovate", "With", "Confidence"] },
          ].map((item, i) => (
            <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
              <div className="carousel-content">
                <div className="image-container">
                  <img
                    src={item.img}
                    className="zoom-animation"
                    alt={`Hero ${i + 1}`}
                  />
                </div>
                <div className="animated-text">
                  {item.words.map((word, idx) => (
                    <span className="word" key={idx}>
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#zoomCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#zoomCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="container-fluid job-section-wrap pT-5 pB-5 animate-section">
        <div className="about-jobboard-wrapper">
          <div className="left-content-wrapper">
            <h6>Job Board – Your Gateway to a Better Career</h6>
            <h2>Find the Right Job with Insights That Matter</h2>
            <p>
              Take the next step toward your dream career with our Job Board.
              Get a personalized salary estimate based on your skills and
              experience, helping you make informed decisions. Explore detailed
              company reviews and insights from professionals across various
              industries. With access to thousands of company ratings, you can
              find the perfect workplace that aligns with your career goals.
              Start your journey today and make confident career choices!
            </p>
          </div>

          <div className="home-jobs-wrapper">
            <div className="wrapper-with-link">
              <h5 className="grey-title border-0 text-white">Jobs</h5>
              <Link
                to="/jobs-listing"
                className="link text-white text-decoration-none"
              >
                All Jobs
              </Link>
            </div>

            <div className="job-slider">
              <div className="job-track">
                {jobs.concat(jobs).map((job) => (
                  <div className="job-card" key={job.id}>
                    <div className="job-header">
                      <span className="job-title">{job.title}</span>
                      <span className="job-openings">{job.openings}</span>
                    </div>

                    <div className="job-meta">
                      <div className="meta-item">
                        <i className="fa-solid fa-globe"></i>
                        <span>{job.location}</span>
                      </div>
                      <div className="meta-item">
                        <i className="fa-solid fa-house-laptop"></i>
                        <span>{job.type}</span>
                      </div>
                    </div>

                    <div className="job-footer">
                      <Link to={`/job-detail/${job.id}`} className="apply-btn">
                        Apply
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-wrapper animate-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="services-left-wrap">
                <div className="services-title-wrap">
                  <div className="subtitle">
                    <span>Our Services</span>
                    <h2>All Services</h2>
                    <div className="content-wrap">
                      We offer innovative and tailored technology solutions to
                      help businesses thrive in the digital era. From consulting
                      and software development to UI/UX design, AI solutions,
                      and project support, we deliver excellence with every
                      service.
                    </div>
                  </div>
                </div>
                <div className="service-list">
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Consulting
                      and Outsourcing
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Software
                      Development
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> UI/UX
                      Design
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Training
                      Programs
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i> Project
                      Support
                    </li>
                    <li>
                      <i className="fa-regular fa-circle-check"></i>{" "}
                      Guidewire/SmartComm
                    </li>
                  </ul>
                </div>
                <Link
                  to="/ora-services/consulting-outsourcing"
                  className="btn text-white knw-btn"
                >
                  Know more
                </Link>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-7">
              <div className="services-column-wrap">
                {[
                  {
                    icon: "fa-users",
                    title: "Consulting and Outsourcing",
                    desc: "We help businesses streamline operations by offering expert IT consulting and outsourcing solutions..",
                  },
                  {
                    icon: "fa-cloud",
                    title: "Software Development",
                    desc: "We craft tailored software solutions that align with your business objectives...",
                  },
                  {
                    icon: "fa-figma",
                    title: "UI/UX Design",
                    desc: "Our UI/UX design services focus on creating seamless...",
                  },
                  {
                    icon: "fa-leanpub",
                    title: "Training Programs",
                    desc: "We provide specialized training sessions to equip professionals...",
                  },
                ].map((service, i) => (
                  <div className="services-column" key={i}>
                    <div className="content-item">
                      <div className="media-icon">
                        <div className="icon-wrapper">
                          <span>
                            <i className={`fa-solid ${service.icon}`}></i>
                          </span>
                        </div>
                      </div>
                      <div className="content-details-group">
                        <div className="content-title">
                          <h5>{service.title}</h5>
                        </div>
                        <div className="content-desc">
                          <p>{service.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="Join-our pT-5 pB-5 animate-section">
        <div className="container">
          <div className="Join-our_content">
            <span className="fs-3 fw-bold">
              Join our growing global team and reach your full potential.
            </span>
            <Link to="#" className="know-more-btn">
              know more <i className="fa-solid fa-arrow-right ms-3"></i>
            </Link>
          </div>
        </div>
      </div>

      <section className="about-us-section position-relative animate-section">
        <div className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <h2 className="base-h1 text-white mb-4">About Us</h2>
                <div className="about-card">
                  <p>
                    We specialize in consulting, software development, UI/UX
                    design, web and app development, AI solutions, and project
                    support.
                  </p>
                  <br />
                  <Link to="/about-us" className="know-more-btn mt-5">
                    know more <i className="fa-solid fa-arrow-right ms-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="Industry-Sections animate-section">
        <div className="container-fluid">
          <div className="Industry-title my-lg-5">
            <h1 className="base-h1 lt-blue-c">
              Intelligent Solutions for Every Sector
            </h1>
          </div>
          <div className="row">
            {[
              {
                title: "Software Development",
                img: solution1,
              },
              {
                title: "Product Development",
                img: solution2,
              },
              {
                title: "Software Consulting",
                img: solution3,
              },
              { title: "Graphic Design", img: solution4 },
            ].map((solution, i) => (
              <div className="col-sm-6 col-lg-3" key={i}>
                <div className={`industry-card industry-bg${i + 1}`}>
                  <h5 className="base-h5">
                    {solution.title.split(" ").map((word, idx) => (
                      <React.Fragment key={idx}>
                        {word}
                        <br />
                      </React.Fragment>
                    ))}
                  </h5>
                  <img src={solution.img} alt={solution.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
