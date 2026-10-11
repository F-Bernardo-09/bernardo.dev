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
  display: inline-flex;
  align-items: center;
  line-height: 1;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  text-decoration: none;

  &:hover {
    color: var(--accent-green);
  }
`;

export default function Footer() {
  const { t, i18n } = useTranslation("footer");

  return (
    <StyledFooter aria-label={t("footerAriaLabel")}>
      <div className="container">
        <FooterContent>
          <Copyright
            to={`${localizedPath("/", i18n.language)}#home`}
            aria-label={t("homeLinkAriaLabel")}
          >
            {t("copyrightTemplate", {
              startYear: t("startYear"),
            })}
          </Copyright>
          <SocialLinks />
        </FooterContent>
      </div>
    </StyledFooter>
  );
}
