export default function Header() {
  return (
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <a href="index.html" class="brand-logo">
            Bernardo Alencar
          </a>

          <button class="theme-toggle" type="button" aria-label="Toggle theme">
            <svg class="theme-icon" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <ul class="navigation-menu">
            <li>
              <a href="index.html" class="nav-link active">
                Home
              </a>
            </li>
            <li>
              <a href="src/page/about-me.html" class="nav-link">
                About Me
              </a>
            </li>
            <li>
              <a href="#contact-section" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
