import {
  FaChartBar,
  FaLanguage,
  FaEye,
  FaMicrochip,
  FaProjectDiagram,
  FaBrain,
  FaRobot,
} from "react-icons/fa";
import ai1 from "../../assets/services/ai1.jpg"
import ai2 from "../../assets/services/ai2.jpg"
import ai3 from "../../assets/services/ai3.jpg"
import ai4 from "../../assets/services/ai4.jpg"
import ai5 from "../../assets/services/ai5.jpg"
import ai6 from "../../assets/services/ai6.jpg"
import ai7 from "../../assets/services/ai7.webp"
const services = [
  {
    icon: <FaRobot />,
    title: "AI-Powered Chatbots",
    strong: "24/7 Intelligent Support",
    desc: "Bots that handle queries, guide users, and provide personalized assistance using NLU.",
    img: ai1,
  },
  {
    icon: <FaChartBar />,
    title: "Predictive Analytics",
    strong: "Anticipate Trends",
    desc: "Make proactive decisions by forecasting user behavior and market shifts.",
    img: ai2,
  },
  {
    icon: <FaLanguage />,
    title: "Natural Language Processing (NLP)",
    strong: "Understand & Automate Text",
    desc: "Analyze sentiment, summarize data, and automate communication workflows.",
    img: ai7,
  },
  {
    icon: <FaEye />,
    title: "Computer Vision",
    strong: "Extract Insight from Images",
    desc: "From object detection to face recognition, gain visual intelligence with AI.",
    img:ai6,
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning Models",
    strong: "Smart Adaptive Systems",
    desc: "Train custom models for fraud detection, recommendations, and more.",
    img:ai5,
  },
  {
    icon: <FaMicrochip />,
    title: "AI for IoT",
    strong: "Smarter Devices in Real-Time",
    desc: "Enable autonomous decisions and analytics at the edge with AI + IoT.",
    img:ai4,
  },
  {
    icon: <FaProjectDiagram />,
    title: "Business Intelligence & Automation",
    strong: "Real-Time Insights, Less Manual Work",
    desc: "Automate reporting, analyze patterns, and accelerate your decision-making process.",
    img:ai3,
  },
];
const AiTimeline = () => {
  return (
    <section className="w-full relative py-12 px-4 md:px-10 lg:px-[64px] bg-white text-gray-800 overflow-x-hidden">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
        Our <span className="text-[#00a34d]">AI Software Development</span>{" "}
        Services
      </h2>

      <div className="relative max-w-[1940px] m-auto mx-auto">
        <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gray-200" />

        {services.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={i}
              className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-10`}
              data-aos={isEven ? "fade-left" : "fade-right"}
              data-aos-delay={i * 150}
            >
              <div
                className={`relative flex justify-center ${
                  isEven ? "lg:order-2" : ""
                }`}
              >
                <div
                  className={`hidden lg:block absolute top-1/2 w-[180px] h-[2px] bg-[#00a34d] ${
                    isEven ? "right-full -mr-[168px]" : "left-full -ml-[168px]"
                  }`}
                />

                <div className="relative p-[6px] rounded-xl border-2 border-[#00a34d] bg-white shadow-md">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="rounded-md max-h-[260px] object-cover"
                  />
                </div>
              </div>

              <div
                className={`p-5 rounded-xl bg-gray-50 shadow-md hover:shadow-xl border border-transparent hover:border-[#00a34d] transition-all duration-300 ${
                  isEven ? "lg:pr-10" : "lg:pl-10"
                }`}
              >
                <div className="w-12 h-12 bg-[#00a34d] text-white flex items-center justify-center rounded-full text-lg mb-4 animate-[morph_12s_ease-in-out_infinite]">
                  {service.icon}
                </div>
                <h5 className="text-xl font-semibold mb-1">{service.title}</h5>
                <p className="font-medium text-[#00a34d] mb-2">
                  {service.strong}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AiTimeline;
