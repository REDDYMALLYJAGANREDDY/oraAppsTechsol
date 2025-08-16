import "./Home.css";
import hero1 from "../../assets/images/hero1.jpg";
import hero2 from "../../assets/images/hero2.jpg";
import ServicePage from "./ServicePage";
import Home_about_us from "./Home_about_us";
import Navbar from "./Navbar";

interface Job {
  id: number | string;
  title: string;
  location: string;
  type: string;
  openings: string;
}

interface HomeProps {
  jobs: Job[];
}

const Home: React.FC<HomeProps> = ({ jobs }) => {
  return (
    <>
      <div
        id="zoomCarousel"
        className="carousel slide mt-4-plus"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner">
          <div className="scroll-carousel">
            <div className="scroll-track">
              <div className="scroll-item">
                <img src={hero1} alt="Hero 1" />
                <div className="animated-text">
                  <span className="word">Transform</span>
                  <span className="word">Your</span>
                  <span className="word">Business</span>
                </div>
              </div>
              <div className="scroll-item">
                <img src={hero2} alt="Hero 2" />
                <div className="animated-text">
                  <span className="word">Innovate</span>
                  <span className="word">With</span>
                  <span className="word">Confidence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container-fluid job-section-wrap pT-5 pB-5">
        <div className="about-jobboard-wrapper">
          <div className="left-content-wrapper">
            <h4>Job Board – Your Gateway to a Better Career</h4>
            <h1>Find the Right Job with Insights That Matter</h1>
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
              <h2 className="grey-title border border-0 text-white">Jobs</h2>
              <a
                href="#"
                className="link text-white text-decoration-none"
              >
                All Jobs
              </a>
            </div>

            <div className="jobs-list-wrapper">
              <div className="jobs-collection-wrap">
                <div className="right-jobs-collection-wrapper">
                  <section className="jobsection">
                    <div className="job-slider">
                      <div className="job-track">
                        {jobs &&
                          jobs.map((job) => (
                            <div key={job.id} className="about-positon-wrapper">
                              <div className="position-wrap">
                                <div className="job-title-openings">
                                  <div className="job-title">{job.title}</div>
                                  <div className="jobs-salary-wrapper">
                                    {job.openings}
                                  </div>
                                </div>
                                <div className="location-type-wrapper wrap">
                                  <div className="location-item-wrap">
                                    <i className="fa-solid fa-globe"></i>
                                    <p className="jobs-paragraph">
                                      {job.location}
                                    </p>
                                  </div>
                                  <div className="location-item-wrap">
                                    <i className="fa-solid fa-house-laptop"></i>
                                    <p className="jobs-paragraph">
                                      {job.type}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="right-salary-wrapper">
                                <a
                                  className="apply-btn"
                                  href={`/job-detail/${job.id}`}
                                >
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
