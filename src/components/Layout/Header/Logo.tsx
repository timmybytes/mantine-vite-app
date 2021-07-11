import React from 'react';
import logoImage from '../../../logo.svg';
export default function Logo() {
  return (
    <div className='logo'>
      <img className='logo__image' src={logoImage} alt='Logo' />
      <div className='logo__text'>Logo</div>
    </div>
  );
}
