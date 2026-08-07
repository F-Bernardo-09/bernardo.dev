import styled from "styled-components";
import { Link } from "react-router-dom";
import pt from "../../locales/pt-br.json";

const NavLink = styled(Link)`
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: var(--accent-green);
  }
`;

export default function NaveMenu() {
  return (
    <>
      <li>
        <NavLink
          to={pt.header.nav.home.link}
          aria-label={pt.header.nav.home.ariaLabel}
        >
          {pt.header.nav.home.label}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={pt.header.nav.about.link}
          aria-label={pt.header.nav.about.ariaLabel}
        >
          {pt.header.nav.about.label}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={pt.header.nav.contact.link}
          aria-label={pt.header.nav.contact.ariaLabel}
        >
          {pt.header.nav.contact.label}
        </NavLink>
      </li>
    </>
  );
}
