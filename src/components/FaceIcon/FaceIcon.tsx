import styled, { keyframes } from "styled-components";

const eyes = keyframes`
  from { transform: translateY(112.5px); }
  to { transform: translateY(15px); }
`;

const eyeLid = keyframes`
  0%, 40%, 45%, 100% { transform: translateY(0); }
  42.5% { transform: translateY(17.5px); }
`;

const pupil = keyframes`
  0%, 37.5%, 40%, 45%, 87.5%, 100% {
    stroke-dashoffset: 0;
    transform: translate(0, 0);
  }
  12.5%, 25%, 62.5%, 75% {
    transform: translate(-35px, 0);
  }
  42.5% {
    stroke-dashoffset: 35;
    transform: translate(0, 17.5px);
  }
`;

const mouthLeft = keyframes`
  from, 50% { stroke-dashoffset: -102; }
  to { stroke-dashoffset: 0; }
`;

const mouthRight = keyframes`
  from, 50% { stroke-dashoffset: 102; }
  to { stroke-dashoffset: 0; }
`;

const nose = keyframes`
  from { transform: translate(0, 0); }
  to { transform: translate(0, 22.5px); }
`;

const FaceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent-green);
`;

const Face = styled.svg`
  width: 160px;
  height: auto;

  .face__eyes {
    animation: ${eyes} 1s 0.3s forwards;
  }

  .face__eye-lid {
    animation: ${eyeLid} 4s 1.3s infinite forwards;
  }

  .face__pupil {
    animation: ${pupil} 4s 1.3s infinite forwards;
  }

  .face__mouth-left {
    animation: ${mouthLeft} 1s 0.3s forwards;
  }

  .face__mouth-right {
    animation: ${mouthRight} 1s 0.3s forwards;
  }

  .face__nose {
    animation: ${nose} 1s 0.3s forwards;
  }

  @media (prefers-reduced-motion: reduce) {
    .face__eyes,
    .face__eye-lid,
    .face__pupil,
    .face__mouth-left,
    .face__mouth-right,
    .face__nose {
      animation: none;
    }
    .face__eyes {
      transform: translateY(15px);
    }
  }
`;

export default function FaceIcon() {
  return (
    <FaceContainer aria-hidden="true">
      <Face viewBox="0 0 320 380">
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="25"
        >
          <g className="face__eyes" transform="translate(0,112.5)">
            <g transform="translate(15,0)">
              <polyline className="face__eye-lid" points="37,0 0,120 75,120" />
              <polyline
                className="face__pupil"
                points="55,120 55,155"
                strokeDasharray="35 35"
              />
            </g>
            <g transform="translate(230,0)">
              <polyline className="face__eye-lid" points="37,0 0,120 75,120" />
              <polyline
                className="face__pupil"
                points="55,120 55,155"
                strokeDasharray="35 35"
              />
            </g>
          </g>
          <rect
            className="face__nose"
            x="132.5"
            y="112.5"
            width="55"
            height="155"
            rx="4"
            ry="4"
          />
          <g transform="translate(65,334)" strokeDasharray="102 102">
            <path className="face__mouth-left" d="M 0 30 C 0 30 40 0 95 0" />
            <path
              className="face__mouth-right"
              d="M 95 0 C 150 0 190 30 190 30"
            />
          </g>
        </g>
      </Face>
    </FaceContainer>
  );
}
