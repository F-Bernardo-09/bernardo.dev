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
  margin-top: var(--spacing-md);
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-size: var(--font-size-md);
  transition: color 0.2s ease;

  &:hover {
    color: var(--accent-green);
  }
`;

export default function SocialLinks() {
  const { t } = useTranslation("common");
  const social = t("contact.social", { returnObjects: true }) as SocialItem[];

  return (
    <List aria-label={t("hero.socialLinksAriaLabel")}>
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
