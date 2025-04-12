import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Display from "./components/Display";
import DayLight from "./components/DayLight";
import HowItWorks from "./components/HowItWorks";
import Fund from "./components/Fund";
import Choose from "./components/Choose";
import Ready from "./components/Ready";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Display />
              <DayLight />
              <HowItWorks />
              <Fund />
              <Choose />
              <Ready />
              <Footer />
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        {/* You can also add other routes like How It Works, etc., here later */}
      </Routes>
    </>
  );
}
