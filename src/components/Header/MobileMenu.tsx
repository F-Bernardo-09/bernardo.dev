import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import NaveMenu from "./NaveMenu";
import ThemeToggle from "./ThemeToggle";
import LangSwitcher from "./LangSwitcher";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";

const MenuToggle = styled.button<{ $isOpen: boolean }>`
  display: none;
  position: relative;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.span<{ $isOpen: boolean }>`
  width: 100%;
  height: 2px;
  background-color: var(--accent-green);
  border-radius: var(--radius-sm);
  transform: rotate(0deg);
  transition:
    transform var(--transition-base),
    width var(--transition-base),
    opacity var(--transition-base),
    margin-left var(--transition-base);
  margin-left: ${(p) => (p.$isOpen ? "7px" : "0")};

  &:nth-child(1) {
    transform: ${(p) => (p.$isOpen ? "rotate(45deg)" : "rotate(0deg)")};
    transform-origin: left center;
  }

  &:nth-child(2) {
    margin-left: 0;
    width: ${(p) => (p.$isOpen ? "0%" : "100%")};
    opacity: ${(p) => (p.$isOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${(p) => (p.$isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
    transform-origin: left center;
  }
`;

const Backdrop = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: var(--header-height);
    left: 0;
    width: 100%;
    height: calc(100vh - var(--header-height));
    background-color: var(--overlay-color);
    z-index: var(--z-backdrop);

    opacity: ${(p) => (p.$isOpen ? 1 : 0)};
    visibility: ${(p) => (p.$isOpen ? "visible" : "hidden")};
    transition:
      opacity var(--transition-base),
      visibility var(--transition-base);
  }
`;

const Drawer = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    top: var(--header-height);
    right: 0;
    width: min(280px, 80vw);
    height: calc(100vh - var(--header-height));
    background-color: var(--bg-dark);
    padding: var(--spacing-lg);
    z-index: var(--z-drawer);

    transform: translateX(${(p) => (p.$isOpen ? "0" : "100%")});
    transition: transform var(--transition-base);

    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: var(--spacing-md);
      list-style: none;
      width: 100%;
      padding: 0;
      margin: 0;
    }

    li {
      width: 100%;
    }
  }
`;

const DrawerFooter = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
  padding-top: var(--spacing-md);
  border-top: var(--border-default);
  width: 100%;
`;

export default function MobileMenu() {
  const { t } = useTranslation("header");
  const [isOpen, setIsOpen] = useState(false);

  useBodyScrollLock(isOpen);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <MenuToggle
        type="button"
        aria-label={
          isOpen ? t("nav.menuToggle.close") : t("nav.menuToggle.open")
        }
        aria-expanded={isOpen}
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Bar $isOpen={isOpen} />
        <Bar $isOpen={isOpen} />
        <Bar $isOpen={isOpen} />
      </MenuToggle>

      <Backdrop $isOpen={isOpen} onClick={close} />

      <Drawer $isOpen={isOpen}>
        <ul>
          <NaveMenu onNavigate={close} />
        </ul>
        <DrawerFooter>
          <LangSwitcher />
          <ThemeToggle />
        </DrawerFooter>
      </Drawer>
    </>
  );
}
