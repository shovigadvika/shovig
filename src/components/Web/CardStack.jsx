import React from "react";
import { FaCode, FaServer, FaDatabase, FaCogs } from "react-icons/fa";
import card from "../../assets/services/card.webp";

const CardStack = () => {
  return (
    <section className="w-full max-w-[1940px] m-auto py-12 relative lg:sticky lg:top-10 z-10 px-4 sm:px-6 lg:px-[64px] overflow-x-hidden">
      <div className="bg-[#f4f4f4] rounded-2xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-[1940px] m-auto  mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-[500px] flex items-center">
            <img
              src={card}
              alt="Web Development"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-3">
              <FaCode className="text-[#00a34d] text-xl sm:text-2xl" />
              <h2 className="text-xl sm:text-2xl font-bold">
                Our Web Development Strategy
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base">
              We build custom, strategy-led websites that elevate your brand and
              engage your users. Our work is performance-driven, user-first, and
              stunning by design.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {enrollCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl hover:scale-[1.03] transition-all duration-300"
                >
                  <div className="bg-[#00a34d]/10 p-2 sm:p-3 rounded-full">
                    <card.icon className="text-[#00a34d] text-base sm:text-xl" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const enrollCards = [
  {
    icon: FaCode,
    title: "Front-End Excellence",
    desc: "Responsive, intuitive interfaces built using React, Tailwind, Next.js & more.",
  },
  {
    icon: FaServer,
    title: "Back-End Power",
    desc: "Secure, scalable architecture with Node.js, PHP, and Python.",
  },
  {
    icon: FaDatabase,
    title: "Data-Driven Systems",
    desc: "High-performance databases like MongoDB & SQL to manage your growth.",
  },
  {
    icon: FaCogs,
    title: "Full-Stack Solutions",
    desc: "From e-commerce to CMS to custom apps — we deliver seamless performance.",
  },
];

export default CardStack;
