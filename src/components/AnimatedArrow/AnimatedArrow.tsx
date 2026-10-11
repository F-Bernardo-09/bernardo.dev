import styled from "styled-components";

export type IconDirection = "up-right" | "up" | "right" | "down";

const ROTATION: Record<IconDirection, number> = {
  "up-right": 0,
  up: -45,
  right: 45,
  down: 135,
};

const Wrapper = styled.span`
  --icon-exit: translate(250%, -250%);
  --icon-enter: translate(-250%, 250%);

  &[data-direction="up"] {
    --icon-exit: translate(0, -250%);
    --icon-enter: translate(0, 250%);
  }

  &[data-direction="right"] {
    --icon-exit: translate(250%, 0);
    --icon-enter: translate(-250%, 0);
  }

  &[data-direction="down"] {
    --icon-exit: translate(0, 250%);
    --icon-enter: translate(0, -250%);
  }

  position: relative;
  display: grid;
  place-items: center;
  flex-shrink: 0;

  .arrow__svg {
    overflow: visible;
    transition: transform 0.3s ease-in-out;
  }

  .arrow__svg--copy {
    position: absolute;
    transform: var(--icon-enter);
  }

  .arrow-trigger:hover &,
  .arrow-trigger:focus-visible & {
    .arrow__svg:first-child {
      transform: var(--icon-exit);
    }

    .arrow__svg--copy {
      transition: transform 0.3s ease-in-out 0.1s;
      transform: translate(0);
    }
  }
`;

const ArrowSvg = ({
  className,
  rotation,
  size,
}: {
  className?: string;
  rotation: number;
  size: number;
}) => (
  <svg
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    aria-hidden="true"
  >
    <g transform={`rotate(${rotation} 7 7.5)`}>
      <path
        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
        fill="currentColor"
      />
    </g>
  </svg>
);

interface AnimatedArrowProps {
  direction?: IconDirection;
  size?: number;
}

export default function AnimatedArrow({
  direction = "up-right",
  size = 14,
}: AnimatedArrowProps) {
  const rotation = ROTATION[direction];

  return (
    <Wrapper data-direction={direction} aria-hidden="true">
      <ArrowSvg className="arrow__svg" rotation={rotation} size={size} />
      <ArrowSvg
        className="arrow__svg arrow__svg--copy"
        rotation={rotation}
        size={size}
      />
    </Wrapper>
  );
}
