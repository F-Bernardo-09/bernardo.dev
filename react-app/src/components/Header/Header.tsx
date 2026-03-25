export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="index.html" className="brand-logo">
            Bernardo Alencar
          </a>

          <button
            className="theme-toggle"
            type="button"
            aria-label="Toggle theme"
          >
            <svg className="theme-icon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <ul className="navigation-menu">
            <li>
              <a href="index.html" className="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="src/page/about-me.html" className="nav-link">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact-section" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
