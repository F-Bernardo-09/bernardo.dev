import styled from "styled-components";

interface SocialNetworkCardProps {
  name: string;
  label: string;
  link: string;
  ariaLabel: string;
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

const Title = styled.h3`
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-xs);
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: var(--font-size-base);
  transition: color 0.3s ease;
  word-break: break-all;

  &:hover {
    color: var(--text-primary);
    text-decoration: underline;
  }
`;

export default function SocialNetworkCard({
  name,
  label,
  link,
  ariaLabel,
}: SocialNetworkCardProps) {
  return (
    <CardWrapper>
      <Title>{name}</Title>
      <SocialLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {label}
      </SocialLink>
    </CardWrapper>
  );
}
