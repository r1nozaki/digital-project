import { lenis } from '@/lenisInstance';
import { useEffect, useState } from 'react';

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ScrollToTop = () => {
    lenis.scrollTo(0);
  };

  if (!visible) return null;

  return (
    <button
      onClick={ScrollToTop}
      className={`fixed bottom-5 right-0 md:bottom-10 md:right-10 h-5 w-5 md:h-10 md:w-10 rounded-full shadow-md transition duration-300 z-50 hover:cursor-pointer bg-black border border-black text-white hover:bg-transparent  hover:text-black`}
      aria-label='Scroll to top'
    >
      ↑
    </button>
  );
};

export default ScrollToTopBtn;
