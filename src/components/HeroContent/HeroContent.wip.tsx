import styled from "styled-components";
import { useTranslation } from "react-i18next";
import SocialLinks from "../SocialLinks/SocialLinks";

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

export default function HeroContent() {
  const { t } = useTranslation("common");

  return (
    <Wrapper>
      <Greeting>{t("hero.specialties")}</Greeting>
      <Description>
        <p>{t("hero.description")}</p>
      </Description>
      <SocialLinks />
    </Wrapper>
  );
}
