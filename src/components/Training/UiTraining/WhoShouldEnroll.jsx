import React from "react";
import { Link } from "react-router-dom";

const enrollData = [
  {
    title: "Students & Fresh Graduates",
    shortTitle: "Aspiring Designers",
    desc: "Gain a competitive edge by mastering design skills that employers want."
  },
  {
    title: "Career Changers",
    shortTitle: "New Career Path",
    desc: "Transition smoothly into UI/UX or Graphic Design roles with practical, industry-ready training."
  },
  {
    title: "Working Professionals",
    shortTitle: "Upskill & Grow",
    desc: "Enhance your current role by adding design expertise or pivot your career path."
  },
  {
    title: "Homemakers",
    shortTitle: "Flexible Learning",
    desc: "Acquire marketable skills with flexible learning to re-enter the workforce confidently."
  },
  {
    title: "Existing Designers",
    shortTitle: "Expand Horizons",
    desc: "Expand your skill set from graphic design to UI/UX or vice versa, becoming a versatile creative professional."
  }
];

const WhoShouldEnroll = () => {
  return (
    <section className="relative bg-white pb-20 px-4 sm:px-5 md:px-8 lg:px-[64px]">
      <div className="max-w-[1940px] mx-auto flex flex-col lg:flex-row items-start gap-16">
        <div className="w-full d-flex lg:w-1/2 my-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
            Who Should Enroll
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This program welcomes a wide range of learners, including:
          </p>
          <button className="mt-6 px-6 py-3 bg-[#00a34d] text-white font-medium rounded-xl shadow-md hover:bg-[#008c41] transition">
            <Link to={"/contact"}>Contact Us</Link>
          </button>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {enrollData.map((item, index) => (
            <div
              key={index}
              className={`space-y-3 group ${index === 2 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-base font-semibold text-[#00a34d]">
                {item.shortTitle}
              </h3>

              <div className="relative h-[2px] bg-gray-300 w-full overflow-hidden">
                <div className="absolute top-0 left-0 h-[2px] bg-[#00a34d] z-10 w-[30px] group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>

              <h4 className="text-[22px] font-semibold text-gray-800 pt-1">
                {item.title}
              </h4>
              <p className="text-gray-600 text-[15px] leading-relaxed">
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
