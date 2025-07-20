import React, { useEffect, useRef, useState } from "react";

import { FaBullhorn, FaLightbulb, FaCode, FaChartLine } from "react-icons/fa";

const services = [
  { title: "Marketing", percent: 100, color: "bg-[#00a34d]" },
  { title: "Strategy", percent: 80, color: "bg-[#f59e0b]" },
  { title: "Development", percent: 85, color: "bg-[#3b82f6]" },
  { title: "Data Analysis", percent: 90, color: "bg-[#ef4444]" },
];

const cards = [
  {
    icon: <FaBullhorn size={28} className="text-[#00a34d]" />,
    title: "Marketing",
    desc: "Boost your brand reach with modern, multi-channel marketing strategies.",
  },
  {
    icon: <FaLightbulb size={28} className="text-[#f59e0b]" />,
    title: "Strategy",
    desc: "Plan and execute clear strategies aligned to your business goals.",
  },
  {
    icon: <FaCode size={28} className="text-[#3b82f6]" />,
    title: "Development",
    desc: "Robust and scalable web, mobile, and software development services.",
  },
  {
    icon: <FaChartLine size={28} className="text-[#ef4444]" />,
    title: "Data Analysis",
    desc: "Turn raw data into meaningful insights that drive better decisions.",
  },
];

const ServiceWeOfferSection = () => {
  const [progress, setProgress] = useState(services.map(() => 0));
  const barRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setProgress(services.map((s) => s.percent));
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    if (barRef.current) observer.observe(barRef.current);

    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [hasAnimated]);

  return (
    <section className="relative px-4 max-w-[1940px] m-auto sm:px-10 md:px-16 lg:px-[64px] py-10 bg-white">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
            The full service we are offering is specifically designed to meet
            your business needs and projects.
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our full-stack team offers a blend of creativity, technical
            expertise, and strategic thinking. Whether it’s launching a product,
            growing your brand, or analyzing data—we provide tailored solutions
            that deliver results with precision and agility. Every service is
            tuned to business goals, and optimized for performance, experience,
            and scalability.
          </p>
        </div>

        {/* Right - Progress Bars */}
        <div ref={barRef} className="lg:w-1/2 w-full flex flex-col gap-6">
          {services.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-800">
                  {item.title}
                </span>
                <span className="text-sm font-semibold text-gray-600">
                  {progress[index]}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className={`${item.color} h-3 rounded-full transition-all duration-[1200ms]`}
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 bg-white flex flex-col items-center text-center hover:scale-105"
          >
            <div className="mb-4">{card.icon}</div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h4>
            <p className="text-sm text-gray-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceWeOfferSection;
