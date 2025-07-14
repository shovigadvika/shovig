import React from "react";
import {
  FaPaintBrush,
  FaUserCircle,
  FaObjectGroup,
  FaRegImage,
  FaPencilRuler,
  FaIdCard,
  FaCubes,
  FaLaptopCode,
  FaUserAstronaut,
} from "react-icons/fa";

const roles = [
  { icon: <FaUserCircle />, title: "UI Designer" },
  { icon: <FaPaintBrush />, title: "UX Designer" },
  { icon: <FaRegImage />, title: "Visual Designer" },
  { icon: <FaPencilRuler />, title: "Graphic Designer" },
  { icon: <FaIdCard />, title: "Brand Identity Designer" },
  { icon: <FaCubes />, title: "Product Designer" },
  { icon: <FaLaptopCode />, title: "Web Designer" },
  { icon: <FaUserAstronaut />, title: "Freelance Designer" },
];

const CareerOpportunitiesSection = () => {
  return (
    <section className="relative lg:sticky top-0 bg-[#f8f9fa] py-20 px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden">
      <div className="absolute w-[300px] h-[300px] bg-[#00a34d]/10 rounded-full top-[-60px] left-[-80px] blur-3xl animate-floatY" />
      <div className="absolute w-[200px] h-[200px] bg-[#00a34d]/20 rounded-full bottom-[-60px] right-[-60px] blur-2xl animate-floatX" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-up">Career Opportunities</h2>
        <p className="text-lg text-gray-600 mb-12 animate-fade-up delay-150">
          UI/UX and Graphic Design skills open doors to exciting career paths, including:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 animate-slide-in-up">
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.05] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#00a34d] text-white text-xl rounded-full mb-4 shadow-sm">
                {role.icon}
              </div>
              <h4 className="text-sm font-medium text-gray-700 text-center">{role.title}</h4>
            </div>
          ))}
        </div>

        <p className="mt-12 text-base leading-relaxed text-gray-700 max-w-3xl mx-auto animate-fade-in-up delay-500">
          Organizations across sectors such as IT, startups, advertising, e-commerce, healthcare, and finance are continuously on the lookout for talented designers who can improve user engagement and brand appeal.
        </p>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;
