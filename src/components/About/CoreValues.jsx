import BlobCard from "../BlobCard";
import {
  FaRocket,
  FaUserShield,
  FaHeart,
  FaLightbulb,
  FaUsers,
  FaCogs,
} from "react-icons/fa";

const CardSection = () => {
  const cardData = [
    {
      icon: <FaRocket />,
      title: "Excellence",
      color: "#00a34d",
      desc: "We strive to deliver the highest quality in everything we build, focusing on performance, design, and scalability.",
    },
    {
      icon: <FaUserShield />,
      title: "Integrity",
      color: "#3b82f6",
      desc: "Honesty and transparency are at the core of how we work, ensuring trust and strong relationships with our clients.",
    },
    {
      icon: <FaHeart />,
      title: "Passion",
      color: "#ef4444",
      desc: "We love what we do. That passion drives innovation, care, and a relentless pursuit of better solutions.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      color: "#f59e0b",
      desc: "We constantly explore new ideas and technologies to bring fresh perspectives and cutting-edge solutions.",
    },
    {
      icon: <FaUsers />,
      title: "Teamwork",
      color: "#10b981",
      desc: "Our strength lies in collaboration—internally and with clients—to create truly impactful products together.",
    },
    {
      icon: <FaCogs />,
      title: "Reliability",
      color: "#8b5cf6",
      desc: "You can count on us to deliver. We value consistency, responsibility, and long-term commitment.",
    },
  ];

  return (
    <section className="relative px-4 sm:px-10 md:px-16 lg:px-[64px] py-20 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
        Our Core Pillars
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {cardData.map((card, idx) => (
          <BlobCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
