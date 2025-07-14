import contactBg from "../../assets/contact.jpg";

const ContactHeroSection = () => {
  return (
    <section className="mt-28 px-5 sm:px-8 md:px-16 xl:px-32 2xl:px-[64px] max-w-[1440px] mx-auto" data-aos="fade-up">
      <div
        className="relative h-[460px] rounded-2xl overflow-hidden bg-center bg-cover"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-2xl">
          <div className="text-center max-w-[800px] text-white px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-5">
              Let’s talk about your <br />
              <span className="text-[#ea9f00]">project.</span>
            </h1>
            <p className="text-sm sm:text-base leading-relaxed">
              We’ll create high-quality linkable content and build at least 40
              high-authority links to each asset. <br className="hidden sm:block" />
              Bring the way for you to grow your website & improve skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;
