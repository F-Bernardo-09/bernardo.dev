import NaveMenu from "../NaveMenu/NaveMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="#" className="brand-logo">
            Bernardo Alencar
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
