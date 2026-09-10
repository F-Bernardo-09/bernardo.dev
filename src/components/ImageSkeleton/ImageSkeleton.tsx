import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`;

const StyledSkeleton = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--bg-dark-accent);
  background-image: linear-gradient(
    100deg,
    transparent 20%,
    color-mix(in srgb, var(--text-secondary) 18%, transparent) 50%,
    transparent 80%
  );
  background-size: 468px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.4s ease-in-out infinite;
`;

export default function ImageSkeleton() {
  return <StyledSkeleton aria-hidden="true" />;
}
