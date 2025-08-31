import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./app/home/Navbar";
import Home from "./app/home/Home";

import Footer from "./app/home/Footer";
import AboutUs from "./app/about-us/AboutPage";
import SoftwareDevelopment from "./app/software-development/SoftwareDevelopment";
import ConsultingOutsourcing from "./app/ora-services/consulting-outsourcing/ConsultingOutsourcing";
import Trainings from "./app/ora-services/training/Tranings";
import ProjSupport from "./app/ora-services/proj-support/ProjectSupport";
import GenAi from "./app/ora-services/gen-ai/GenAi";
import AllJobs from "./app/AllJobs/Alljobs";

function App() {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      openings: "3",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Developer",
      openings: "6",
      location: "Noida",
      type: "Remote",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      openings: "1",
      location: "Delhi",
      type: "Hybrid",
    },
  ];

  const alljobs = [
    {
      id: 1,
      title: "Frontend Developer",
      openings: "3",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Backend Developer",
      openings: "6",
      location: "Noida",
      type: "Remote",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      openings: "1",
      location: "Delhi",
      type: "Hybrid",
    },
    {
      id: 4,
      title: "Frontend Developer",
      openings: "3",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 5,
      title: "Backend Developer",
      openings: "6",
      location: "Noida",
      type: "Remote",
    },
    {
      id: 6,
      title: "Full Stack Developer",
      openings: "1",
      location: "Delhi",
      type: "Hybrid",
    },
        
  ]

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home jobs={jobs} />
                </>
              }
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route
              path="/software-development"
              element={<SoftwareDevelopment />}
            />
            <Route
              path="/ora-services/consulting-outsourcing"
              element={<ConsultingOutsourcing />}
            />
            <Route path="/ora-services/trainings" element={<Trainings />} />
            <Route
              path="/ora-services/proj-support"
              element={<ProjSupport />}
            />
            <Route path="/ora-services/gen-ai" element={<GenAi />} />
            <Route path="/jobs-listing" element={<AllJobs jobs={alljobs}/>} />


            <Route
              path="*"
              element={<h2 className="text-center mt-5">Page Not Found</h2>}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
