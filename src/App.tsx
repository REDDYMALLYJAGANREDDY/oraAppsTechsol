import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./app/home/Home";
import Navbar from "./app/home/Navbar";
import ServicePage from "./app/home/ServicePage";
import Home_about_us from "./app/home/Home_about_us";
import Industrial_section from "./app/home/Industrial_section";
import Footer from "./app/home/Footer";

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
    {
      id: 4,
      title: "Full Stack Developer",
      openings: "1",
      location: "Delhi",
      type: "Hybrid",
    },
  ];

  return (
    <>
      <Navbar />
      <Home jobs={jobs} />

      <ServicePage />
      <Home_about_us />
      <Industrial_section />
      <Footer />
    </>
  );
}

export default App;
