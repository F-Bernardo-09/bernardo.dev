import styled from "styled-components";
import { formatRange } from "../../utils/dateRange";
import { RangeText } from "./RangeText";
import type { Role } from "../../types";

const TrajectoryWrapper = styled.div<{ $expanded: boolean }>`
  display: grid;
  grid-template-rows: ${({ $expanded }) => ($expanded ? "1fr" : "0fr")};
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};

  transition:
    grid-template-rows var(--transition-slow),
    opacity var(--transition-slow);
`;

const TrajectoryInner = styled.div`
  overflow: hidden;
`;

const RolesList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  margin-top: var(--spacing-md);
  padding-left: 1.25rem;

  &::before {
    content: "";
    position: absolute;
    left: 0.25rem;
    top: 0.4rem;
    bottom: 0.4rem;
    width: 1px;
    background-color: var(--border-color);
  }
`;

const RoleItem = styled.li<{ $current: boolean }>`
  position: relative;
  list-style: none;

  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-sm);

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 0.35rem;

    width: 0.5rem;
    height: 0.5rem;
    border-radius: var(--radius-circle);

    background-color: ${({ $current }) =>
      $current ? "var(--accent-green)" : "var(--border-color)"};
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.15rem;
  }
`;

const RoleTitle = styled.span`
  font-size: var(--font-size-sm);
  color: var(--text-primary);
`;

const RolePeriod = styled.span`
  flex-shrink: 0;
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  white-space: nowrap;
`;

interface RoleTrajectoryProps {
  roles: Role[];
  expanded: boolean;
  id: string;
}

export default function RoleTrajectory({
  roles,
  expanded,
  id,
}: RoleTrajectoryProps) {
  return (
    <TrajectoryWrapper $expanded={expanded}>
      <TrajectoryInner id={id}>
        <RolesList>
          {roles.map((role, index) => {
            const range = formatRange(role.period.start, role.period.end);
            return (
              <RoleItem
                key={role.id}
                $current={index === 0 && role.period.end === null}
                aria-label={role.ariaLabel}
              >
                <RoleTitle>{role.title}</RoleTitle>
                <RolePeriod>
                  <RangeText {...range} />
                </RolePeriod>
              </RoleItem>
            );
          })}
        </RolesList>
      </TrajectoryInner>
    </TrajectoryWrapper>
  );
}
