import styled, { keyframes } from "styled-components";
import HeroContent from "./HeroContent";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  min-height: calc(100vh - var(--header-height, 80px));
  display: flex;
  align-items: center;
  padding: 0;
  text-align: left;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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
