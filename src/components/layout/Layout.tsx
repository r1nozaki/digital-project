import Footer from './Footer/Footer';
import Header from './Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className='min-h-screen'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
