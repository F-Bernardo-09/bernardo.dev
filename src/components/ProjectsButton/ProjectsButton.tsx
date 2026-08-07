import styled from "styled-components";
import pt from "../../locales/pt-br.json";
import Button from "../Button/Button";

const ButtonWrapper = styled.div`
  margin-top: var(--spacing-xl);
`;

export default function ProjectsButton() {
  return (
    <ButtonWrapper>
      <Button
        href={pt.projects.viewAllButton.link}
        aria-label={pt.projects.viewAllButton.ariaLabel}
      >
        {pt.projects.viewAllButton.label}
      </Button>
    </ButtonWrapper>
  );
}
