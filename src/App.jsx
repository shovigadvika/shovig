import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import DigitalMarketing from "./pages/DigitalMarketing";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./utils/ScrollToTop";
import FloatingActions from "./components/FloatingActions";
import WebDevTraining from "./pages/Training/WebDevTraining";
import DigitalMarketingTraining from "./pages/Training/DigitalMarketingTraining";
import AiTraining from "./pages/Training/AiTraining";
import UiUxTraining from "./pages/Training/UiUxTraining";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/Loader";
import SchemaMarkup from "./components/SchemaMarkup";

// Page wrapper to detect route changes
import { useNavigationType } from "react-router-dom";

const PageRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
     <SchemaMarkup /> 
      {loading && <Loader />}
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/website-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/training/full-stack-website-development-training" element={<WebDevTraining />} />
        <Route path="/training/digital-marketing-training" element={<DigitalMarketingTraining />} />
        <Route path="/training/artificial-intelligence-training" element={<AiTraining />} />
        <Route path="/training/ui-ux-training" element={<UiUxTraining />} />
      </Routes>
    </>
  );
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <PageRoutes />
        <FloatingActions />
        <Footer />
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default App;
