import { HousePlug } from 'lucide-react';
import { Link } from 'react-router';

type LogoColor = 'black' | 'white';

interface LogoProps {
  color: LogoColor;
}

const Logo = ({ color }: LogoProps) => {
  return (
    <Link to={'/'} className='flex flex-col items-center gap-1'>
      <HousePlug color={color} size={35} />
      <span
        className={`text-sm uppercase ${
          color === 'black' ? 'text-black' : 'text-white'
        }`}
      >
        Digital Project
      </span>
    </Link>
  );
};

export default Logo;
