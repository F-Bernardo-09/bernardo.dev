import styled from "styled-components";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

const Wrapper = styled.div`
  margin-bottom: var(--spacing-md);
`;

const Title = styled.h2`
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
`;

const Subtitle = styled.p`
  font-size: var(--font-size-md);
  color: var(--text-secondary);
  max-width: 65%;
`;

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};
