import { FaComments, FaCogs, FaBug, FaRocket } from "react-icons/fa";

const steps = [
  {
    title: "Consultation & Roadmap",
    desc: "We understand your business goals, define a strategy, and create a tailored AI roadmap.",
    icon: <FaComments />,
  },
  {
    title: "Model Design & Development",
    desc: "We build AI models aligned with your objectives using the latest technologies and frameworks.",
    icon: <FaCogs />,
  },
  {
    title: "Integration & Testing",
    desc: "Our team ensures your AI system is scalable, compatible, and rigorously tested for performance.",
    icon: <FaBug />,
  },
  {
    title: "Deployment & Maintenance",
    desc: "We deploy robust solutions and offer ongoing support, updates, and improvements.",
    icon: <FaRocket />,
  },
];

const DevelopmentProcess = () => {
  return (
    <section className=" relative w-full bg-[#f8f9fa] py-16 px-4 md:px-10 lg:px-[64px] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-[#00a34d]">Development Process</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Shovig, we follow a systematic, agile approach to AI software
            development to ensure success at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center group"
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-[#00a34d] text-white text-2xl rounded-full flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 animate-[morph-bounce_4s_ease-in-out_infinite]">
                {step.icon}
              </div>
              <div className="text-[#00a34d] font-bold text-lg mb-1">
                {i + 1 < 10 ? `0${i + 1}` : i + 1}
              </div>
              <h5 className="text-lg font-semibold mb-2 text-gray-800">
                {step.title}
              </h5>
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
