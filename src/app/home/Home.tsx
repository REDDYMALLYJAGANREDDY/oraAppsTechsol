import React from "react";
import "./Home.css";
import hero1 from '../../assets/images/hero1.jpg'

interface Job {
  id: number | string;
  title: string;
  location: string;
  type: string;
  experience: string;
}

interface HomeProps {
  jobs: Job[];
}

const Home: React.FC<HomeProps> = ({ jobs }) => {
  return (
    <>
      {/* Carousel */}
      <div id="zoomCarousel" className="carousel slide mt-4-plus" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-content">
              <div className="image-container">
                <img src={hero1} className="zoom-animation" alt="Hero 1" />
              </div>
              <div className="animated-text">
                <span className="word">Transform</span>
                <span className="word">Your</span>
                <span className="word">Business</span>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content">
              <div className="image-container">
                <img src="assets/images/hero2.jpg" className="zoom-animation" alt="Hero 2" />
              </div>
              <div className="animated-text">
                <span className="word">Innovate</span>
                <span className="word">With</span>
                <span className="word">Confidence</span>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#zoomCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#zoomCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* Jobs Section */}
      <section className="container-fluid job-section-wrap pT-5 pB-5">
        <div className="about-jobboard-wrapper">
          <div className="left-content-wrapper">
            <h6>Job Board – Your Gateway to a Better Career</h6>
            <h2>Find the Right Job with Insights That Matter</h2>
            <p>
              Take the next step toward your dream career with our Job Board...
            </p>
          </div>
          <div className="home-jobs-wrapper">
            <div className="wrapper-with-link">
              <h5 className="grey-title border border-0 text-white">Jobs</h5>
              <a href="/jobs-listing" className="link text-white text-decoration-none">All Jobs</a>
            </div>
            <div className="jobs-list-wrapper">
              <div className="jobs-collection-wrap">
                <div className="right-jobs-collection-wrapper">
                  <section className="w-100">
                    <div className="job-slider">
                      <div className="job-track">
                        {jobs &&
                          jobs.map((job) => (
                            <div key={job.id} className="about-positon-wrapper">
                              <div className="position-wrap">
                                <div className="job-title">{job.title}</div>
                                <div className="location-type-wrapper wrap">
                                  <div className="location-item-wrap">
                                    <i className="fa-solid fa-globe"></i>
                                    <p className="jobs-paragraph">{job.location}</p>
                                  </div>
                                  <div className="location-item-wrap">
                                    <i className="fa-solid fa-house-laptop"></i>
                                    <p className="jobs-paragraph">{job.type}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="right-salary-wrapper">
                                <div className="jobs-salary-wrapper">{job.experience}</div>
                                <a className="apply-btn" href={`/job-detail/${job.id}`}>
                                  Apply
                                </a>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
