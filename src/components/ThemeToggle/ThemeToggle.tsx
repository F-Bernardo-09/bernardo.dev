import styled from "styled-components";

const ToggleButton = styled.button`
  display: none;
`;

export default function ThemeToggle() {
  return (
    <ToggleButton type="button" aria-label="Toggle theme">
      <svg viewBox="0 0 24 24">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </ToggleButton>
  );
}
