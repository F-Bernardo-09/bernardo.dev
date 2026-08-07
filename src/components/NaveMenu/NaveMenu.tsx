import { Link } from "react-router-dom";
import pt from "../../locales/pt-br.json";

export default function NaveMenu() {
  return (
    <>
      <li>
        <Link
          to={pt.header.nav.home.link}
          className="nav-link"
          aria-label={pt.header.nav.home.ariaLabel}
        >
          {pt.header.nav.home.label}
        </Link>
      </li>
      <li>
        <Link
          to={pt.header.nav.about.link}
          className="nav-link"
          aria-label={pt.header.nav.about.ariaLabel}
        >
          {pt.header.nav.about.label}
        </Link>
      </li>
      <li>
        <Link
          to={pt.header.nav.contact.link}
          className="nav-link"
          aria-label={pt.header.nav.contact.ariaLabel}
        >
          {pt.header.nav.contact.label}
        </Link>
      </li>
    </>
  );
}
