import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";
import { localizedPath } from "../../utils/localizedPath";

const StyledFooter = styled.footer`
  padding: var(--spacing-lg) 0;
  border-top: var(--border-default);
  margin-top: calc(2 * var(--spacing-xl));

  @media (max-width: 480px) {
    padding: var(--spacing-md) 0;
    margin-top: var(--spacing-xl);
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
`;

const Copyright = styled(Link)`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  text-decoration: none;

  &:hover {
    color: var(--text-primary);
  }
`;

export default function Footer() {
  const { t, i18n } = useTranslation("common");

  return (
    <StyledFooter aria-label={t("footer.ariaLabel")}>
      <div className="container">
        <FooterContent>
          <Copyright
            to={`${localizedPath("/", i18n.language)}#home`}
            aria-label={t("footer.homeLinkAriaLabel")}
          >
            {t("footer.copyrightTemplate", {
              startYear: t("footer.copyrightStartYear"),
            })}
          </Copyright>
          <SocialLinks />
        </FooterContent>
      </div>
    </StyledFooter>
  );
}
