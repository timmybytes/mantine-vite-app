import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return <footer className='footer'>&copy; {year}</footer>;
};

export default Footer;
