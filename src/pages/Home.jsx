import { Helmet } from "react-helmet-async";
import AboutUsSection from '../components/Home/AboutUsSection';
import CraftingSection from '../components/Home/CraftingSection';
import HeroSection from '../components/Home/HeroSection';
import MarqueeSection from '../components/Home/MarqueeSection';
import StatsSection from '../components/Home/StatsSection';
import TestimonialSection from '../components/Home/TestimonialSection';
import ToolSection from '../components/Home/ToolSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.shovig.in/" />
      </Helmet>
      <HeroSection />
      <MarqueeSection />
      <AboutUsSection />
      <StatsSection />
      <CraftingSection />
      <ToolSection />
      <TestimonialSection />
    </>
  );
};

export default Home;
