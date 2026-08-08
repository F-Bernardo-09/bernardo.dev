import styled from "styled-components";
import HeroImage from "../HeroImage/HeroImage";
import HeroContent from "../HeroContent/HeroContent";

const HeroSection = styled.section`
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
          <HeroImage />
          <HeroContent />
        </HeroContainer>
      </div>
    </HeroSection>
  );
}
