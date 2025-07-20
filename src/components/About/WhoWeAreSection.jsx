import React from "react";
import { FaUsers, FaTools, FaStar } from "react-icons/fa";

const cards = [
  {
    icon: <FaUsers className="text-white text-2xl z-10 relative" />,
    title: "Who We Are",
    desc: "What happens when passion meets purpose? You get Shovig Business Solution—founded by woman businesswoman Shobiga to help businesses grow smarter. We Intertwine and tech to turn bold ideas into real results. From branding to AI, we simplify the complex so your business can thrive.marvel what we could create together? Let’s turn your vision into high-powered.",
  },
  {
    icon: <FaTools className="text-white text-2xl z-10 relative" />,
    title: "What We Do",
    desc: "Ready to raise your business with smart, robust solutions? At Shovig Business Solution, we deliver high-quality web design, modern UI/UX design, and custom web functionalities customize to your goals. Our services also include BigCommerce development, ingenious AI solutions, logo creation, explainer videos, digital marketing, lead generation, and complete branding strategies.We blend creativity with strategy—to build digital experiences that drive real results.",
  },
  {
    icon: <FaStar className="text-white text-2xl z-10 relative" />,
    title: "Our Success Stories",
    desc: "We take pride in delivering Inspirational solutions across industries. From building the Coimbatore Corporation’s Waste Management System with vehicle tracking and fuel creativity control, to powering RT Mart’s BigCommerce grocery platform and creating a tranquil digital space for RS Store’s pooja crucial. We’ve also shaped a professional online presence for Arch One Constructions.",
  },
];

const WhoWeAreSection = () => {
  return (
    <section className="w-full relative max-w-[1940px] m-auto bg-white py-16 px-5 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#f4f4f9] rounded-xl p-6 flex flex-col items-center text-center shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative w-[80px] h-[80px] mb-5">
              <div className="absolute inset-0 bg-[#00a34d] rounded-full animate-blob opacity-90 z-0"></div>
              <div className="flex items-center justify-center w-full h-full">
                {card.icon}
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#1b1b1b] mb-3">
              {card.title}
            </h3>
            <p className="text-sm text-[#666] leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeAreSection;
