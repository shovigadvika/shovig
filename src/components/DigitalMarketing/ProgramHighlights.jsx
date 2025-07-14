import {
  FaChartLine,
  FaSearchDollar,
  FaClipboardCheck,
  FaEye,
  FaSignal,
} from "react-icons/fa";
import programImg from "../../assets/services/program.jpg";
import programImg2 from "../../assets/services/program2.jpg";

const highlightsTop = [
  {
    icon: <FaChartLine size={26} />,
    title: "Customized Strategy",
    desc: "No cookie-cutter plans. Each SEO campaign is tailored to your business goals, audience, and niche.",
  },
  {
    icon: <FaClipboardCheck size={26} />,
    title: "Transparent Execution",
    desc: "Get full visibility with detailed monthly reports, live dashboards, and clear communication.",
  },
  {
    icon: <FaSearchDollar size={26} />,
    title: "ROI-Focused Optimization",
    desc: "We track every click, call, and conversion — aiming for more leads, better sales, and real revenue growth.",
  },
];

const highlightsBottom = [
  {
    icon: <FaEye size={26} />,
    title: "Proven SEO Growth",
    desc: "From startups to SMEs, we’ve helped brands dominate their markets and grow online authority.",
  },
  {
    icon: <FaSignal size={26} />,
    title: "Inbound Opportunity",
    desc: "Let customers discover you — not the other way around. Be the first result they see, when they need it most.",
  },
];

const HighlightCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-2xl p-5 shadow-md group transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#00a650] hover:scale-[1.02]">
    <div className="flex items-start gap-4">
      <div className="text-[#00a650] group-hover:animate-pulse mt-1">{icon}</div>
      <div>
        <h5 className="text-[#00a650] font-semibold mb-1">{title}</h5>
        <p className="text-gray-700 text-sm">{desc}</p>
      </div>
    </div>
  </div>
);

const ProgramHighlights = () => {
  return (
    <section className="w-full relative bg-white py-16 px-4 md:px-10 lg:px-[64px] overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-2/3 space-y-6">
            <h6 className="text-sm font-medium text-gray-500 uppercase">
              Why Choose Shovig’s SEO?
            </h6>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Data-Driven SEO That Brings Real Growth
            </h2>
            <div className="flex flex-col gap-4">
              {highlightsTop.map((item, i) => (
                <HighlightCard key={i} {...item} />
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 text-center">
            <img
              src={programImg}
              alt="SEO Strategy"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 text-center">
            <img
              src={programImg2}
              alt="SEO Execution"
              className="rounded-xl shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3 flex flex-col gap-4">
            {highlightsBottom.map((item, i) => (
              <HighlightCard key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;
