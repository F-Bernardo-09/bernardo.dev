import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

const ButtonWrapper = styled.div`
  margin-top: var(--spacing-xl);
`;

export default function ProjectsButton() {
  const { t } = useTranslation("projects");

  return (
    <ButtonWrapper>
      <Button
        href={t("viewAllButton.link")}
        aria-label={t("viewAllButton.ariaLabel")}
      >
        {t("viewAllButton.label")}
      </Button>
    </ButtonWrapper>
  );
}
