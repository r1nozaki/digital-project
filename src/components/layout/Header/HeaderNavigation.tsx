import { NavLink } from 'react-router';
import { type NavigationItem } from '../../../types/Navigation';

const HeaderNavigation = () => {
  const navItems: NavigationItem[] = [
    { path: '/', label: 'Home' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/projects', label: 'Projects' },
    { path: '/contacts', label: 'Contacts' },
  ];

  return (
    <>
      {navItems.map(({ path, label }) => (
        <NavLink key={label} to={path}>
          {({ isActive }) => (
            <span
              className={`text-base border-black font-medium py-1 uppercase ${
                isActive ? 'border-y ' : 'hover:border-y'
              }`}
            >
              {label}
            </span>
          )}
        </NavLink>
      ))}
    </>
  );
};

export default HeaderNavigation;
