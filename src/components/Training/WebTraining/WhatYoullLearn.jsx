import React from "react";
import { FaLaptopCode, FaServer, FaDatabase, FaRocket } from "react-icons/fa";

const skills = [
  {
    icon: FaLaptopCode,
    title: " Front-End Development",
    description:
      "You’ll begin your journey by learning how to create stunning, user-friendly interfaces using HTML5, CSS3, Bootstrap, Tailwind CSS, JavaScript, and React.js. These tools allow you to design websites that are not only beautiful but also highly functional across devices.",
  },
  {
    icon: FaServer,
    title: "Back-End Development",
    description:
      "Once you're comfortable with front-end, you’ll dive into building the engine behind the websites using Node.js, Python, and PHP. You’ll learn how to manage APIs, handle routing, and connect your application to a database.",
  },
  {
    icon: FaDatabase,
    title: " Database Management",
    description:
      "Managing data efficiently is key in web applications. You'll gain hands-on experience using MySQL, learning how to store, retrieve, and manage user and business data with efficiency and security.",
  },
  {
    icon: FaRocket,
    title: " Project Deployment & Git",
    description:
      "What good is a website if you can't show it to the world? You’ll learn how to host your applications, manage version control using Git, and collaborate with teams through GitHub, just like industry professionals do.",
  },
];

const WhatYoullLearn = () => {
  return (
    <section className="px-[0px] md:px-[32px] lg:px-[64px] relative py-24 bg-gray-100">
      <div className="text-center max-w-[1440px] mx-auto" >
        <h2 className="text-3xl md:text-6xl font-bold text-gray-700 mb-6">
          What You'll Learn
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl px-5 mx-auto mb-16">
          Our comprehensive curriculum ensures that you become proficient in every layer of web development—right from user interfaces to server-side operations and database management.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {skills.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-2xl overflow-hidden group transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <div className="w-14 h-14 bg-[#00a34d] rounded-full transition-transform duration-1000 ease-in-out group-hover:scale-[30] origin-center mt-8 ml-8" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00a34d] relative z-20 shrink-0">
                      <Icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#00a34d] group-hover:text-white transition-colors duration-500 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-[1.9] text-[16px] group-hover:text-white transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;
