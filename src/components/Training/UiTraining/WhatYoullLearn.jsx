import React from "react";
import {
  FaPaintBrush,
  FaUserFriends,
  FaObjectGroup,
  FaLayerGroup,
  FaMobileAlt,
  FaFolderOpen,
} from "react-icons/fa";
import img1 from "../../../assets/Training/19.jpg";
import img2 from "../../../assets/Training/20.jpg";
import img3 from "../../../assets/Training/21.jpg";
import img4 from "../../../assets/Training/22.jpg";
import img5 from "../../../assets/Training/23.jpg";
import img6 from "../../../assets/Training/24.jpg";

const learnItems = [
  {
    icon: <FaPaintBrush className="text-green-700 text-5xl" />, image: img1,
    title: "UI Design (User Interface)",
    desc: "• Learn how to design engaging, user-friendly interfaces for websites and apps.\n• Understand layout design, color theory, typography, and visual hierarchy.\n• Use industry-standard tools like Figma, Adobe XD, and Sketch to create wireframes, mockups, and prototypes."
  },
  {
    icon: <FaUserFriends className="text-indigo-600 text-5xl" />, image: img2,
    title: "UX Design (User Experience)",
    desc: "• Dive deep into understanding user behavior and psychology.\n• Conduct user research, create personas, and develop user journeys.\n• Master usability testing, feedback analysis, and iterative design to enhance product usability."
  },
  {
    icon: <FaObjectGroup className="text-pink-600 text-5xl" />, image: img3,
    title: "Graphic Design",
    desc: "• Explore the fundamentals of graphic design including composition, color schemes, branding, and logo creation.\n• Get hands-on experience with Adobe Creative Suite (Photoshop, Illustrator, InDesign).\n• Learn to create marketing materials like posters, flyers, social media graphics, and more."
  },
  {
    icon: <FaLayerGroup className="text-yellow-600 text-5xl" />, image: img4,
    title: "Design Thinking & Process",
    desc: "• Grasp the design thinking methodology to solve problems creatively and empathetically.\n• Work through real-world case studies to apply your skills in designing impactful solutions."
  },
  {
    icon: <FaMobileAlt className="text-rose-600 text-5xl" />, image: img5,
    title: "Responsive & Mobile Design",
    desc: "• Learn how to design for various screen sizes and devices ensuring consistent and enjoyable experiences across platforms."
  },
  {
    icon: <FaFolderOpen className="text-blue-600 text-5xl" />, image: img6,
    title: "Portfolio Development",
    desc: "• Build a professional portfolio showcasing your best design projects that demonstrate your skills to employers and clients."
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
          What You Will Learn
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Our training covers everything from the foundational principles of design to hands-on tools and techniques used by professionals globally.
        </p>
      </div>

      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
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
              <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-line">
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
