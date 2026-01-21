import HeroSection from '@/src/components/Hero/HeroSection'
import AboutSection from '@/src/components/About/AboutSection'
import ScrollToTopBtn from '@/src/components/UI/ScrollToTopBtn'
import OurProjectsSection from '@/src/components/OurProjects/OurProjectsSection'
import ContactHomeSection from '@/src/components/Contact/ContactHomeSection.tsx/ContactHomeSection'
const HomePage = () => {
	return (
		<>
			<ScrollToTopBtn />
			<HeroSection />
			<AboutSection />
			<OurProjectsSection />
			<ContactHomeSection />
		</>
	)
}

export default HomePage
