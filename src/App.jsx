// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import DayLight from "./components/DayLight";
import HowItWorks from "./components/HowItWorks";
import Fund from "./components/Fund";
import Choose from "./components/Choose";
import Ready from "./components/Ready";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Display />
      <DayLight />
      <HowItWorks />
      <Fund />
      <Choose />
      <Ready />
      <Footer />

      <Routes></Routes>
    </>
  );
}
