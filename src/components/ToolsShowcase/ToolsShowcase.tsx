import styled from "styled-components";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiVite,
  SiPython,
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
import { TbSql, TbApi, TbMap, TbLayoutGrid } from "react-icons/tb";
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

// Ferramentas sem ícone de marca disponível no react-icons usam um ícone genérico.
const icons: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
  SCSS: SiSass,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Express: SiExpress,
  Vite: SiVite,
  Java: FaJava,
  Python: SiPython,
  C: TbSql,
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
  gap: var(--spacing-lg);
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const CategoryTitle = styled.h3`
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Grid = styled.nav`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--spacing-sm);
`;

const ToolLink = styled.a`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-sm);
  border-radius: 8px;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  transition:
    color 0.2s ease,
    background 0.2s ease;

  &:hover {
    color: var(--accent-green);
    background: var(--surface-hover, rgba(255, 255, 255, 0.04));
  }

  svg {
    font-size: 1.4rem;
    flex-shrink: 0;
  }
`;

export default function ToolsShowcase() {
  const { t } = useTranslation("tools");
  const categories = t("categories", {
    returnObjects: true,
  }) as ToolCategory[];

  return (
    <ToolsSection aria-label={t("ariaLabel")}>
      <div className="container">
        <SectionHeader title={t("title")} />
        <Categories>
          {categories.map((category) => (
            <Category key={category.name}>
              <CategoryTitle>{category.name}</CategoryTitle>
              <Grid aria-label={category.name}>
                {category.items.map((tool) => {
                  const Icon = icons[tool.name];
                  if (!Icon) return null;

                  return (
                    <ToolLink
                      key={tool.name}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon aria-hidden="true" />
                      <span>{tool.name}</span>
                    </ToolLink>
                  );
                })}
              </Grid>
            </Category>
          ))}
        </Categories>
      </div>
    </ToolsSection>
  );
}
