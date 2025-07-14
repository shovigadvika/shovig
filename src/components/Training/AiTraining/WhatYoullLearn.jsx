import {
  FaRobot,
  FaChartLine,
  FaProjectDiagram,
  FaBrain,
  FaComments,
} from "react-icons/fa";

const skills = [
  {
    icon: FaRobot,
    title: "Foundations of Artificial Intelligence",
    description:
      "Get a strong grip on AI basics—what it is, how it works, and its impact on industries.",
  },
  {
    icon: FaChartLine,
    title: "Data Science & Machine Learning",
    description:
      "Learn how to clean, analyze, and interpret data using Python and tools like Pandas, NumPy, and Matplotlib. Build your own machine learning models using algorithms like Linear Regression, Decision Trees, Random Forests, and K-Nearest Neighbors.",
  },
  {
    icon: FaBrain,
    title: "Deep Learning",
    description:
      "Dive into neural networks and deep learning with TensorFlow and Keras. Create models that can classify images, recognize speech, and more.",
  },
  {
    icon: FaComments,
    title: "Natural Language Processing (NLP)",
    description:
      "Understand how AI understands and generates human language. Work on sentiment analysis, chatbots, and language translation models.",
  },
  {
    icon: FaRobot,
    title: "AI in Automation",
    description:
      "Explore how AI powers automation in real-world applications—like customer service bots, recommendation systems, and AI-based diagnostics.",
  },
  {
    icon: FaProjectDiagram,
    title: "Real-Time Projects",
    description:
      "Work on live AI use-cases like: Predicting stock prices, Detecting fake news, Creating a recommendation engine, Building a basic chatbot. These projects build your portfolio and boost your confidence.",
  },
];

const WhatYoullLearn = () => {
  return (
    <section className="px-4 sm:px-8 md:px-[32px] lg:px-[64px] relative py-16 sm:py-20 md:py-24 bg-gray-100">
      <div className="text-center max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-700 mb-6">
          What You'll Learn
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-14 md:mb-16">
          Our AI Development Training gives you hands-on experience in both fundamentals and advanced concepts, combining theory with practical projects.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 text-left">
          {skills.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative p-6 sm:p-7 md:p-8 rounded-2xl overflow-hidden group transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <div className="w-14 h-14 hidden lg:block bg-[#00a34d] rounded-full transition-transform duration-1000 ease-in-out group-hover:scale-[30] origin-center mt-8 ml-8" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4 sm:mb-5 md:mb-6">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#00a34d] relative z-20 shrink-0">
                      <Icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-xl sm:text-xl md:text-xl font-semibold text-[#00a34d] group-hover:text-white transition-colors duration-500 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 leading-[1.8] text-[15px] sm:text-[15.5px] md:text-[16px] group-hover:text-white transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullLearn;