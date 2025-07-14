import React, { useEffect, useState } from "react";
import loaderGif from "../assets/logoGif.gif"; 


const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <img src={loaderGif} alt="Loading..." className="w-24 h-24" />
    </div>
  );
};

export default Loader;
