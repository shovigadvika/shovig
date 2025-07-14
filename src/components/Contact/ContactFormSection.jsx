import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";
import { toast } from "react-toastify";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
    serviceType: "consultation",
  });

  const serviceTypes = [
    "Web Development",
    "Graphic Design",
    "Digital Marketing",
    "Content Management System",
    "AI Software Development",
    "Web Maintenance",
    "Search Engine Optimization",
    "Social Media Optimization",
    "Domain Registration",
    "Business Email",
    "Payment Gateway",
    "PowerPoint Presentation",
    "Other",
    "Consultation",
  ];

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    if (!name.trim()) return "Name is required";
    if (!regex.test(name)) return "Name should contain only letters";
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return "Email is required";
    if (!validator.isEmail(email)) return "Please enter a valid email";
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return "Message is required";
    if (message.length < 10) return "Message should be at least 10 characters";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      const filteredValue = value.replace(/[^A-Za-z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: filteredValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      phone: formData.phoneNo,
      message: formData.message,
      service_type: formData.serviceType, 
    };

    try {
      await emailjs.send(
        "service_9zgn61n",
        "template_idrk885",
        templateParams,
        "UmAGr5jTPqt7gqQ5H"
      );

      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", phoneNo: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-5 sm:px-8 md:px-16 xl:px-32 2xl:px-[64px] max-w-[1440px] mx-auto">
      <h2 className="text-[36px] text-[#6e6e6e] font-semibold mb-10">
        Contact us
      </h2>

      <div className="flex flex-wrap gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex-1 min-w-[300px] md:min-w-[60%] flex flex-col gap-5"
        >
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#6e6e6e]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`p-3 rounded-lg border text-sm text-[#333] bg-gray-50 focus:outline-none ${
                  errors.name
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 focus:ring-[#ea9f00]/30 focus:border-[#ea9f00]"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="phoneNo"
                className="text-sm font-medium text-[#6e6e6e]"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="phoneNo"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                placeholder="Enter mobile number"
                className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-[#ea9f00]/30 focus:border-[#ea9f00]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-[#6e6e6e]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`p-3 rounded-lg border text-sm text-[#333] bg-gray-50 focus:outline-none ${
                errors.email
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#ea9f00]/30 focus:border-[#ea9f00]"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="serviceType"
              className="text-sm font-medium text-[#6e6e6e]"
            >
              Service Type
            </label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 bg-gray-50 text-sm text-[#333] focus:outline-none focus:ring-2 focus:ring-[#ea9f00]/30 focus:border-[#ea9f00]"
            >
              {serviceTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-medium text-[#6e6e6e]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your message"
              className={`p-3 rounded-lg border text-sm text-[#333] bg-gray-50 focus:outline-none ${
                errors.message
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-[#ea9f00]/30 focus:border-[#ea9f00]"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-[#00a34d] text-white px-6 py-2 rounded-full font-medium border-2 border-[#00a34d] w-max hover:bg-transparent hover:text-[#00a34d] transition-all duration-300"
          >
            {loading ? "Sending..." : "SEND A REQUEST"}
          </button>
        </form>

        <div className="flex-1 min-w-[280px] flex flex-col gap-6">
          <div>
            <h3 className="text-[#00a34d] font-semibold text-[18px] mb-1">
              Office Address
            </h3>
            <p className="text-sm text-[#6e6e6e]">
              8/45 Vee Vee Illam, Sardha Nagar, BK Pudur, Kuniyamuthur,
              Coimbatore - 641008
            </p>
          </div>
          <div>
            <h3 className="text-[#00a34d] font-semibold text-[18px] mb-1">
              Email
            </h3>
            <p className="text-sm text-[#6e6e6e]">info@shovig.in</p>
          </div>
          <div>
            <h3 className="text-[#00a34d] font-semibold text-[18px] mb-1">
              Phone
            </h3>
            <p className="text-sm text-[#6e6e6e]">
              +91 8870173336 / +91 8680850380
            </p>
          </div>
          <div>
            <h3 className="text-[#00a34d] font-semibold text-[18px] mb-1">
              Working Hours
            </h3>
            <p className="text-sm text-[#6e6e6e]">India: 9am – 6pm</p>
            <p className="text-sm text-[#6e6e6e]">US: 7pm – 5am</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
