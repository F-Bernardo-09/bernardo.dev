import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-top: var(--spacing-xl);
`;

interface ProjectsButtonProps {
  onClick: () => void;
}

export default function ProjectsButton({ onClick }: ProjectsButtonProps) {
  const { t } = useTranslation("projects");

  return (
    <ButtonWrapper>
      <Button
        as="button"
        onClick={onClick}
        aria-label={t("loadMoreButton.ariaLabel")}
      >
        {t("loadMoreButton.label")}
      </Button>
    </ButtonWrapper>
  );
}
