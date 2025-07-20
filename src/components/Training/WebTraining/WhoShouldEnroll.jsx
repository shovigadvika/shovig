import React from "react";
import { Link } from "react-router-dom";

const enrollData = [
  {
    title: "Students & Job Seekers",
    shortTitle: "Aspiring Developers",
    desc: "If you're looking to break into the tech industry, this course provides the perfect launchpad.",
  },
  {
    title: "Career Switchers",
    shortTitle: "New Path",
    desc: "Want to transition into IT from a different domain? This training provides a structured, beginner-friendly pathway.",
  },
  {
    title: "Homemakers & Women Returning to Work",
    shortTitle: "Flexible Learning",
    desc: "With flexible online or hybrid options, you can upskill from the comfort of your home.",
  },
  {
    title: "Web Designers",
    shortTitle: "Upskill Designers",
    desc: "If you already create websites and want to add back-end development to your skill set, this course will help you become a true full-stack professional.",
  },
];

const WhoShouldEnroll = () => {
  return (
    <section className="relative bg-white py-24 px-5 md:px-8 lg:px-[64px]">
      <div className="max-w-[1940px] mx-auto flex flex-col lg:flex-row items-start gap-16">
        <div className="w-full d-flex lg:w-1/2 my-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
            Who Should Enroll
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            One of the best things about our Full Stack Web Development course
            is that you don’t need a technical background to start.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This program is tailor-made for a wide range of learners looking to
            launch or switch into tech.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#00a34d] text-white font-medium rounded-xl shadow-md hover:bg-[#008c41] transition">
            <Link to={"/contact"}>Contact Us</Link>
          </button>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {enrollData.map((item, index) => (
            <div key={index} className="space-y-3 group">
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
