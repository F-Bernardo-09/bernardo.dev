import styled from "styled-components";
import type { AnchorHTMLAttributes, ElementType } from "react";

const StyledButton = styled.a`
  display: inline-block;
  background-color: var(--accent-green);
  color: var(--text-dark);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: opacity 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }
`;

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  as?: ElementType;
}

export default function Button({ as, ...props }: ButtonProps) {
  return <StyledButton as={as} {...props} />;
}
