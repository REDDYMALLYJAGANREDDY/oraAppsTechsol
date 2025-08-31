import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./AllJobs.css";

gsap.registerPlugin(ScrollTrigger);

type Job = {
  id: number;
  title: string;
  location: string;
  type: string;
  openings?: string;
};

interface AllJobsProps {
  jobs: Job[];
  onApply?: (jobId: number) => void;
}

const AllJobs: React.FC<AllJobsProps> = ({ jobs, onApply }) => {
  useEffect(() => {
    const cards = Array.from(
      document.querySelectorAll(".alljobs-card")
    ) as HTMLElement[];

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="alljobs-section">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Current Job Openings
        </h2>

        <div className="jobs grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <div key={job.id} className="alljobs-card">
              <div className="alljobs-info">
                <h3 className="job-title">{job.title}</h3>
                <p className="job-detail">🌍 {job.location}</p>
                <p className="job-detail">💼 {job.type}</p>
              </div>

              <div className="alljobs-right">
                {job.openings && (
                  <span className="openings-badge">{job.openings}</span>
                )}

                {onApply ? (
                  <button
                    onClick={() => onApply(job.id)}
                    className="apply-btn"
                  >
                    Apply
                  </button>
                ) : (
                  <Link to={`/job-detail/${job.id}`} className="apply-btn">
                    Apply
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
