import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
  FaRegAddressBook,
} from "react-icons/fa";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-24 right-7 z-[999] flex flex-col items-end gap-3 group"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Action Buttons */}
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Phone */}
        <a
          href="tel:+918870173336"
          className="bg-white shadow-xl rounded-full p-3 hover:bg-[#00a34d] transition-all group/icon"
          title="Call Us"
        >
          <FaPhoneAlt
            className="text-[#00a34d] group-hover/icon:text-white"
            size={20}
          />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/918870173336"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white shadow-xl rounded-full p-3 hover:bg-[#00a34d] transition-all group/icon"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp
            className="text-[#00a34d] group-hover/icon:text-white"
            size={20}
          />
        </a>

        {/* Email */}
        <a
          href="mailto:info@shovig.in"
          className="bg-white shadow-xl rounded-full p-3 hover:bg-[#00a34d] transition-all group/icon"
          title="Email Us"
        >
          <FaEnvelope
            className="text-[#00a34d] group-hover/icon:text-white"
            size={20}
          />
        </a>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="bg-[#00a34d] text-white shadow-2xl rounded-full p-4 hover:scale-105 transition-all"
        title={open ? "Close" : "Contact Options"}
      >
        {open ? <FaTimes size={20} /> : <FaPhoneAlt size={20} />}
      </button>
    </div>
  );
};

export default FloatingActions;
