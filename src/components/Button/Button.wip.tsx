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
  height: 3rem;
  min-width: 12rem;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  border-radius: 1.625rem;
  overflow: hidden;

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    height: 3rem;
    background: var(--accent-green);
    border-radius: 1.625rem;
    box-shadow: var(--shadow-button);
    z-index: 1;
  }

  .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: var(--bg-dark);
  }

  .icon.arrow {
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;

    &::before {
      position: absolute;
      content: "";
      top: -0.29rem;
      right: 0.0625rem;
      width: 0.625rem;
      height: 0.625rem;
      border-top: 0.125rem solid var(--bg-dark);
      border-right: 0.125rem solid var(--bg-dark);
      transform: rotate(45deg);
    }
  }

  .button-text {
    transition: color 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    z-index: 2;
    padding: 0 1.5rem 0 3.75rem;
    white-space: nowrap;
    color: var(--text-primary);
    font-family: var(--font-family-secondary);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-body);
    text-transform: uppercase;
  }

  &:hover .circle,
  &:focus-visible .circle {
    width: 100%;
  }

  &:hover .icon.arrow,
  &:focus-visible .icon.arrow {
    background: var(--bg-dark);
    transform: translate(1rem, 0);
  }

  &:hover .button-text,
  &:focus-visible .button-text {
    color: var(--bg-dark);
  }
`;

export default function Button<C extends ElementType = "a">({
  as,
  children,
  ...rest
}: ButtonProps<C>) {
  const Component = as ?? "a";

  return (
    <StyledButton as={Component} {...rest}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow" />
      </span>
      <span className="button-text">{children}</span>
    </StyledButton>
  );
}
