import { Component } from "react";
import type { ErrorInfo, ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { withTranslation } from "react-i18next";
import type { WithTranslation } from "react-i18next";
import FaceIcon from "../FaceIcon/FaceIcon";
import Button from "../Button/Button";
import { localizedPath } from "../../utils/localizedPath";

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

const Title = styled.h1`
  font-size: var(--font-size-lg);
  color: var(--text-primary);
  animation: ${fadeIn} 0.6s ease-out both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
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

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
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

interface ErrorBoundaryProps extends WithTranslation {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError } = this.state;
    const { t, i18n, children } = this.props;

    if (!hasError) {
      return children;
    }

    return (
      <div className="container">
        <Wrapper>
          <IconWrapper>
            <FaceIcon />
          </IconWrapper>
          <Title>{t("errorBoundary.title", { ns: "systemErrors" })}</Title>
          <Message>
            {t("errorBoundary.message", { ns: "systemErrors" })}
          </Message>
          <ButtonsWrapper>
            <Button
              as="button"
              type="button"
              showIcon={false}
              aria-label={t("errorBoundary.reloadButtonAriaLabel", {
                ns: "systemErrors",
              })}
              onClick={this.handleReload}
            >
              {t("errorBoundary.reloadButtonLabel", { ns: "systemErrors" })}
            </Button>

            <Button
              href={localizedPath("/", i18n.language)}
              showIcon={false}
              aria-label={t("errorBoundary.homeButtonAriaLabel", {
                ns: "systemErrors",
              })}
            >
              {t("errorBoundary.homeButtonLabel", { ns: "systemErrors" })}
            </Button>
          </ButtonsWrapper>
        </Wrapper>
      </div>
    );
  }
}

export default withTranslation("systemErrors")(ErrorBoundary);
