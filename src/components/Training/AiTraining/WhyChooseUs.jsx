import React from "react";
import sideImg from "../../../assets/Training/2.jpg";

const WhyChooseUs = () => {
  return (
    <section className="sticky lg:top-0 bg-white py-16 sm:py-20 md:py-24 px-5 sm:px-8 md:px-[32px] lg:px-[64px]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="w-full md:w-1/2">
          <img
            src={sideImg}
            alt="Why Choose Us"
            className="w-full h-auto rounded-2xl shadow-xl"
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00a34d]">
            Why Choose Shovig Business Solutions?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            There are many digital marketing courses available, but what makes Shovig stand out is our learner-first, industry-driven approach. Here’s why our students love us:
          </p>
          <ul className="text-gray-700 text-base sm:text-[15.5px] space-y-4 list-disc pl-6">
            <li>
              <strong>Mentorship-Driven Learning:</strong> Get guidance from trainers with real-world experience, not just classroom theory.
            </li>
            <li>
              <strong>Beginner-Friendly Approach:</strong> We explain everything from scratch—no jargon, no pressure.
            </li>
            <li>
              <strong>Small Batches & Personal Attention:</strong> Unlike crowded webinars, our classes ensure every learner gets noticed and supported.
            </li>
            <li>
              <strong>Practical Over Theory:</strong> Our curriculum is packed with activities, assignments, and real campaigns.
            </li>
            <li>
              <strong>Community & Continued Support:</strong> Even after course completion, you’ll have access to our learning community for networking, freelancing tips, and upskilling.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;