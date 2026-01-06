import { FaInstagram, FaPinterestP, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { type Social } from '../../types/Social';

const Socials = () => {
  const socials: Social[] = [
    {
      id: 1,
      href: 'https://www.instagram.com/_r1nozaki/?hl=ua',
      icon: FaInstagram,
      color: '#d62976',
    },
    {
      id: 2,
      href: 'https://x.com/r1nozaki',
      icon: FaXTwitter,
      color: '#00acee',
    },
    {
      id: 3,
      href: 'https://t.me/r1nozaki',
      icon: FaTelegramPlane,
      color: '#0072b1',
    },
    {
      id: 4,
      href: 'https://ru.pinterest.com/ivanzagoruy7/',
      icon: FaPinterestP,
      color: '#f90101',
    },
  ];
  return (
    <div className='flex items-center gap-4'>
      {socials.map(({ id, href, icon, color }) => {
        const Icon = icon;
        return (
          <a
            key={id}
            href={href}
            target='_blank'
            className={`transition-colors duration-300 `}
            onMouseEnter={e => (e.currentTarget.style.color = color)}
            onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
