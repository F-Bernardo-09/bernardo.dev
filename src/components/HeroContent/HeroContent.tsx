import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

const Wrapper = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

const Greeting = styled.h1`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);

  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }

  @media (max-width: 320px) {
    font-size: var(--font-size-md);
  }
`;

const Specialties = styled.div`
  font-size: var(--font-size-md);
  color: var(--accent-green);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-body);

  span {
    color: var(--accent-green);
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
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

export default function HeroContent() {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Greeting>{t("hero.greeting")}</Greeting>
      <Specialties>{t("hero.specialties")}</Specialties>
      <Description>
        <p>{t("hero.description")}</p>
      </Description>
      <Button
        as={Link}
        aria-label={t("hero.aboutButton.ariaLabel")}
        to={t("hero.aboutButton.link")}
      >
        {t("hero.aboutButton.label")}
      </Button>
    </Wrapper>
  );
}
