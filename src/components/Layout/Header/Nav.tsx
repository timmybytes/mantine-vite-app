import React from 'react';
import Icon from '../../Icon';

type navLink = {
  title: string;
  link: string;
  icon: string;
};

const links: navLink[] = [
  {
    title: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    title: 'About',
    link: '/about',
    icon: 'info',
  },
  {
    title: 'Contact',
    link: '/contact',
    icon: 'mailbox',
  },
];

const Nav = ({
  customPage = 'Specialty',
  ...props
}: {
  customPage: string;
}) => {
  return (
    <nav className='nav'>
      <ul className='nav__linkList'>
        {links.map(link => (
          <li key='link' className='nav__linkList-link'>
            {link.icon && <Icon /> ? <Icon icon={link.icon} /> : null}
            <a href={link.link}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
