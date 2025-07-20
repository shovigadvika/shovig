import { useState, useEffect, useRef } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import img1 from "../../assets/services/1.webp";
import img2 from "../../assets/services/2.webp";
import img3 from "../../assets/services/3.webp";
const accordionData = [
  {
    title: "Front-End Excellence",
    content:
      "Our front-end development team uses cutting-edge technologies to bring your vision to life with precision and style. We build interfaces that are responsive, intuitive, and brand-aligned. Tech stack includes: HTML5 & CSS3, JavaScript, Bootstrap, React.js, Tailwind CSS, and Next.js. Your site will look flawless across desktops, tablets, and smartphones.",
  },
  {
    title: "Secure & Scalable Back-End Development",
    content:
      "Behind every great website is a solid back-end. We construct robust, secure, and scalable systems using Node.js, PHP, and Python. Designed for performance, they handle real-time data, high traffic, and complex logic without sacrificing elegance.",
  },
  {
    title: "Database Architecture That Supports Growth",
    content:
      "We integrate reliable, high-performance databases to ensure your data is secure and accessible. With expertise in MongoDB and SQL, we structure your data for real-time access, analytics, and seamless performance.",
  },
  {
    title: "Full-Stack Solutions to Every Business Need",
    content:
      "We offer full web development services for various business needs: Custom Websites, CMS (WordPress, Joomla), E-commerce (Shopify, WooCommerce), AI-powered apps, mobile-ready web apps, and long-term maintenance. Whether starting fresh or upgrading, we ensure smooth delivery and quality.",
  },
  {
    title: "Built for Performance, Optimized for Success",
    content:
      "Our builds are SEO-optimized, blazing fast, cross-browser compatible, accessible, and secure. We don’t just make websites—we build digital assets that drive visibility, user engagement, and conversions.",
  },
];

const AccordionItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-gray-200 overflow-x-hidden">
    <button
      className="w-full flex justify-between items-center py-4 text-lg sm:text-xl font-medium text-gray-800 text-left"
      onClick={onClick}
    >
      <span>{item.title}</span>
      {isOpen ? (
        <FaMinus className="text-primary" />
      ) : (
        <FaPlus className="text-primary" />
      )}
    </button>
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden text-gray-600 text-sm sm:text-base leading-relaxed ${
        isOpen ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      {item.content}
    </div>
  </div>
);

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const img1Ref = useRef();
  const img3Ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const move1 = scrollY * 0.1;
      const move3 = scrollY * 0.1;

      if (img1Ref.current) {
        img1Ref.current.style.transform = `translateY(${move1}px)`;
      }
      if (img3Ref.current) {
        img3Ref.current.style.transform = `translateY(-${move3}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-white w-full px-6 py-32">
      <div className="max-w-[1940px] m-auto  mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        <div className="relative w-full md:w-1/2 h-auto flex justify-center items-center">
          <div className="relative w-full max-w-[550px] h-[350px] sm:h-[320px]">
            <img
              src={img2}
              alt="Center"
              className="w-full h-full object-cover rounded-xl shadow-xl relative z-10"
            />
            <img
              ref={img3Ref}
              src={img3}
              alt="Top Left"
              className="hidden sm:block w-[160px] sm:w-[200px] h-[220px] sm:h-[280px] object-cover rounded-xl shadow-lg absolute -top-10 -left-10 z-0 transition-transform duration-300"
            />
            <img
              ref={img1Ref}
              src={img1}
              alt="Bottom Right"
              className="hidden sm:block w-[160px] sm:w-[200px] h-[220px] sm:h-[280px] object-cover rounded-xl shadow-lg absolute -bottom-10 -right-10 z-20 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <div className="space-y-4">
            {accordionData.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
