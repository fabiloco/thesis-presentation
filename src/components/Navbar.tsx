import React, { FC } from 'react';

export const Navbar = () => {
  return (
    <nav className='absolute bg-white w-full'>
      <ul className='flex w-full'>
        <NavbarLink to='/' content='Inicio' />
        <NavbarLink to='#introduccion' content='Introducción' />
      </ul>
    </nav>
  );
};

type NavbarLink = {
  to: string;
  content: string;
};

const NavbarLink: FC<NavbarLink> = ({ to, content }) => {
  return (
    <li className='px-2 py-1'>
      <a href={to}>{content}</a>
    </li>
  );
};
