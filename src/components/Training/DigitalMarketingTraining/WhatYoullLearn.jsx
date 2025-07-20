import React from "react";
import {
  FaSearchDollar,
  FaBullhorn,
  FaMailBulk,
  FaPenFancy,
  FaChartLine,
  FaShoppingCart,
  FaChartBar,
} from "react-icons/fa";
import img1 from "../../../assets/Training/12.png";
import img2 from "../../../assets/Training/13.jpg";
import img3 from "../../../assets/Training/14.jpg";
import img4 from "../../../assets/Training/15.jpg";
import img5 from "../../../assets/Training/16.jpg";
import img6 from "../../../assets/Training/6.jpg";
import img7 from "../../../assets/Training/17.jpg";

const learnItems = [
  {
    icon: <FaSearchDollar className="text-green-700 text-5xl" />, image: img1,
    title: "Search Engine Optimization (SEO)",
    desc: "Learn to rank websites on search engines with keyword research, on-page SEO, link building, and more."
  },
  {
    icon: <FaBullhorn className="text-indigo-600 text-5xl" />, image: img2,
    title: "Paid Advertising",
    desc: "Master Google Ads and Meta Ads. Create ROI-driven campaigns, manage budgets, and analyze performance."
  },
  {
    icon: <FaChartLine className="text-pink-600 text-5xl" />, image: img3,
    title: "Social Media Marketing (SMM)",
    desc: "Grow business accounts on Instagram, Facebook, LinkedIn & more. Learn targeting, content strategy, and analytics."
  },
  {
    icon: <FaMailBulk className="text-yellow-600 text-5xl" />, image: img4,
    title: "Email Marketing & Automation",
    desc: "Build email lists, craft persuasive campaigns, and set up tools like Mailchimp to convert leads."
  },
  {
    icon: <FaPenFancy className="text-rose-600 text-5xl" />, image: img5,
    title: "Content Writing & Strategy",
    desc: "Write high-converting copy and blog posts. Master storytelling, branding, and user engagement."
  },
  {
    icon: <FaChartBar className="text-blue-600 text-5xl" />, image: img6,
    title: "Analytics & Reporting",
    desc: "Use Google Analytics, Meta Suite, and UTM tracking to make data-driven marketing decisions."
  },
  {
    icon: <FaShoppingCart className="text-emerald-600 text-5xl" />, image: img7,
    title: "E-commerce Marketing & Funnels",
    desc: "Learn product marketing, landing pages, cart recovery, and funnels that convert traffic into sales."
  }
];

const WhatYoullLearn = () => {
  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 bg-white relative overflow-hidden">
      {/* Blob Animation Background */}
      <div className="absolute w-[400px] h-[400px] bg-green-100 rounded-full top-[-100px] left-[-100px] blur-3xl opacity-40 animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-full bottom-[-80px] right-[-80px] blur-2xl opacity-30 animate-ping" />

      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What You'll Learn
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Our program covers the full spectrum of digital marketing—giving you a 360° understanding of how online growth works.
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-[1940px] mx-auto  mx-auto">
        {learnItems.map((item, i) => (
          <div
            key={i}
            data-aos="fade-up"
            data-aos-duration="700"
            className={`flex flex-col lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center gap-6 md:gap-10 relative`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full sm:w-[300px] h-[200px] sm:h-[250px] object-cover rounded-xl"
            />
            <div className="max-w-xl flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div className="shrink-0">
              {item.icon}
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay={i * 100 + 200}
              className="absolute bottom-[-30px] left-0 w-full h-[1px] origin-left bg-gradient-to-r from-gray-300 to-transparent"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatYoullLearn;
