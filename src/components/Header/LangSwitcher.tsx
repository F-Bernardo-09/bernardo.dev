import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { localizedPath } from "../../utils/localizedPath";

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
  const { t } = useTranslation("system");
  const location = useLocation();
  const navigate = useNavigate();

  function toggleLanguage() {
    const next = i18n.language === "pt" ? "en" : "pt";
    const segments = location.pathname.split("/").filter(Boolean);
    if (segments[0] === "pt" || segments[0] === "en") segments.shift();
    const path = segments.length === 0 ? "/" : `/${segments.join("/")}`;
    void i18n.changeLanguage(next);
    localStorage.setItem("lang", next);
    navigate(`${localizedPath(path, next)}${location.hash}`);
  }

  return (
    <SwitchButton
      onClick={toggleLanguage}
      aria-label={t("ui.languageToggle.aria-label")}
    >
      {i18n.language === "pt" ? "EN" : "PT"}
    </SwitchButton>
  );
}
