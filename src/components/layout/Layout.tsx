import { Outlet } from 'react-router';
import ScrollToTop from '../../helpers/ScrollToTop';
import ScrollProgres from '../UI/ScrollProgres';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollProgres />
      <Header />

      <main className='min-h-screen px-5 md:px-34'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
