import { useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NaveMenu from "./NaveMenu";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import { localizedPath } from "../../utils/localizedPath";
import { useHeaderHeight } from "../../hooks/useHeaderHeight";

const HeaderWrapper = styled.header`
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: var(--spacing-md) 0;
  background-color: var(--bg-dark);
  border-bottom: var(--border-default);
  z-index: var(--z-header);

  @media (max-width: 480px) {
    padding: var(--spacing-sm) 0;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const NavigationMenu = styled.ul`
  display: flex;

  li {
    margin-left: var(--spacing-lg);
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const DesktopControls = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);

  @media (max-width: 1000px) {
    display: none;
  }
`;

export default function Header() {
  const { t, i18n } = useTranslation("header");
  const headerRef = useRef<HTMLElement>(null);

  useHeaderHeight(headerRef);

  return (
    <HeaderWrapper ref={headerRef}>
      <div className="container">
        <Navbar>
          <BrandLogo
            to={localizedPath("/", i18n.language)}
            aria-label={t("logoAlt")}
            title={t("title")}
          >
            {t("name")}
          </BrandLogo>
          <NavRight>
            <NavigationMenu>
              <NaveMenu />
            </NavigationMenu>
            <DesktopControls>
              <LangSwitcher />
              <ThemeToggle />
            </DesktopControls>
            <MobileMenu />
          </NavRight>
        </Navbar>
      </div>
    </HeaderWrapper>
  );
}
