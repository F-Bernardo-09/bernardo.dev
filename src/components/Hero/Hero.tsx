import styled from "styled-components";
import HeroImage from "../HeroImage/HeroImage";
import HeroContent from "../HeroContent/HeroContent";

const HeroSection = styled.section`
  padding: var(--spacing-xl) 0;
  text-align: left;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <div className="hero-container">
          <HeroImage />
          <HeroContent />
        </div>
      </HeroContainer>
    </HeroSection>
  );
}
