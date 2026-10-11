import styled from "styled-components";
import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import AnimatedArrow from "../AnimatedArrow/AnimatedArrow";
import type { IconDirection } from "../AnimatedArrow/AnimatedArrow";

type AsProp<C extends ElementType> = {
  as?: C;
};

type ButtonProps<C extends ElementType = "a"> = AsProp<C> &
  Omit<ComponentPropsWithoutRef<C>, keyof AsProp<C>> & {
    children: ReactNode;
    showIcon?: boolean;
    iconDirection?: IconDirection;
  };

const StyledButton = styled.a`
  --button-color: var(--text-primary);
  --button-color-active: var(--accent-green);

  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  border: 1px solid var(--text-secondary);
  cursor: pointer;
  background-color: var(--bg-dark-accent);
  color: var(--button-color);
  border-radius: var(--radius-pill);
  font-family: var(--font-family-secondary);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  padding: calc(0.8rem - 2px) 1.5rem calc(0.8rem - 2px) 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition:
    background-color var(--transition-base),
    color var(--transition-base),
    border-color var(--transition-base);

  &:hover,
  &:focus-visible {
    background-color: var(--button-color-active);
    border-color: var(--button-color-active);
    color: var(--text-on-accent);
    font-weight: var(--font-weight-bold);
  }

  &:focus-visible {
    outline: 2px solid var(--button-color-active);
    outline-offset: 3px;
  }

  .button__icon-wrapper {
    position: relative;
    flex-shrink: 0;
    width: 25px;
    height: 25px;
    display: grid;
    place-items: center;
    color: var(--button-color);
    background-color: transparent;

    border-radius: var(--radius-circle);
    overflow: hidden;

    transition:
      background-color var(--transition-base),
      border-color var(--transition-base),
      color var(--transition-base);
  }

  &:hover .button__icon-wrapper,
  &:focus-visible .button__icon-wrapper {
    color: var(--button-color-active);
    background-color: var(--text-on-accent);
  }
`;

export default function Button<C extends ElementType = "a">({
  as,
  children,
  showIcon = true,
  iconDirection = "up-right",
  className,
  ...rest
}: ButtonProps<C>) {
  const Component = as ?? "a";
  const classes = ["arrow-trigger", className].filter(Boolean).join(" ");

  return (
    <StyledButton as={Component} className={classes} {...rest}>
      {children}
      {showIcon && (
        <span className="button__icon-wrapper">
          <AnimatedArrow direction={iconDirection} size={10} />
        </span>
      )}
    </StyledButton>
  );
}
