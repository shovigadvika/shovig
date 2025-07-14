import React from "react";
import android from "../../assets/home/icons/android.png";
import apple from "../../assets/home/icons/apple.png";
import html5 from "../../assets/home/icons/html-5.png";
import css3 from "../../assets/home/icons/css-3.png";
import javascript from "../../assets/home/icons/js.png";
import reactjs from "../../assets/home/icons/react.png";
import wordpress from "../../assets/home/icons/wordpress.png";
import figma from "../../assets/home/icons/figma.png";
import java from "../../assets/home/icons/java.png";
import python from "../../assets/home/icons/python.png";
import linux from "../../assets/home/icons/linux.png";
import docker from "../../assets/home/icons/docker.png";
import gd from "../../assets/home/icons/gd.png";
import ui from "../../assets/home/icons/ui.png";
import ai from "../../assets/home/icons/ai.png";
import typescript from "../../assets/home/icons/typescript.png";
import nodejs from "../../assets/home/icons/nodejs.png";
import mongodb from "../../assets/home/icons/mongodb.png";

const tools = [
  { name: "Android", img: android },
  { name: "Apple", img: apple },
  { name: "CSS3", img: css3 },
  { name: "Figma", img: figma },
  { name: "HTML5", img: html5 },
  { name: "Java", img: java },
  { name: "JavaScript", img: javascript },
  { name: "Linux", img: linux },
  { name: "Python", img: python },
  { name: "React", img: reactjs },
  { name: "WordPress", img: wordpress },
  { name: "Docker", img: docker },
  { name: "Graphic Design", img: gd },
  { name: "UI / UX", img: ui },
  { name: "AI", img: ai },
  { name: "TypeScript", img: typescript },
{ name: "Node.js", img: nodejs },
{ name: "MongoDB", img: mongodb },
];

const ToolSection = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-[1440px] mx-auto text-center px-5 md:px-8 lg:px-24 xl:px-32 2xl:px-64">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d2d2d] mb-4">
          Seamless integration with <br /> all your essential tools
        </h2>
        <p className="text-[#555] text-sm sm:text-base md:text-lg mb-12">
          Connect and collaborate with the platforms your team already loves.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border border-gray-300 rounded-xl p-5 flex flex-col items-center hover:shadow-md hover:scale-[1.03] transition-all duration-300"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="w-10 h-10 object-contain mb-3"
              />
              <p className="text-sm text-[#333]">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToolSection;
