import React from "react";
import { Link } from "react-router-dom";

const enrollData = [
  {
    title: "Students & Graduates",
    shortTitle: "Beginner Friendly",
    desc: "Learn job-ready AI skills and stand out in the job market—no prior experience needed.",
  },
  {
    title: "Working Professionals",
    shortTitle: "Upskill & Grow",
    desc: "Upgrade your skill set and pivot into high-paying AI roles across industries.",
  },
  {
    title: "Career Switchers",
    shortTitle: "No Tech? No Problem",
    desc: "Transition into tech with a future-proof skill set—even if you don’t have a programming background.",
  },
  {
    title: "Freelancers & Tech Entrepreneurs",
    shortTitle: "Innovate & Build",
    desc: "Build smart AI solutions, tools, and services for clients and startups alike.",
  },
  {
    title: "Business Owners",
    shortTitle: "AI for Business",
    desc: "Understand AI’s power and integrate it into your business operations to boost efficiency.",
  },
];

const WhoShouldEnroll = () => {
  return (
    <section className="relative bg-white pb-20 px-5 sm:px-8 md:px-[32px] lg:px-[64px] py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-16">
        <div className="w-full lg:w-1/2 my-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight">
            Who Should Enroll
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            One of the best things about AI is that it’s not just for coders or engineers. At Shovig, we’ve designed this program to be accessible to everyone.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#00a34d] text-white font-medium rounded-xl shadow-md hover:bg-[#008c41] transition">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {enrollData.map((item, index) => (
            <div
              key={index}
              className={`space-y-3 group ${index === 2 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-sm font-semibold text-[#00a34d]">
                {item.shortTitle}
              </h3>
              <div className="relative h-[2px] bg-gray-300 w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-[2px] bg-[#00a34d] z-10 w-[30px] group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>
              <h4 className="text-lg font-semibold text-gray-800 pt-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoShouldEnroll;
