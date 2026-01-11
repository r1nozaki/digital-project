import { Outlet } from 'react-router';
import ScrollToTop from '../../helpers/ScrollToTop';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className='min-h-screen px-34'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
