import React from "react";
import sideImg from "../../../assets/Training/2.jpg";

const WhyChooseUs = () => {
  return (
    <section className="sticky md:top-0 bg-white py-24 px-5 md:px-8 lg:px-[64px]">
      <div className="max-w-[1940px] mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <img
            src={sideImg}
            alt="Why Choose Us"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00a34d]">
            Why Choose Shovig Business Solutions?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            There are hundreds of training providers out there — but Shovig isn’t just another one. We take a personal, inclusive, and career-oriented approach to teaching. Here’s what sets us apart:
          </p>
          <ul className="text-gray-700 text-base space-y-4 list-disc pl-6">
            <li>
              <strong>Individual Attention:</strong> We maintain small batch sizes so you get one-on-one mentorship and feedback.
            </li>
            <li>
              <strong>Industry-Relevant Skills:</strong> We regularly update our curriculum to match what employers are actually looking for.
            </li>
            <li>
              <strong>Inclusive Learning Environment:</strong> Whether you’re from a non-technical background, re-entering the workforce, or a fresh graduate — our trainers make sure you feel supported every step of the way.
            </li>
            <li>
              <strong>Community Support:</strong> Even after the course ends, you’ll be part of our alumni and mentor community for guidance, networking, and continued learning.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
