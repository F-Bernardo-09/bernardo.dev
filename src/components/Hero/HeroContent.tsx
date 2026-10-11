import type { CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";
import Button from "../Button/Button";
import { localizedPath } from "../../utils/localizedPath";

const STAGGER_MS = 120;

const fadeUp = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(0.5em);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: none;
  }
`;

const animation = css`
  animation: ${fadeUp} 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Wrapper = styled.div`
  padding: var(--spacing-xl) 0;
  max-width: 700px;
  margin: 0 auto;
`;

const Greeting = styled.h1`
  margin-bottom: var(--spacing-sm);

  @media (max-width: 320px) {
    font-size: var(--font-size-md);
  }
`;

const Word = styled.span`
  display: inline-block;
  margin-right: 0.25em;
  ${animation}
  animation-delay: calc(var(--index) * ${STAGGER_MS}ms);

  &:last-child {
    margin-right: 0;
  }
`;

const Reveal = styled.div`
  ${animation}
`;

const Description = styled.p`
  font-size: var(--font-size-md);
  color: var(--text-secondary);
  margin: 0 auto var(--spacing-lg);

  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
  }
`;

const CTAWrapper = styled.div`
  margin-top: var(--spacing-lg);
`;

export default function HeroContent() {
  const { t, i18n } = useTranslation("hero");

  const title = t("specialties");
  const words = title.split(" ").filter(Boolean);

  return (
    <Wrapper>
      <Greeting aria-label={title}>
        {words.map((word, index) => (
          <Word
            key={index}
            aria-hidden="true"
            style={{ "--index": index } as CSSProperties}
          >
            {word}
          </Word>
        ))}
      </Greeting>

      <Reveal style={{ animationDelay: `${words.length * STAGGER_MS}ms` }}>
        <Description>{t("description")}</Description>
        <SocialLinks />
        <CTAWrapper>
          <Button
            as={Link}
            aria-label={t("aboutButton.ariaLabel")}
            to={localizedPath("/about", i18n.language)}
          >
            {t("aboutButton.label")}
          </Button>
        </CTAWrapper>
      </Reveal>
    </Wrapper>
  );
}
