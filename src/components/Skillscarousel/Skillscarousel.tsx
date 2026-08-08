import styled, { keyframes } from "styled-components";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiPython,
  SiMongodb,
  SiGit,
  SiFigma,
  SiBlender,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";

const skills = [
  { name: "HTML", icon: SiHtml5 },
  { name: "CSS", icon: SiCss },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "Vite", icon: SiVite },
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "SQL", icon: TbSql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "Figma", icon: SiFigma },
  { name: "Photoshop", icon: DiPhotoshop },
  { name: "Illustrator", icon: DiIllustrator },
  { name: "Blender", icon: SiBlender },
];

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: var(--spacing-lg) 0;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 10%,
    black 90%,
    transparent
  );
`;

const Track = styled.div`
  display: flex;
  width: max-content;
  animation: ${scroll} 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--accent-green);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 var(--spacing-lg);
`;

export default function SkillsCarousel() {
  const doubledSkills = [...skills, ...skills];

  return (
    <CarouselWrapper>
      <Track>
        {doubledSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <IconWrapper key={`${skill.name}-${index}`} title={skill.name}>
              <Icon />
            </IconWrapper>
          );
        })}
      </Track>
    </CarouselWrapper>
  );
}
