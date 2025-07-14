import { FaGlobe, FaUsers, FaChartLine, FaBuilding } from "react-icons/fa";

const stats = [
  {
    icon: <FaGlobe className="text-[16px] text-[#00a34d]" />,
    label: "Visitors",
    value: "5000+",
    desc: "Over 5000+ global visitors trust our services across 38 countries.",
  },
  {
    icon: <FaUsers className="text-[16px] text-[#00a34d]" />,
    label: "Clients",
    value: "150+",
    desc: "More than 150 satisfied clients have partnered with us worldwide.",
  },
  {
    icon: <FaChartLine className="text-[16px] text-[#00a34d]" />,
    label: "Projects",
    value: "40+",
    desc: "Successfully delivered 40+ projects across various industries.",
  },
  {
    icon: <FaBuilding className="text-[16px] text-[#00a34d]" />,
    label: "Offices",
    value: "3+",
    desc: "We operate from 3 major cities to serve clients efficiently.",
  },
];


const StatsSection = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto px-5 md:px-8 lg:px-24 xl:px-32 2xl:px-64 py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-delay={idx * 100}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="flex items-center gap-2 text-[#00a34d] bg-[#00a34d1a] text-xs font-medium px-2 py-1 rounded mb-4">
              {stat.icon}
              <span>{stat.label}</span>
            </div>
            <h3 className="text-[40px] font-medium mb-4">{stat.value}</h3>
            <p className="text-sm text-gray-500 max-w-[260px]">{stat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
