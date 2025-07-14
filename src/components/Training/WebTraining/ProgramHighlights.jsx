import React from "react";
import bgImg from "../../../assets/Training/8.jpg";
import {
  FaChalkboardTeacher,
  FaTools,
  FaCertificate,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaChalkboardTeacher className="text-2xl text-white" />,
    title: "Flexible Learning Modes",
    desc: "Whether you prefer hybrid classes (a mix of in-person and online) or fully online sessions, we’ve got you covered. Our schedules are designed to accommodate students, working professionals, and homemakers alike.",
  },
  {
    icon: <FaTools className="text-2xl text-white" />,
    title: "Hands-On Projects",
    desc: "Our approach is practical. You’ll work on real-world projects, like creating an e-commerce site or a portfolio website, so you graduate with a portfolio that employers will notice.",
  },
  {
    icon: <FaCertificate className="text-2xl text-white" />,
    title: "Certification",
    desc: "At the end of the course, you’ll receive a recognized certification that adds credibility to your resume and opens up job opportunities across the country—and even globally.",
  },
  {
    icon: <FaBriefcase className="text-2xl text-white" />,
    title: "Internship Opportunities",
    desc: "We believe in learning by doing. That’s why we offer internship programs with real clients and internal projects to give you that all-important first step into the industry.",
  },
  {
    icon: <FaUserTie className="text-2xl text-white" />,
    title: "Job Placement Support",
    desc: "Our dedicated placement team will help you with resume building, LinkedIn optimization, mock interviews, and job referrals to ensure you're interview-ready and job-market confident.",
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
          We don’t just teach — we guide, support, and mentor you all the way
          through your learning and job journey.
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
