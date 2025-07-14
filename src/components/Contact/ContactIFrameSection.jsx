const ContactIFrameSection = () => {
  return (
    <section className="sticky md:-top-48 lg:-top-32 py-10 px-5 md:mb-20 sm:px-8 md:px-16 xl:px-32 2xl:px-[64px] max-w-[1440px] mx-auto">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[24px] lg:text-[44px] text-[#2d2d2d] font-bold mb-5 leading-snug">
          Find us easily,<br />
          right at the heart of <span className="text-[#00a34d]">Coimbatore </span> district
        </h2>
        <p className="text-[#6e6e6e] text-base text-14px md:text-[16px] leading-relaxed mb-10 max-w-[700px] m-auto">
          We’ll create high-quality linkable content and build at least 40 high-authority links to each asset. 
          Bring the way for you to grow your website & improve skills.
        </p>
        <div className="w-full overflow-hidden rounded-xl shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.3066232336605!2d76.95172417412411!3d10.9401947561535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b4285bc1351%3A0x4ad351113be008dd!2sShoVig%20Business%20Solutions!5e0!3m2!1sen!2sin!4v1751728396117!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactIFrameSection;
