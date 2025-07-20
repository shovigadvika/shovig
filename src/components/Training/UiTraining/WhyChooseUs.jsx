import React from "react";
import sideImg from "../../../assets/Training/18.jpg";

const WhyChooseUs = () => {
  return (
    <section className="bg-white relative py-20 px-6 md:px-12 lg:px-[64px]">
      <div className="max-w-[1940px] mx-auto flex flex-col md:flex-row items-center gap-12">
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
            At Shovig, we believe that design is a blend of creativity, empathy,
            and technology. Our curriculum balances these elements, providing you
            with the skills to create designs that are not just beautiful but
            also functional and user-centric.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Unlike other programs, we focus on building job-ready skills through
            practical projects, personalized mentorship, and real-world case
            studies. Our trainers come from top design agencies and bring
            invaluable industry insights that help you stand out in a
            competitive market.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Moreover, we understand the challenges of balancing learning with
            other responsibilities, which is why we offer flexible schedules and
            hybrid learning options so you can learn at your own pace without
            compromising quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
