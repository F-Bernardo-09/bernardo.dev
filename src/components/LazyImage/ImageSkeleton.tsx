import styled, { keyframes } from "styled-components";

interface ImageSkeletonProps {
  visible?: boolean;
}

const shimmer = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

const StyledSkeleton = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  background-color: var(--bg-dark-accent);

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
  transition:
    opacity 0.3s ease-out ${({ $visible }) => ($visible ? "0s" : "0.2s")},
    visibility 0s linear ${({ $visible }) => ($visible ? "0s" : "0.5s")};

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
      100deg,
      transparent 20%,
      color-mix(in srgb, var(--text-secondary) 18%, transparent) 50%,
      transparent 80%
    );
    transform: translateX(-100%);
    animation: ${shimmer} 1.4s ease-in-out infinite;
    animation-play-state: ${({ $visible }) =>
      $visible ? "running" : "paused"};
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
    }
  }
`;

export default function ImageSkeleton({ visible = true }: ImageSkeletonProps) {
  return <StyledSkeleton $visible={visible} aria-hidden="true" />;
}
