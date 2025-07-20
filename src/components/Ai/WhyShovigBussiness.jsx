import whyImg from "../../assets/services/why.jpg";

const WhyShovigSection = () => {
  return (
    <section className=" sticky lg:top-0 w-full py-20 px-4 md:px-10 lg:px-[64px] bg-white text-gray-800 overflow-x-hidden">
      <div className="max-w-[1940px] m-auto  mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="w-full" data-aos="fade-right">
          <img
            src={whyImg}
            alt="Why Shovig"
            className="rounded-2xl shadow-xl w-full max-h-[500px] object-cover"
          />
        </div>

        <div className="space-y-6" data-aos="fade-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Why{" "}
            <span className="text-[#00a34d]">Shovig Business Solutions?</span>
          </h2>

          <p className="text-base text-gray-600 leading-relaxed">
            Partnering with Shovig means collaborating with a trusted leader in{" "}
            <span className="text-[#00a34d] font-medium">
              AI software development
            </span>
            . We help you streamline operations, improve customer experiences,
            and drive measurable growth through intelligent automation and
            strategic innovation.
          </p>

          <div
            className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl p-6 shadow-lg transition-all duration-300"
            data-aos="zoom-in"
          >
            <h4 className="text-xl font-bold mb-2 text-gray-900">
              Let’s Innovate Together.
            </h4>
            <p className="text-gray-600 mb-3">
              Contact us today to discover how we can help you harness the power
              of AI and elevate your business to new heights.
            </p>
            <a
              href="/contact"
              className="inline-block mt-2 px-6 py-2 rounded-full bg-[#00a34d] text-white font-medium hover:bg-[#007f3e] transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShovigSection;
