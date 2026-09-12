// Header.tsx
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NaveMenu from "./NaveMenu";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import { localizedPath } from "../../utils/localizedPath";

const HeaderWrapper = styled.header`
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: var(--spacing-md) 0;
  background-color: var(--bg-dark);
  z-index: 1000;

  @media (max-width: 480px) {
    padding: var(--spacing-sm) 0;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
`;

const BrandLogo = styled(Link)`
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-md);
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const NavigationMenu = styled.ul`
  display: flex;

  li {
    margin-left: var(--spacing-lg);
  }

  @media (max-width: 768px) {
    order: 3;
    width: 100%;
    flex-direction: column;
    margin-top: var(--spacing-sm);

    li {
      margin-left: 0;
      margin-bottom: var(--spacing-xs);
    }
  }
`;

export default function Header() {
  const { t, i18n } = useTranslation("common");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function updateHeaderHeight() {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerRef.current.offsetHeight}px`,
        );
      }
    }

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <HeaderWrapper ref={headerRef}>
      <div className="container">
        <Navbar>
          <BrandLogo
            to={localizedPath("/", i18n.language)}
            aria-label={t("header.logoAlt")}
            title={t("header.title")}
          >
            {t("header.name")}
          </BrandLogo>
          <NavRight>
            <NavigationMenu>
              <NaveMenu />
            </NavigationMenu>
            <LangSwitcher />
            <ThemeToggle />
          </NavRight>
        </Navbar>
      </div>
    </HeaderWrapper>
  );
}
