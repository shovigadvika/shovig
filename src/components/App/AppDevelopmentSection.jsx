import webImg from "../../assets/services/app.jpg";

const AppDevelopmentSection = () => {
  return (
    <section className="relative bg-white px-4 sm:px-10 md:px-16 lg:px-[64px] py-20 overflow-x-hidden">
      <div className="max-w-[1940px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2" data-aos="fade-right">
          <div className="relative w-full">
            <div className="absolute -top-6 -left-6 w-full h-full bg-[#e6f5ed] rounded-3xl -z-10" />
            <img
              src={webImg}
              alt="Web Development"
              className="w-full rounded-3xl shadow-lg object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2" data-aos="fade-left">
          <p className="text-[#00a34d] uppercase font-semibold text-sm mb-2">
            Mobile App Development
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Reach out Users Where They Are — <span className="italic text-[#00a34d]">On the Go</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            In today’s fast-moving digital world, <span className="text-[#00a34d] font-semibold">mobile</span> is no longer an alternative — it’s vital. Your <span className="text-[#00a34d] font-semibold">crowd</span> is mobile, and your business should be too. At <span className="text-[#00a34d] font-semibold">Shovig Business Solutions</span>, we deliver end-to-end <span className="text-[#00a34d] font-semibold">mobile app development services</span> crafted to help you connect, engage, and grow your user base through smooth mobile experiences.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you're an <span className="text-[#00a34d] font-semibold">emerging business</span> with a big idea or a well-known brand looking to enrich customer <span className="text-[#00a34d] font-semibold">engagement</span>, we design and build mobile applications that combine elegant user interfaces with powerful functionality.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            From <span className="text-[#00a34d] font-semibold">native Android and iOS apps</span> to <span className="text-[#00a34d] font-semibold">scalable hybrid solutions</span>, our apps are engineered to perform — <span className="text-[#00a34d] font-semibold">fast</span>, <span className="text-[#00a34d] font-semibold">secure</span>, and <span className="text-[#00a34d] font-semibold">future-ready</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
