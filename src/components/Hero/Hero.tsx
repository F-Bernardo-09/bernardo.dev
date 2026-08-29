import styled from "styled-components";
import HeroContent from "./HeroContent";

const HeroSection = styled.section`
  min-height: calc(100vh - var(--header-height, 80px));
  display: flex;
  align-items: center;
  padding: var(--spacing-xl) 0;
  text-align: left;

  @media (max-width: 480px) {
    padding: var(--spacing-lg) 0;
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Hero() {
  return (
    <HeroSection id="home">
      <div className="container">
        <HeroContainer>
          <HeroContent />
        </HeroContainer>
      </div>
    </HeroSection>
  );
}
