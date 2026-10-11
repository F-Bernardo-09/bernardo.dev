import styled from "styled-components";

interface SectionHeaderProps {
  title: string;
  subtitle?: string | null;
}

interface HeaderStyleProps {
  $hasSubtitle: boolean;
}

const Wrapper = styled.div<HeaderStyleProps>`
  margin-bottom: ${({ $hasSubtitle }) =>
    $hasSubtitle ? "var(--spacing-lg)" : "var(--spacing-md)"};
`;

const Title = styled.h2<HeaderStyleProps>`
  font-size: var(--font-size-h2);
  margin-bottom: ${({ $hasSubtitle }) =>
    $hasSubtitle ? "var(--spacing-xs)" : "0"};
`;

const Subtitle = styled.p`
  font-size: var(--font-size-md);
  color: var(--text-secondary);
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: var(--font-size-base);
  }
`;

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  const hasSubtitle = Boolean(subtitle);

  return (
    <Wrapper $hasSubtitle={hasSubtitle}>
      <Title $hasSubtitle={hasSubtitle}>{title}</Title>
      {hasSubtitle && <Subtitle>{subtitle}</Subtitle>}
    </Wrapper>
  );
};
