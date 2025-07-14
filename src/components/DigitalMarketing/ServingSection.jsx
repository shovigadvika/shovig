import React from "react";
import servingImg from "../../assets/services/service.jpg";

const ServingSection = () => {
  return (
    <section className="w-full relative bg-white py-16 px-4 md:px-10 lg:px-[64px] overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div
          className="w-full lg:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            src={servingImg}
            alt="SEO"
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>

        <div
          className="w-full lg:w-1/2 space-y-5"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h6 className="text-sm font-medium text-gray-500 uppercase">
            Search Engine Optimization (SEO)
          </h6>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Be Found. Be Chosen. <br /> Don’t Just Exist — Rank.
          </h2>

          <p className="text-base text-gray-700 leading-relaxed">
            What if your ideal customer is searching for your service but finds your competitor instead? That’s where{" "}
            <span className="text-[#00a34d] font-semibold">Shovig</span> steps in.
            SEO isn’t just rankings — it’s <span className="text-[#00a34d] font-semibold">visibility with purpose</span>.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            We don’t chase traffic for traffic’s sake. We attract{" "}
            <span className="text-[#00a34d] font-semibold">the right people, at the right time, with the right intent</span>.
            If your website lives on Page 3 of Google, it’s practically invisible.
          </p>

          <p className="text-base text-gray-700 leading-relaxed">
            Our SEO strategy makes your business <span className="text-[#00a34d] font-semibold">impossible to ignore</span>.
          </p>

          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 pl-2">
            <li>
              <span className="font-semibold text-gray-800">Keyword Targeting:</span> Strategic research and placement of high-intent keywords your audience is already searching.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Content Optimization:</span> Clear, relevant, SEO-friendly copy that converts.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Meta Tags & Descriptions:</span> Optimized to improve visibility and click-through rates.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Technical Audits:</span> We fix broken links, speed issues, and mobile responsiveness to meet Google's standards.
            </li>
            <li>
              <span className="font-semibold text-gray-800">Schema Markup & Mobile Optimization:</span> Stand out with rich results, especially on mobile.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServingSection;
