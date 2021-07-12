import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      &copy; {year}, <a href='#'>A New Company</a>
    </footer>
  );
};

export default Footer;
