import styled from "styled-components";

interface ProjectFilterProps {
  categories: string[];
  selected: string[];
  onToggle: (category: string) => void;
  onClear: () => void;
  allLabel: string;
}

const FilterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`;

const FilterPill = styled.button<{ $active: boolean }>`
  padding: var(--spacing-xs) var(--spacing-md);
  border: 1px solid
    ${({ $active }) =>
      $active ? "var(--accent-green)" : "var(--text-secondary)"};

  border-radius: var(--radius-pill);
  background-color: ${({ $active }) =>
    $active ? "var(--accent-green)" : "var(--bg-dark-accent)"};
  color: ${({ $active }) =>
    $active ? "var(--text-dark)" : "var(--text-secondary)"};

  font-family: var(--font-family-base);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-body);

  cursor: pointer;
  white-space: nowrap;

  transition:
    background-color var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    border-color: var(--accent-green);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 3px;
  }
`;

export default function ProjectFilter({
  categories,
  selected,
  onToggle,
  onClear,
  allLabel,
}: ProjectFilterProps) {
  const isAllActive = selected.length === 0;

  return (
    <FilterList role="group" aria-label={allLabel}>
      <FilterPill
        type="button"
        $active={isAllActive}
        aria-pressed={isAllActive}
        onClick={onClear}
      >
        {allLabel}
      </FilterPill>

      {categories.map((category) => {
        const isActive = selected.includes(category);

        return (
          <FilterPill
            key={category}
            type="button"
            $active={isActive}
            aria-pressed={isActive}
            onClick={() => onToggle(category)}
          >
            {category}
          </FilterPill>
        );
      })}
    </FilterList>
  );
}
