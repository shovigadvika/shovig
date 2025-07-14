import React from "react";
import bgImg from "../../../assets/Training/7.jpg";
import {
  FaChalkboardTeacher,
  FaTools,
  FaCertificate,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaTools className="text-2xl text-white" />,
    title: "Hands-On Projects",
    desc: "Run real ad campaigns, optimize websites, create content calendars, and build social strategies. Graduate with a portfolio that showcases your work.",
  },
  {
    icon: <FaChalkboardTeacher className="text-2xl text-white" />,
    title: "Hybrid or Online Learning",
    desc: "Attend live sessions in a hybrid model or opt for fully online classes—whichever suits your schedule best.",
  },
  {
    icon: <FaCertificate className="text-2xl text-white" />,
    title: "Industry-Recognized Certification",
    desc: "Receive a certification from Shovig Business Solutions upon course completion, adding credibility to your resume and LinkedIn profile.",
  },
  {
    icon: <FaBriefcase className="text-2xl text-white" />,
    title: "Internship & Live Campaigns",
    desc: "Work on live digital marketing campaigns for real clients and internal projects. Get a taste of the actual work environment.",
  },
  {
    icon: <FaUserTie className="text-2xl text-white" />,
    title: "Placement Assistance & Career Support",
    desc: "We don’t stop at training. Our placement support includes resume building, interview coaching, LinkedIn optimization, and job referrals—helping you land the right role faster.",
  },
];

const ProgramHighlights = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-24 px-5 md:px-8 lg:px-[64px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center animate-fade-in-up">
          Program Highlights
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center mb-16 text-gray-200 leading-relaxed animate-fade-in-up delay-200">
          We believe that learning should be practical, flexible, and impactful.
          That’s why our digital marketing course includes:
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {highlights.map((item, i) => {
            const isLast = i === highlights.length - 1;

            return (
              <div
                key={i}
                className={`${
                  isLast ? "md:col-span-2" : ""
                } bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:scale-[1.02] transition duration-300 group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00a34d] group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-[15.5px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
