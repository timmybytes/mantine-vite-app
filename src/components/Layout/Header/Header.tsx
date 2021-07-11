import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='header'>
      <Logo />
      <Nav customPage='Specialty' />
    </header>
  );
}
