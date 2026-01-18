import ScrollToTopBtn from '@/components/UI/ScrollToTopBtn';
import AboutSection from '../../components/About/AboutSection';
import ContactHomeSection from '../../components/Contact/ContactHomeSection.tsx/ContactHomeSection';
import HeroSection from '../../components/Hero/HeroSection';
import OurProjectsSection from '../../components/OurProjects/OurProjectsSection';

const HomePage = () => {
  return (
    <>
      <ScrollToTopBtn />
      <HeroSection />
      <AboutSection />
      <OurProjectsSection />
      <ContactHomeSection />
    </>
  );
};

export default HomePage;
