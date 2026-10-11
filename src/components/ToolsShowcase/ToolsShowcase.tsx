import styled from "styled-components";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiPython,
  SiC,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiSupabase,
  SiSequelize,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiDocker,
  SiIntellijidea,
  SiPycharm,
  SiJupyter,
  SiGooglecolab,
  SiInsomnia,
  SiVercel,
  SiNetlify,
  SiRender,
  SiFigma,
  SiInkscape,
  SiGimp,
  SiBlender,
  SiTrello,
  SiNotion,
  SiAsana,
  SiDiscord,
} from "react-icons/si";
import { FaJava, FaGithub, FaSlack } from "react-icons/fa";
import { TbSql, TbApi, TbMap, TbLayoutGrid, TbCode } from "react-icons/tb";
import { DiPhotoshop, DiIllustrator } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { BsMicrosoftTeams } from "react-icons/bs";
import { SectionHeader } from "../SectionHeader/SectionHeader";

interface ToolItem {
  name: string;
  link: string;
}

interface ToolCategory {
  name: string;
  items: ToolItem[];
}

const FallbackIcon: IconType = TbCode;

const icons: Record<string, IconType> = {
  HTML: SiHtml5,
  HTML5: SiHtml5,
  CSS: SiCss,
  SCSS: SiSass,
  "CSS3 / SCSS": SiSass,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Vite: SiVite,
  Java: FaJava,
  Python: SiPython,
  C: SiC,
  "REST APIs": TbApi,
  JWT: SiJsonwebtokens,
  SQL: TbSql,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  "MongoDB Atlas": SiMongodb,
  PostGIS: TbMap,
  Redis: SiRedis,
  Supabase: SiSupabase,
  Sequelize: SiSequelize,
  Git: SiGit,
  GitHub: SiGithub,
  "Git & GitHub": SiGithub,
  "GitHub Pages": FaGithub,
  "GitHub Projects": FaGithub,
  "GitHub Issues": FaGithub,
  "GitHub Actions": SiGithubactions,
  Docker: SiDocker,
  "VS Code": VscVscode,
  "IntelliJ IDEA": SiIntellijidea,
  PyCharm: SiPycharm,
  "Jupyter Notebook": SiJupyter,
  "Google Colab": SiGooglecolab,
  Insomnia: SiInsomnia,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Render: SiRender,
  Figma: SiFigma,
  Photoshop: DiPhotoshop,
  Illustrator: DiIllustrator,
  InDesign: TbLayoutGrid,
  Inkscape: SiInkscape,
  CorelDRAW: TbLayoutGrid,
  GIMP: SiGimp,
  Blender: SiBlender,
  Trello: SiTrello,
  Notion: SiNotion,
  Asana: SiAsana,
  Slack: FaSlack,
  Discord: SiDiscord,
  "Microsoft Teams": BsMicrosoftTeams,
};

const ToolsSection = styled.section``;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const CategoryTitle = styled.h3`
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  color: var(--text-primary);
`;

const ToolList = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
`;

const ToolName = styled.span`
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.35em;
  text-decoration-color: currentColor;
  transition: text-decoration-color var(--transition-fast);
`;

const ToolLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);

  padding: 0.65rem 1.2rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-color);

  font-size: var(--font-size-sm);
  line-height: 1.2;
  color: var(--text-secondary);
  background-color: var(--bg-dark-accent);

  text-decoration: none;

  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);

  svg {
    font-size: var(--font-size-base);
    flex-shrink: 0;
    color: var(--text-secondary);
    transition: color var(--transition-fast);
  }

  &:hover,
  &:focus-visible {
    color: var(--accent-green);
    border-color: var(--accent-green);
    text-decoration: none;

    svg {
      color: var(--accent-green);
    }
  }
`;

export default function ToolsShowcase() {
  const { t } = useTranslation("tools");
  const categories = t("categories", {
    returnObjects: true,
  }) as ToolCategory[];

  return (
    <ToolsSection aria-label={t("sectionAriaLabel")}>
      <div className="container">
        <SectionHeader title={t("title")} subtitle={t("subtitle")} />
        <Categories>
          {categories.map((category) => (
            <Category key={category.name}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <ToolList aria-label={category.name}>
                {category.items.map((tool) => {
                  const Icon = icons[tool.name] ?? FallbackIcon;

                  return (
                    <ToolLink
                      key={tool.name}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" />
                      <ToolName>{tool.name}</ToolName>
                    </ToolLink>
                  );
                })}
              </ToolList>
            </Category>
          ))}
        </Categories>
      </div>
    </ToolsSection>
  );
}
