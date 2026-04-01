import pt from "../../locales/pt-br.json";
import NaveMenu from "../NaveMenu/NaveMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a
            href="#"
            className="brand-logo"
            aria-label={pt.header.logoAlt}
            title={pt.header.title}
          >
            {pt.header.name}
          </a>

          <ThemeToggle />

          <ul className="navigation-menu">
            <NaveMenu />
          </ul>
        </nav>
      </div>
    </header>
  );
}
