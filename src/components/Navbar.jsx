import React, { useState, useEffect } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink =
    "relative cursor-pointer transition-all duration-300 hover:text-[#00a34d] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#00a34d] after:transition-all after:duration-300 hover:after:w-full after:-translate-x-1/2";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 py-3 shadow-sm"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1940px] m-auto  mx-auto px-6 md:px-10 xl:px-28 flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-28 md:w-52 h-auto" />

        <ul className="hidden lg:flex space-x-6 lg:space-x-10 items-center font-medium text-[#454545]">
          <li className={navLink}>
            <Link to="/">Home</Link>
          </li>
          <li className={navLink}>
            <Link to="/about">About Us</Link>
          </li>

          <li className="relative group">
            <div className={`${navLink} flex items-center gap-1`}>
              Services{" "}
              <FaChevronDown className="transition-transform group-hover:rotate-180" />
            </div>
            <ul className="absolute top-12 left-0 bg-white shadow-2xl rounded-2xl px-6 py-5 grid grid-cols-1 gap-5 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 min-w-[320px]">
              <li>
                <Link
                  to="/website-development"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/app-development"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/artificial-intelligence"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/digital-marketing"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <div className={`${navLink} flex items-center gap-1`}>
              Training{" "}
              <FaChevronDown className="transition-transform group-hover:rotate-180" />
            </div>
            <ul className="absolute top-12 left-0 bg-white shadow-2xl rounded-2xl px-6 py-5 grid grid-cols-1 gap-5 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50 min-w-[320px]">
              <li>
                <Link
                  to="/training/full-stack-website-development-training"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  Full Stack Web Development Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/digital-marketing"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  Digital Marketing Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/artificial-intelligence-training"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  AI Development Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/ui-ux-training"
                  className="hover:text-[#00a34d] hover:scale-105 block font-medium"
                >
                  UI/UX & Graphic Design Training
                </Link>
              </li>
            </ul>
          </li>

          <li className={navLink}>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/contact">
              <button className="bg-[#00a34d] text-white px-5 py-2 rounded-full hover:bg-[#008e42] transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>

        <div className="lg:hidden">
          <FaBars
            className="text-2xl cursor-pointer text-[#454545]"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      <div
        className={`lg:hidden bg-white transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-[#00a34d]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-[#00a34d]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              About Us
            </Link>
          </li>
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full"
            >
              Services
              <FaChevronDown
                className={`transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 text-sm ${
                servicesOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/website-development"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/app-development"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/artificial-intelligence"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  to="/digital-marketing"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <button
              onClick={() => setTrainingOpen(!trainingOpen)}
              className="flex items-center justify-between w-full"
            >
              Training
              <FaChevronDown
                className={`transition-transform ${
                  trainingOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <ul
              className={`pl-4 mt-2 space-y-2 text-sm ${
                trainingOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  to="/training/full-stack-website-development-training"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Full Stack Web Development Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/digital-marketing"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  Digital Marketing Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/artificial-intelligence-training"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  AI Development Training
                </Link>
              </li>
              <li>
                <Link
                  to="/training/digital-marketing"
                  className="hover:text-[#00a34d]"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  UI/UX & Graphic Design Training
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:text-[#00a34d]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(!menuOpen)}>
              <button className="bg-[#00a34d] text-white px-4 py-2 rounded-full hover:bg-[#008e42] transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
