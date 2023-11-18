import { FC } from "react";

export const Navbar = () => {
  return (
    <nav className="flex fixed items-center bg-white w-full p-4">
      <p className="text-2xl">🧱</p>

      <ul className="flex justify-center w-full">
        <NavbarLink to="/" content="Inicio" />
        <NavbarLink to="#introduccion" content="Introducción" />
        <NavbarLink to="#expectedImpact" content="Impacto esperado" />
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
    <li className="px-3 py-2">
      <a
        href={to}
        className="font-bold text-lg hover:underline underline-offset-2 decoration-2 decoration-blue-500 transition-all"
      >
        {content}
      </a>
    </li>
  );
};
