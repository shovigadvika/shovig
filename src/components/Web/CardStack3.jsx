import React from "react";
import {
  FaPaintBrush,
  FaMobileAlt,
  FaLock,
  FaSearch,
  FaTags,
  FaBoxes,
  FaUserShield,
  FaUserCircle,
  FaPercent,
  FaLanguage,
  FaEnvelopeOpenText,
  FaHandsHelping,
} from "react-icons/fa";
import card from "../../assets/services/card3.webp";

const CardStack3 = () => {
  return (
    <section className="w-full py-12 relative lg:sticky lg:top-10 z-20 px-4 sm:px-6 lg:px-[64px] overflow-x-hidden">
      <div className="bg-[#e4e1e1] rounded-2xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 h-[220px] sm:h-[300px] lg:h-[500px] flex items-center">
            <img
              src={card}
              alt="E-Commerce Features"
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-between gap-6">
            <div className="flex items-center gap-3">
              <FaHandsHelping className="text-[#00a34d] text-xl sm:text-2xl" />
              <h2 className="text-xl sm:text-2xl font-bold">
                E-Commerce Features at a Glance
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base">
              Packed with powerful features, our e-commerce platforms are built to convert and scale seamlessly.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-6">
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl transition-transform transform hover:scale-105 duration-300"
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
const featureCards = [
  {
    icon: FaPaintBrush,
    title: "Custom Design & UX",
    desc: "Tailored shopping experiences that reflect your brand.",
  },
  {
    icon: FaLock,
    title: "Secure Checkout & SSL",
    desc: "Encryption ensures safe and trustworthy transactions.",
  },
  {
    icon: FaSearch,
    title: "SEO-Optimized Architecture",
    desc: "Structure built to rank high and drive organic traffic.",
  },
  {
    icon: FaBoxes,
    title: "Inventory Management",
    desc: "Real-time stock control, syncing, and reporting.",
  },
];


export default CardStack3;
