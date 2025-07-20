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
    title: "Beginner-Friendly & Modular",
    desc: "We start from zero and take you step by step—perfect for complete beginners and intermediate learners alike.",
  },
  {
    icon: <FaTools className="text-2xl text-white" />,
    title: "Hybrid or Online Learning",
    desc: "Attend classes online or in hybrid mode—learn at your own pace, without compromising on quality.",
  },
  {
    icon: <FaCertificate className="text-2xl text-white" />,
    title: "Certification",
    desc: "Earn a recognized AI Developer Certificate from Shovig Business Solutions—add it to your resume and LinkedIn to showcase your expertise.",
  },
  {
    icon: <FaChalkboardTeacher className="text-2xl text-white" />,
    title: "Mentorship & Live Projects",
    desc: "Get guided by experienced AI developers who help you navigate real-time problems, debug code, and think like an AI engineer.",
  },
  {
    icon: <FaUserTie className="text-2xl text-white" />,
    title: "Job Placement Assistance",
    desc: "We support your journey till the finish line with: • Resume and LinkedIn profile building • Mock technical interviews • Referrals and job connections in AI-related roles",
  },
  {
    icon: <FaBriefcase className="text-2xl text-white" />,
    title: "Internship Support",
    desc: "Get placed on internship projects that help you implement everything you’ve learned in a professional environment.",
  },
  
];

const ProgramHighlights = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-[32px] lg:px-[64px]"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-[1940px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 sm:mb-12 text-center animate-fade-in-up">
          Program Highlights
        </h2>
        <p className="text-base sm:text-lg max-w-3xl mx-auto text-center mb-12 sm:mb-16 text-gray-200 leading-relaxed animate-fade-in-up delay-200">
          Our AI program combines practical skills, expert guidance, and real-world exposure to prepare you for a successful tech career.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {highlights.map((item, i) => {
            const isLast = i === highlights.length - 1;

            return (
              <div
                key={i}
                className={` bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 hover:scale-[1.02] transition duration-300 group`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#00a34d] group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-200 text-[15.5px] leading-relaxed whitespace-pre-line">
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
