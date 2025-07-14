import React from "react";
import seo from "../../assets/services/seo.jpg";
import marketing from "../../assets/services/marketing.jpg";
import icon5 from "../../assets/services/icon5.png";

const tickPoints = [
  "Business Goal Mapping",
  "Audience Micro-Targeting",
  "High-Impact Creatives",
  "Conversion Funnels & Retargeting",
];

const ExploreSection = () => {
  return (
    <section className="sticky lg:-top-20 bg-white max-w-[1440px] mx-auto py-16 px-4 md:px-10 lg:px-[64px] space-y-16 overflow-x-hidden">
      {/* Top Row */}
      <div className="flex flex-wrap items-center gap-8">
        <img
          src={seo}
          alt="Explore"
          className="w-full max-w-[390px] h-[280px] object-cover rounded-xl"
          data-aos="fade-left"
          data-aos-duration="1000"
        />
        <div
          className="flex-1 space-y-3"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h6 className="text-sm text-gray-500 font-medium uppercase">
            Performance-Driven Campaigns
          </h6>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
            Strategy That Goes <span className="text-[#00a34d]">Beyond Boosting</span>
          </h2>
          <p className="text-[15px] text-gray-700 leading-relaxed">
            At Shovig, we don’t “set and forget.” We design digital journeys that move people —
            from seeing your ad to becoming your customer. Our ad campaigns are built to
            perform, scale, and win — powered by smart targeting, creative storytelling,
            and conversion-first thinking.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap gap-8 justify-between">
        {/* Left Column */}
        <div
          className="flex-1 min-w-[280px] space-y-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4 className="text-xl font-semibold text-gray-900">
            Optimize. Scale. Win.
          </h4>
          <p className="text-[15px] text-gray-600 leading-relaxed">
            We continuously monitor, A/B test, adjust, and scale what works — while dropping what doesn’t. Our team optimizes for lower CPC, better CTR, and maximum ROAS.
            With Shovig, every rupee is tracked, measured, and turned into results.
          </p>
          <p className="text-sm text-gray-700">
            <strong>Why businesses trust us:</strong><br />
            • Full-funnel campaigns<br />
            • Creative + analytical blend<br />
            • Data-led decisions<br />
            • Transparent reporting
          </p>
        </div>

        {/* Center Highlight Card */}
        <div className="flex-1 min-w-[280px] bg-[#f5f5f5] rounded-2xl p-8 transition-all duration-500 hover:bg-[#00a650] hover:text-white">
          <blockquote className="italic text-lg mb-6">
            “We don’t just run ads — we build conversion machines.”
          </blockquote>
          <ul className="space-y-4">
            {tickPoints.map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <img src={icon5} alt="tick" className="w-5 h-5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div
          className="flex-1 min-w-[280px]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="w-full h-full rounded-xl overflow-hidden">
            <img
              src={marketing}
              alt="Digital Marketing Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
