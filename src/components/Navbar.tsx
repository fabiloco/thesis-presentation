import Link from 'next/link';

import React, { FC } from 'react';

export const Navbar = () => {
  return (
    <nav>
      <ul className='flex w-full'>
        <NavbarLink to='/' content='Inicio' />
        <NavbarLink to='/introduction' content='Introducción' />
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
      <Link href={to}>{content}</Link>
    </li>
  );
};
