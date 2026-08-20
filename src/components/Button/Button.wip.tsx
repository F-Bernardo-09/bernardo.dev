import styled from "styled-components";
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";

type AsProp<C extends ElementType> = {
  as?: C;
};

type ButtonProps<C extends ElementType = "a"> = AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AsProp<C>> & {
    children: ReactNode;
  };

const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: var(--border-accent);
  cursor: pointer;
  background-color: transparent;
  color: var(--accent-green);
  border-radius: var(--radius-pill);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  padding: calc(0.8rem - 2px) 1.5rem calc(0.8rem - 2px) 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-color 0.3s ease;

  &:hover,
  &:focus-visible {
    background-color: var(--accent-green);
    color: var(--text-dark);
    font-weight: var(--font-weight-bold);
  }

  &:focus-visible {
    outline: 2px solid var(--accent-green);
    outline-offset: 3px;
  }

  .button__icon-wrapper {
    position: relative;
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    color: var(--accent-green);
    background-color: transparent;

    border-radius: var(--radius-circle);
    overflow: hidden;

    transition:
      background-color 0.3s ease,
      border-color 0.3s ease,
      color 0.3s ease;
  }

  &:hover .button__icon-wrapper,
  &:focus-visible .button__icon-wrapper {
    color: var(--accent-green);
    background-color: var(--text-dark);
    border-color: var(--text-dark);
  }

  .button__icon-svg {
    transition: transform 0.3s ease-in-out;
  }

  .button__icon-svg--copy {
    position: absolute;
    transform: translate(-150%, 150%);
  }

  &:hover .button__icon-svg:first-child,
  &:focus-visible .button__icon-svg:first-child {
    transform: translate(150%, -150%);
  }

  &:hover .button__icon-svg--copy,
  &:focus-visible .button__icon-svg--copy {
    transition: transform 0.3s ease-in-out 0.1s;
    transform: translate(0);
  }
`;

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width="10"
  >
    <path
      d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
      fill="currentColor"
    />
  </svg>
);

export default function Button<C extends ElementType = "a">({
  as,
  children,
  ...rest
}: ButtonProps<C>) {
  const Component = as ?? "a";

  return (
    <StyledButton as={Component} {...rest}>
      {children}
      <span className="button__icon-wrapper">
        <ArrowIcon className="button__icon-svg" />
        <ArrowIcon className="button__icon-svg button__icon-svg--copy" />
      </span>
    </StyledButton>
  );
}
