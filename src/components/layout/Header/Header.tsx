import Logo from '../../common/Logo';
import HeaderNavigation from './HeaderNavigation';

const Header = () => {
  return (
    <header className='flex items-center justify-between py-8 px-34 font-roboto'>
      <Logo color='black' />
      <nav>
        <ul className='flex items-center gap-15'>
          <HeaderNavigation />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
