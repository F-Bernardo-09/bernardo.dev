import { useState } from "react";
import type { FormEvent } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

// Limites de caracteres
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 500;

type Status = "idle" | "sending" | "success" | "error";

const fieldTypography = css`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-sm);
  width: 100%;
`;

const VisuallyHiddenLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`;

const fieldStyles = css`
  ${fieldTypography}

  width: 100%;
  box-sizing: border-box;
  background-color: var(--bg-dark-accent);
  border: var(--border-default);
  border-radius: var(--radius-pill);
  color: var(--text-primary);
  padding: 0.8rem 1.5rem;
  transition: border-color var(--transition-base);

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-green);
  }
`;

const Input = styled.input`
  ${fieldStyles}
`;

const TextareaWrapper = styled.div`
  width: 100%;
`;

const Textarea = styled.textarea`
  ${fieldStyles}

  display: block;
  height: 108px;
  min-height: 108px;
  max-height: 160px;
  resize: vertical;
  border-radius: 1rem;
`;

const CharacterCount = styled.p`
  margin: 0.35rem 0 0;
  text-align: right;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`;

const SubmitButton = styled(Button)`
  ${fieldTypography}

  margin-top: var(--spacing-sm);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    pointer-events: none;
  }
`;

const StatusMessage = styled.p`
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-sm);
`;

export default function ContactForm() {
  const { t } = useTranslation("contact");
  const [status, setStatus] = useState<Status>("idle");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot para filtrar envios automatizados simples.
    if (formData.get("botcheck")) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error(
        "Web3Forms: VITE_WEB3FORMS_ACCESS_KEY não está configurada.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    formData.append("access_key", accessKey);
    formData.append("subject", t("form.emailSubject"));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        form.reset();
        setMessageLength(0);
      } else {
        console.error("Web3Forms:", response.status, result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Falha na requisição ao Web3Forms:", error);
      setStatus("error");
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          style={{ display: "none" }}
        />

        <VisuallyHiddenLabel htmlFor="contact-name">
          {t("form.nameLabel")}
        </VisuallyHiddenLabel>
        <Input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t("form.namePlaceholder")}
          maxLength={MAX_NAME_LENGTH}
          required
        />

        <VisuallyHiddenLabel htmlFor="contact-email">
          {t("form.emailLabel")}
        </VisuallyHiddenLabel>
        <Input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t("form.emailPlaceholder")}
          maxLength={MAX_EMAIL_LENGTH}
          required
        />

        <TextareaWrapper>
          <VisuallyHiddenLabel htmlFor="contact-message">
            {t("form.messageLabel")}
          </VisuallyHiddenLabel>
          <Textarea
            id="contact-message"
            name="message"
            placeholder={t("form.messagePlaceholder")}
            rows={4}
            maxLength={MAX_MESSAGE_LENGTH}
            onChange={(event) => {
              setMessageLength(event.currentTarget.value.length);
              if (status !== "idle") setStatus("idle");
            }}
            required
          />
          <CharacterCount aria-live="polite">
            {messageLength}/{MAX_MESSAGE_LENGTH}
          </CharacterCount>
        </TextareaWrapper>

        <SubmitButton
          forwardedAs="button"
          type="submit"
          iconDirection="up"
          disabled={status === "sending"}
        >
          {status === "sending"
            ? t("form.sendingState")
            : t("form.submitButton")}
        </SubmitButton>
      </Form>

      {status === "success" && (
        <StatusMessage role="status">{t("form.successMessage")}</StatusMessage>
      )}

      {status === "error" && (
        <StatusMessage role="alert">{t("form.errorMessage")}</StatusMessage>
      )}
    </div>
  );
}
