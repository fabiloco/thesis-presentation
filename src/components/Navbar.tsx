import { FC } from 'react';

export const Navbar = () => {
  return (
    <nav className='flex fixed items-center bg-white w-full p-4 z-50'>
      <p className='text-2xl'>🧱</p>

      <ul className='flex justify-center w-full'>
        <NavbarLink to='/' content='Inicio' />
        <NavbarLink to='#introduccion' content='Introducción' />
        <NavbarLink to='#expectedImpact' content='Impacto esperado' />
        <NavbarLink to='#newTechnologies' content='Nuevas tecnologías' />
        <NavbarLink to='#objectives' content='Objetivos' />
        <NavbarLink
          to='#designStates'
          content='Etapas del diseño y construcción'
        />
        <NavbarLink to='#survey' content='Encuesta' />
        <NavbarLink to='#conclusions' content='Conclusiones' />
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
    <li className='px-3 py-2'>
      <a
        href={to}
        className='font-normal text-md hover:underline underline-offset-2 decoration-2 decoration-blue-500 transition-all'
      >
        {content}
      </a>
    </li>
  );
};
