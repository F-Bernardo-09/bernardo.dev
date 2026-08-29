import styled from "styled-components";
import { useTranslation } from "react-i18next";

const SwitchButton = styled.button`
  background: none;
  border: var(--border-default);
  border-radius: var(--radius-card);
  color: var(--text-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  padding: 4px 10px;
  cursor: pointer;
  transition:
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover {
    color: var(--accent-green);
    border-color: var(--accent-green);
  }
`;

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  function toggleLanguage() {
    const next = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
  }

  return (
    <SwitchButton onClick={toggleLanguage} aria-label="Alternar idioma">
      {i18n.language === "pt" ? "EN" : "PT"}
    </SwitchButton>
  );
}
