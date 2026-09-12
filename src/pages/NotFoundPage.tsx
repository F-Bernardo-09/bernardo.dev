import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { localizedPath } from "../utils/localizedPath";
import { useTranslation } from "react-i18next";
import FaceIcon from "../components/FaceIcon/FaceIcon";
import Button from "../components/Button/Button";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-lg);
  padding: var(--spacing-xl) 0;
`;

const Message = styled.p`
  font-size: var(--font-size-md);
  color: var(--text-secondary);
  max-width: 480px;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const ButtonWrapper = styled.div`
  animation: ${fadeIn} 0.6s ease-out 0.4s both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const IconWrapper = styled.div`
  animation: ${fadeIn} 0.6s ease-out both;
  padding-bottom: var(--spacing-md);

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export default function NotFoundPage() {
  const { t } = useTranslation("system");
  const { i18n } = useTranslation("common");

  return (
    <div className="container">
      <Wrapper>
        <IconWrapper>
          <FaceIcon />
        </IconWrapper>
        <Message>{t("notFound.message")}</Message>
        <ButtonWrapper>
          <Button
            as={Link}
            aria-label={t("notFound.buttonAriaLabel")}
            to={localizedPath("/", i18n.language)}
          >
            {t("notFound.buttonLabel")}
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </div>
  );
}
