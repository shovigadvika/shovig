import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaShoppingCart,
  FaHeartbeat,
  FaGraduationCap,
  FaPlane,
  FaWallet,
  FaUtensils,
  FaBuilding,
  FaFilm,
} from "react-icons/fa";

const industryData = [
  { icon: <FaShoppingCart className="text-white text-2xl" />, title: "E-Commerce & Retail" },
  { icon: <FaHeartbeat className="text-white text-2xl" />, title: "Healthcare & Wellness" },
  { icon: <FaGraduationCap className="text-white text-2xl" />, title: "Education & E-Learning" },
  { icon: <FaPlane className="text-white text-2xl" />, title: "Travel & Hospitality" },
  { icon: <FaWallet className="text-white text-2xl" />, title: "Finance & Fintech" },
  { icon: <FaUtensils className="text-white text-2xl" />, title: "Food Delivery & Logistics" },
  { icon: <FaBuilding className="text-white text-2xl" />, title: "Real Estate & Property" },
  { icon: <FaFilm className="text-white text-2xl" />, title: "Entertainment & Media" },
];

const OurMobileExtras = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-16 px-4 md:px-16 bg-white text-center relative overflow-x-hidden">
      <h2
        className="text-4xl font-bold mb-4 text-[#00a34d]"
        data-aos="fade-up"
      >
        Industries We Serve
      </h2>
      <p
        className="max-w-2xl mx-auto text-gray-600 mb-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our mobile apps empower experiences across a broad range of industries.
        Whether it's a customer-facing app or an internal tool, we bring your business vision to life.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1940px] m-auto">
        {industryData.map((card, index) => (
          <div
            key={index}
            className="group p-6 rounded-2xl bg-[#ffffff] border border-gray-200 shadow-[8px_8px_16px_#d9d9d9,_-8px_-8px_16px_#ffffff] transition-transform duration-300 transform hover:shadow-xl"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="relative w-16 h-16 mb-4 mx-auto flex items-center justify-center">
              <div className="absolute w-full h-full bg-[#00a34d] animated-blob opacity-80" />
              <div className="relative z-10">{card.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMobileExtras;
