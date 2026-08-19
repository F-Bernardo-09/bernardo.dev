import styled from "styled-components";
import {
  NavLink as RouterNavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const linkStyles = `
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  transition: color 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    padding: var(--spacing-xs) 0;
  }
`;

const NavLink = styled(RouterNavLink)`
  ${linkStyles}

  &:hover,
  &.active {
    color: var(--accent-green);
  }
`;

const AnchorLink = styled.a<{ $active?: boolean }>`
  ${linkStyles}
  color: ${(p) =>
    p.$active ? "var(--accent-green)" : "var(--text-secondary)"};

  &:hover {
    color: var(--accent-green);
  }
`;

function waitForImagesThenScroll(id: string) {
  const images = Array.from(document.images);
  const pending = images.filter((img) => !img.complete);

  if (pending.length === 0) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    return;
  }

  let remaining = pending.length;

  function done() {
    remaining--;
    if (remaining <= 0) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  pending.forEach((img) => {
    img.addEventListener("load", done, { once: true });
    img.addEventListener("error", done, { once: true });
  });
}

export default function NaveMenu() {
  const { t } = useTranslation("common");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const activeSection = useScrollSpy(isHome ? ["home", "contact"] : []);

  const homeIsActive = isHome && activeSection === "home";
  const contactIsActive = isHome && activeSection === "contact";

  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace("#", "");
      waitForImagesThenScroll(id);
    }
  }, [isHome, location.hash]);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    e.preventDefault();
    if (isHome) {
      waitForImagesThenScroll(id);
      navigate(`/#${id}`, { replace: true });
    } else {
      navigate(`/#${id}`);
    }
  }

  return (
    <>
      <li>
        <AnchorLink
          href="/#home"
          aria-label={t("header.nav.home.ariaLabel")}
          $active={homeIsActive}
          onClick={(e) => handleAnchorClick(e, "home")}
        >
          {t("header.nav.home.label")}
        </AnchorLink>
      </li>
      <li>
        <NavLink
          to={t("header.nav.projects.link")}
          aria-label={t("header.nav.projects.ariaLabel")}
        >
          {t("header.nav.projects.label")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={t("header.nav.about.link")}
          aria-label={t("header.nav.about.ariaLabel")}
        >
          {t("header.nav.about.label")}
        </NavLink>
      </li>
      <li>
        <AnchorLink
          href="/#contact"
          aria-label={t("header.nav.contact.ariaLabel")}
          $active={contactIsActive}
          onClick={(e) => handleAnchorClick(e, "contact")}
        >
          {t("header.nav.contact.label")}
        </AnchorLink>
      </li>
    </>
  );
}
