import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaCode,
  FaPaintBrush,
  FaBug,
  FaWrench,
  FaSync,
  FaCheck,
  FaTabletAlt,
  FaShieldAlt,
} from "react-icons/fa";

import img1 from "../../assets/services/app1.jpg";
import img2 from "../../assets/services/app2.jpg";
import img3 from "../../assets/services/app3.jpg";
import img4 from "../../assets/services/app4.jpg";
import img5 from "../../assets/services/app5.jpg";

const steps = [
  {
    title: "01. Android App Development",
    desc: "Our Android apps are engineered for performance, scalability, and flawless UX across all devices.",
    points: [
      "Developed using Java & Kotlin",
      "Optimized for smartphones & tablets",
      "Built with the latest Android SDK tools",
    ],
    extra:
      "From concept to deployment, we ensure your app stands out on Google Play with smooth performance and stunning design.",
    img: img1,
  },
  {
    title: "02. iOS App Development",
    desc: "We craft sleek, high-performance iOS apps using Swift and Xcode for Apple’s entire ecosystem.",
    points: [
      "Swift-based clean codebase",
      "Tailored for iPhone & iPad",
      "Optimized with Apple’s best practices",
    ],
    extra:
      "Whether for the App Store or internal use, we make sure your app meets Apple’s standards and your business goals.",
    img: img2,
  },
  {
    title: "03. Cross-Platform & Hybrid Apps",
    desc: "Build once and deploy everywhere — we deliver native-like experiences using hybrid tech.",
    points: [
      "React Native & Flutter expertise",
      "Faster time-to-market",
      "Lower development costs",
    ],
    extra:
      "Perfect for startups and scaling businesses, hybrid apps cut time and cost while reaching wider audiences.",
    img: img3,
  },
  {
    title: "04. UI/UX Design",
    desc: "Design that drives engagement — we make apps intuitive, beautiful, and easy to use.",
    points: [
      "User-centric wireframing",
      "Modern, clean visuals",
      "Smooth navigation & flows",
    ],
    extra:
      "Good design isn’t just pretty — it’s strategic. We focus on usability that retains and delights users.",
    img: img4,
  },
  {
    title: "05. App Testing & QA",
    desc: "We rigorously test across platforms, devices, and conditions to eliminate bugs and glitches.",
    points: [
      "Manual & automated testing",
      "Bug detection with Katalon Studio",
      "Performance & stress testing",
    ],
    extra:
      "Quality matters. We ensure your app launches clean and runs smoothly under real-world pressure.",
    img: img5,
  },
  {
    title: "06. Maintenance & Support",
    desc: "Post-launch, we keep your app up-to-date, secure, and aligned with user expectations.",
    points: [
      "Regular updates & patches",
      "Security monitoring",
      "User feedback improvements",
    ],
    extra:
      "Technology evolves — and so will your app. We provide ongoing support to help it grow with your business.",
    img: img1,
  },
];

const getIcon = (title, idx) => {
  if (title.includes("Android")) return [<FaAndroid />, <FaMobileAlt />, <FaCode />][idx];
  if (title.includes("iOS")) return [<FaApple />, <FaTabletAlt />, <FaCheck />][idx];
  if (title.includes("Cross")) return [<FaMobileAlt />, <FaSync />, <FaWrench />][idx];
  if (title.includes("UI/UX")) return [<FaPaintBrush />, <FaCode />, <FaMobileAlt />][idx];
  if (title.includes("Testing")) return [<FaBug />, <FaCheck />, <FaShieldAlt />][idx];
  if (title.includes("Maintenance")) return [<FaSync />, <FaShieldAlt />, <FaWrench />][idx];
  return <FaCheck />;
};

const OurMobile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const cardsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute("data-index"));
          setActiveStep(index);
        }
      });
    }, options);

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full relative bg-white">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="w-full lg:w-1/2 h-[300px] lg:h-screen sticky top-0 flex items-center justify-center bg-white  overflow-hidden">
          <div className="absolute w-[600px] h-[600px] bg-[#d7f5e7] animated-blob opacity-80 left-10 top-1/2 -translate-y-1/2 z-0" />
          <AnimatePresence mode="wait">
            <motion.img
              key={steps[activeStep].img}
              src={steps[activeStep].img}
              alt="Step Visual"
              className="w-[60%] h-[60%] object-cover rounded-xl shadow-lg z-10 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col">
          {steps.map((step, index) => (
            <div
              key={index}
              data-index={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="min-h-[80vh] lg:min-h-screen flex items-center px-6"
            >
              <div className="bg-[#fcfcfc] shadow-xl rounded-2xl p-8 space-y-6 w-full border border-gray-100 ring-1 ring-gray-200 lg:-ml-6 hover:ring-[#00a34d] hover:shadow-2xl hover:backdrop-blur-sm transition-all duration-300">
                <h3 className="text-3xl font-bold text-[#00a34d]">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {step.desc}
                </p>
                <ul className="space-y-2">
                  {step.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-600 text-sm sm:text-base"
                    >
                      <span className="text-[#00a34d] pt-1">
                        {getIcon(step.title, idx)}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 text-sm">{step.extra}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMobile;
