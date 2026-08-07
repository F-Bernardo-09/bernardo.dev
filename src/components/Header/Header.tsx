import styled from "styled-components";
import { Link } from "react-router-dom";
import pt from "../../locales/pt-br.json";
import NaveMenu from "../NaveMenu/NaveMenu";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

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
  return (
    <HeaderWrapper>
      <div className="container">
        <Navbar>
          <BrandLogo
            to="/"
            aria-label={pt.header.logoAlt}
            title={pt.header.title}
          >
            {pt.header.name}
          </BrandLogo>

          <ThemeToggle />

          <NavigationMenu>
            <NaveMenu />
          </NavigationMenu>
        </Navbar>
      </div>
    </HeaderWrapper>
  );
}
