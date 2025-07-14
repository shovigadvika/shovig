import React from "react";
import { Link } from "react-router-dom";

const enrollData = [
  {
    title: "Students & Fresh Graduates",
    shortTitle: "Aspiring Marketers",
    desc: "Step into one of the most in-demand job roles today with industry-ready skills."
  },
  {
    title: "Career Switchers",
    shortTitle: "New Direction",
    desc: "If you’re from a non-tech background or looking for a new career path, digital marketing offers massive scope with minimal entry barriers."
  },
  {
    title: "Homemakers",
    shortTitle: "Flexible Learning",
    desc: "Re-enter the workforce with flexible skills you can use from home—whether through a job, freelancing, or your own business."
  },
  {
    title: "Entrepreneurs & Small Business Owners",
    shortTitle: "Business Growth",
    desc: "Learn how to generate leads, build brand awareness, and drive sales without relying on external agencies."
  },
  {
    title: "Freelancers & Creatives",
    shortTitle: "Expand Your Skills",
    desc: "Add marketing to your skill set to land more clients and increase your value in the marketplace."
  }
];

const WhoShouldEnroll = () => {
  return (
    <section className="relative bg-white pb-20 px-5 md:px-8 lg:px-[64px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start gap-16">
        <div className="w-full d-flex lg:w-1/2 my-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-700 leading-tight">
            Who Should Enroll
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            One of the most exciting aspects of digital marketing is that anyone can learn it—regardless of age, background, or experience.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our course is designed for a wide variety of learners looking to build or expand their digital careers.
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
