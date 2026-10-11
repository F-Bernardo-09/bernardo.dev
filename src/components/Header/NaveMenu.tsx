import styled from "styled-components";
import {
  NavLink as RouterNavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { localizedPath } from "../../utils/localizedPath";
import { scrollToSection } from "../../utils/scrollToSection";

const linkStyles = `
  position: relative;
  display: inline-block;
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  transition: color var(--transition-base);
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: var(--accent-green);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform var(--transition-base);
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    width: fit-content;
    padding: var(--spacing-xs) 0;
  }
`;

const NavLink = styled(RouterNavLink)`
  ${linkStyles}

  &:hover,
  &.active {
    color: var(--accent-green);
  }

  &.active::after {
    transform: scaleX(0.3);
  }

  &.active:hover::after {
    transform: scaleX(1);
  }
`;

const AnchorLink = styled.a<{ $active?: boolean }>`
  ${linkStyles}
  color: ${(p) =>
    p.$active ? "var(--accent-green)" : "var(--text-secondary)"};

  &:hover {
    color: var(--accent-green);
  }

  ${(p) =>
    p.$active &&
    `
      &::after {
        transform: scaleX(0.3);
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}
`;

type NaveMenuProps = {
  onNavigate?: () => void;
};

export default function NaveMenu({ onNavigate }: NaveMenuProps) {
  const { t, i18n } = useTranslation("header");
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = /^\/(pt|en)?\/?$/.test(location.pathname);
  const activeSection = useScrollSpy(isHome ? ["home", "contact"] : []);

  const homeIsActive = isHome && activeSection === "home";
  const contactIsActive = isHome && activeSection === "contact";

  useEffect(() => {
    if (isHome && location.hash) {
      const id = location.hash.replace("#", "");
      scrollToSection(id);
    }
  }, [isHome, location.hash]);

  function handleAnchorClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    e.preventDefault();
    if (isHome) {
      scrollToSection(id);
      navigate(`${localizedPath("/", i18n.language)}#${id}`, { replace: true });
    } else {
      navigate(`${localizedPath("/", i18n.language)}#${id}`);
    }
    onNavigate?.();
  }

  return (
    <>
      <li>
        <AnchorLink
          href={`${localizedPath("/", i18n.language)}#home`}
          aria-label={t("nav.home.ariaLabel")}
          $active={homeIsActive}
          onClick={(e) => handleAnchorClick(e, "home")}
        >
          {t("nav.home.label")}
        </AnchorLink>
      </li>
      <li>
        <NavLink
          to={localizedPath("/projects", i18n.language)}
          aria-label={t("nav.projects.ariaLabel")}
          onClick={onNavigate}
        >
          {t("nav.projects.label")}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={localizedPath("/about", i18n.language)}
          aria-label={t("nav.about.ariaLabel")}
          onClick={onNavigate}
        >
          {t("nav.about.label")}
        </NavLink>
      </li>
      <li>
        <AnchorLink
          href={`${localizedPath("/", i18n.language)}#contact`}
          aria-label={t("nav.contact.ariaLabel")}
          $active={contactIsActive}
          onClick={(e) => handleAnchorClick(e, "contact")}
        >
          {t("nav.contact.label")}
        </AnchorLink>
      </li>
    </>
  );
}
