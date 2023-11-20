import { FC, useEffect, createContext, useState } from 'react';

import './navbar.css';

export const Navbar = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScrollListener();

  // update classList of nav on scroll
  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      _classList.push('nav-bar--hidden');

    // @ts-ignore
    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <nav
      className={`flex fixed items-center bg-white w-full p-4 z-50 ${navClassList.join(
        ' ',
      )}`}
    >
      <p className='text-2xl'>🧱</p>

      <ul className='flex justify-center w-full'>
        <NavbarLink to='#home' content='Inicio' />
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
        <NavbarLink to='#recomendations' content='Recomendaciones' />
      </ul>
    </nav>
  );
};

type NavbarLink = {
  to: string;
  content: string;
};

const NavbarLink: FC<NavbarLink> = ({ to, content }) => {
  // <div className='w-ful h-1 bg-blue-500' />
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

export default function useScrollListener() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // set up event listeners
  useEffect(() => {
    const handleScroll = () => {
      setData((last) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y,
        };
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return data;
}

export const ScrollContext = createContext(null);
