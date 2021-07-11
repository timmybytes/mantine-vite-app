import React from 'react';

const Nav = ({
  customPage = 'Specialty',
  ...props
}: {
  customPage: string;
}) => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>{customPage}</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
