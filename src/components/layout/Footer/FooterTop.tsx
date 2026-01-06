import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { type ContactItem } from '../../../types/Contacts';
import { type NavigationItem } from '../../../types/Navigation';
import Logo from '../../common/Logo';
import Socials from '../../common/Socials';

const FooterTop = () => {
  const information: NavigationItem[] = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/projects', label: 'Projects' },
    { path: '/contacts', label: 'Contacts' },
  ];

  const contacts: ContactItem[] = [
    { content: '1234 Sample Street Austin Texas 78704', icon: MapPin },
    { content: '512.333.2222', icon: Phone },
    { content: 'sampleemail@gmail.com', icon: Mail },
  ];

  return (
    <div className='flex justify-between py-15 pl-29 pr-53'>
      <Logo color='white' />
      <div className='flex gap-39.5 items-center'>
        <div className='flex flex-col gap-2 text-white'>
          <span className='text-lg font-bold'>Information</span>
          {information.map(l => (
            <Link key={l.label} to={l.path} className='hover:underline'>
              {l.label}
            </Link>
          ))}
        </div>
        <div className='flex flex-col gap-5 text-white'>
          <span className='text-lg font-bold'>Contacts</span>
          {contacts.map(({ content, icon }) => {
            const Icon = icon;
            return (
              <div className='flex items-center gap-1'>
                <Icon size={20} />
                <span>{content}</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className='text-white'>
        <span className='block mb-6 text-lg font-bold'>Social Media</span>
        <Socials />
      </div>
    </div>
  );
};

export default FooterTop;
