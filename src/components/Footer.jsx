import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative md:h-screen bg-white text-gray-700 z-30 max-w-[1440px] md:mt-0 m-auto">
      {/* Background Heading */}
      <div className="md:absolute top-0 left-0 w-full h-1/2 flex items-center justify-center ">
        <h1 className="text-[30vw] md:text-[30vw] lg:text-[30vw] 3xl:text-[10vw] font-bold italic text-[#00a34d]/10 text-center select-none pointer-events-none z-50">
          Shovig
        </h1>
      </div>

      {/* Main Footer Content */}
      <div className="md:absolute bottom-0 w-full px-4 md:px-8 lg:px-24 py-12 z-10 bg-white">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* About */}
          <div>
            <img src={logo} alt="Shovig Logo" className="w-32 mb-4" />
            <p className="text-sm mb-4">
              Shovig Business Solution was recognized in 2022 by Shobiga,
              Aardent and Ambition with a strong background in education and
              technology.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/161T5tkAsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a34d] text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/shovig_?igsh=OTBjeGQwN3BpeGNv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00a34d] text-lg"
              >
                <FaInstagram />
              </a>
              <a href="#" className="text-[#00a34d] text-lg">
                <FaWhatsapp />
              </a>
              <a href="#" className="text-[#00a34d] text-lg">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#00a34d]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#00a34d]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#00a34d]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#00a34d]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/web-dev" className="hover:text-[#00a34d]">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/app-dev" className="hover:text-[#00a34d]">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/ai" className="hover:text-[#00a34d]">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="hover:text-[#00a34d]">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Training</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/training/full-stack-web-dev"
                  className="hover:text-[#00a34d]"
                >
                  Full Stack Web Dev
                </Link>
              </li>
              <li>
                <Link
                  to="/training/digital-marketing"
                  className="hover:text-[#00a34d]"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/training/ai" className="hover:text-[#00a34d]">
                  AI Development
                </Link>
              </li>
              <li>
                <Link
                  to="/training/digital-marketing"
                  className="hover:text-[#00a34d]"
                >
                  UI/UX & Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#00a34d] mt-1" />
                <span>
                  8/45 Vee Vee Illam, Sardha Nagar, BK Pudur, Kuniyamuthur,
                  Coimbatore - 641008
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#00a34d] mt-1" />
                <div>
                  <p>
                    <a href="tel:8870173336">8870173336</a>
                  </p>
                  <p>
                    <a href="tel:8680850380">8680850380</a>
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#00a34d] mt-1" />
                <a href="mailto:info@shovig.in">info@shovig.in</a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-[#00a34d] mt-1" />
                <div>
                  <p>India: 9am – 6pm</p>
                  <p>US: 7pm – 5am</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-10 text-center text-xs text-gray-400">
          © {currentYear} Shovig. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
