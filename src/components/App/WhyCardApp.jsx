import React from "react";
import {
  FaCogs,
  FaBolt,
  FaMobileAlt,
  FaBug,
  FaUsers,
} from "react-icons/fa";
import bgImage from "../../assets/services/q2.jpg";

const cardData = [
  {
    icon: FaMobileAlt,
    title: "Mobile-First Thinking",
    desc: "Every pixel and line of code is optimized for mobile-first, user-first performance.",
  },
  {
    icon: FaCogs,
    title: "Scalable Architecture",
    desc: "Apps built to handle growth — from MVP to millions of users, we’ve got you.",
  },
  {
    icon: FaBug,
    title: "Thorough Testing",
    desc: "We eliminate bugs through automated + manual testing before you ever go live.",
  },
  {
    icon: FaUsers,
    title: "User-Centric Design",
    desc: "UI/UX that’s not just pretty — it converts, retains, and delights users.",
  },
];

const WhyCardApp = () => {
  return (
    <section
      className="sticky lg:top-0  w-full min-h-screen bg-cover bg-center flex items-center px-4 sm:px-6 lg:px-[64px] py-16 overflow-x-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-black via-transparent to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col lg:flex-row w-full items-center relative z-20 gap-10 max-w-[1940px] m-auto">
        <div className="w-full lg:w-[40%] text-white flex flex-col justify-center pr-0 lg:pr-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Why Choose <br /> Shovig for Your App?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-4">
            We’re not just app developers — we’re product builders. We bring your vision to life with the right tech and strategy.
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 font-medium">
            Let’s Build Something Powerful Together.
          </p>
        </div>

        <div className="w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-2xl text-white bg-white/10 backdrop-blur-md border border-white/20 shadow-md"
            >
              <div className="mb-3 text-[#00a34d] text-xl sm:text-2xl">
                <card.icon />
              </div>
              <h4 className="text-xl sm:text-2xl font-bold mb-2">
                {card.title}
              </h4>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCardApp;
