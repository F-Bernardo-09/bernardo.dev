import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../Button/Button";

const Wrapper = styled.div`
  padding: var(--spacing-xl) 0;
  max-width: 620px;
  margin: 0 auto;
`;

const Greeting = styled.h1`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }

  @media (max-width: 320px) {
    font-size: var(--font-size-md);
  }
`;

const Description = styled.div`
  p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    margin: 0 auto var(--spacing-lg) auto;

    @media (max-width: 480px) {
      font-size: var(--font-size-sm);
    }
  }
`;

const CTAWrapper = styled.div`
  margin-top: var(--spacing-lg);
`;

export default function HeroContent() {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Greeting>{t("hero.specialties")}</Greeting>
      <Description>
        <p>{t("hero.description")}</p>
      </Description>
      <SocialLinks />
      <CTAWrapper>
        <Button
          as={Link}
          aria-label={t("hero.aboutButton.ariaLabel")}
          to={t("hero.aboutButton.link")}
        >
          {t("hero.aboutButton.label")}
        </Button>
      </CTAWrapper>
    </Wrapper>
  );
}
