import React from "react";
import {
  SiPython,
  SiJupyter,
  SiScikitlearn,
  SiTensorflow,
  SiOpenai,
  SiSpacy
} from "react-icons/si";

const tools = [
  {
    icon: <SiPython className="text-2xl text-white" />,
    title: "Python Programming",
    desc: "Core language for AI programming and data science."
  },
  {
    icon: <SiJupyter className="text-2xl text-white" />,
    title: "Jupyter Notebooks",
    desc: "Interactive coding environment for experimenting and documenting."
  },
  {
    icon: <SiScikitlearn className="text-2xl text-white" />,
    title: "Scikit-Learn",
    desc: "Machine learning library for classification, regression, and clustering."
  },
  {
    icon: <SiTensorflow className="text-2xl text-white" />,
    title: "TensorFlow & Keras",
    desc: "Deep learning frameworks for building neural networks."
  },
  {
    icon: <SiOpenai className="text-2xl text-white" />,
    title: "OpenAI",
    desc: "Build intelligent bots and models with OpenAI's tools."
  },
  {
    icon: <SiSpacy className="text-2xl text-white" />,
    title: "NLP Tools - NLTK & SpaCy",
    desc: "Natural language processing for building AI that understands text."
  }
];

const ToolsAndTechnologies = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#e9ecea] to-[#d3d4d4] py-20 px-6 md:px-12 lg:px-24 text-gray-800 overflow-hidden">
      <div className="absolute w-[400px] h-[400px] bg-white/10 rounded-full top-[-80px] left-[-80px] blur-3xl animate-pulse" />
      <div className="absolute w-[300px] h-[300px] bg-green-800 rounded-full bottom-[-100px] right-[-100px] blur-2xl animate-ping" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Tools and Technologies Covered
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2">
          {tools.map((tool, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex items-start gap-4 shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#00a34d] rounded-full">
                {tool.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-600 mb-1">
                  {tool.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsAndTechnologies;
