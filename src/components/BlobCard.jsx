import React from "react";

const BlobCard = ({ icon, title, desc, color = "#00a34d" }) => {
  return (
    <div className="relative w-full max-w-[280px] h-[260px] sm:h-[280px] rounded-xl z-10 overflow-hidden flex items-center justify-center shadow-md mx-auto group">
      <div className="absolute top-[5px] left-[5px] w-[calc(100%-10px)] h-[calc(100%-10px)] z-20 bg-white/90 backdrop-blur-[20px] rounded-lg border border-white p-5 flex flex-col items-center text-center">
        <div className="text-3xl mb-3 text-[#00a34d]">{icon}</div>
        <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2">{title}</h3>
        <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed">{desc}</p>
      </div>

      <div
        className="absolute z-10 top-1/2 left-1/2 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full opacity-60 blur-[12px]"
        style={{
          backgroundColor: color,
          animation: "blob-bounce 10s infinite ease",
          transform: "translate(-100%, -100%)",
        }}
      ></div>
    </div>
  );
};

export default BlobCard;
