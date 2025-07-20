import {
  FaBrain,
  FaRobot,
  FaSyncAlt,
  FaChartLine,
  FaLock,
  FaUsersCog,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBrain />,
    title: "AI-Powered Precision",
    desc: "We deliver intelligent solutions that adapt to your business in real time.",
  },
  {
    icon: <FaRobot />,
    title: "Custom AI Integration",
    desc: "Tailored models to fit your industry, workflow, and data stack.",
  },
  {
    icon: <FaSyncAlt />,
    title: "Automation Efficiency",
    desc: "Cut costs, boost speed — automate tasks intelligently.",
  },
  {
    icon: <FaChartLine />,
    title: "Predictive Analytics",
    desc: "Make smarter decisions with future-focused data insights.",
  },
  {
    icon: <FaLock />,
    title: "Data Security First",
    desc: "Encryption, compliance, and security built from day one.",
  },
  {
    icon: <FaUsersCog />,
    title: "Expert Support",
    desc: "From planning to scaling — we're with you at every stage.",
  },
];

const AiWhyShovig = () => {
  return (
    <section className="relative w-full py-16 px-4 md:px-10 lg:px-[64px] bg-white text-gray-800 overflow-x-hidden ">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
        Why Choose <span className="text-[#00a34d]">Shovig</span> for AI Software Development?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-[1940px] m-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-[#00a34d]"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#00a34d] text-white text-xl flex items-center justify-center animated-blob rounded-full shadow-inner">
                {item.icon}
              </div>
              <h5 className="text-lg font-semibold text-gray-800">{item.title}</h5>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiWhyShovig;
