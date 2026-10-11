import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { FaBehance, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import type { IconType } from "react-icons";

interface SocialItem {
  name: string;
  label: string;
  link: string;
  ariaLabel: string;
}

const icons: Record<string, IconType> = {
  Behance: FaBehance,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};

const List = styled.nav`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialLink = styled.a`
  position: relative;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: var(--font-size-md);
  transition: color 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: var(--radius-circle);
    background: var(--bg-dark-accent);
    opacity: 0;
    transition: opacity 0.2s ease;
    z-index: -1;
  }

  &:hover {
    color: var(--accent-green);
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default function SocialLinks() {
  const { t } = useTranslation("contact");
  const { t: tHero } = useTranslation("hero");
  const social = t("social", { returnObjects: true }) as SocialItem[];

  return (
    <List aria-label={tHero("socialLinksAriaLabel")}>
      {social.map((item) => {
        const Icon = icons[item.name];
        if (!Icon) return null;

        return (
          <SocialLink
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
          >
            <Icon />
          </SocialLink>
        );
      })}
    </List>
  );
}
