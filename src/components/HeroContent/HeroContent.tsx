import styled from "styled-components";
import { Link } from "react-router-dom";
import pt from "../../locales/pt-br.json";
import Button from "../Button/Button";

const Wrapper = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

const Greeting = styled.h1`
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
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
`;

const Description = styled.div`
  p {
    font-size: var(--font-size-base);
    color: var(--text-secondary);
    margin: 0 auto var(--spacing-lg) auto;
  }
`;

export default function HeroContent() {
  return (
    <Wrapper>
      <Greeting>{pt.hero.greeting}</Greeting>

      <Specialties>{pt.hero.specialties}</Specialties>

      <Description>
        <p>{pt.hero.description}</p>
      </Description>

      <Link
        className="btn-primary"
        aria-label={pt.hero.aboutButton.ariaLabel}
        to={pt.hero.aboutButton.link}
      >
        {pt.hero.aboutButton.label}
      </Link>
    </Wrapper>
  );
}
