import { useState } from "react";
import type { FormEvent } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Button from "../Button/Button";

type Status = "idle" | "sending" | "success" | "error";

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

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: var(--border-default);
  border-radius: var(--radius-pill);
  color: var(--text-primary);
  font-family: inherit;
  font-size: var(--font-size-sm);
  padding: calc(0.8rem - 2px) 1.5rem;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-green);
  }
`;

const SubmitButton = styled(Button)`
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    if (formData.get("botcheck")) {
      return;
    }
    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "",
    );
    formData.append("subject", t("form.emailSubject"));
    formData.append(
      "message",
      t("form.emailBody", {
        name: formData.get("name"),
        email: formData.get("email"),
      }),
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
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
          {t("form.name")}
        </VisuallyHiddenLabel>
        <Input
          id="contact-name"
          name="name"
          type="text"
          placeholder={t("form.namePlaceholder")}
          required
        />

        <VisuallyHiddenLabel htmlFor="contact-email">
          {t("form.email")}
        </VisuallyHiddenLabel>
        <Input
          id="contact-email"
          name="email"
          type="email"
          placeholder={t("form.emailPlaceholder")}
          required
        />

        <div
          className="h-captcha"
          data-sitekey="PREENCHER_HCAPTCHA_SITEKEY"
        />

        {/* forwardedAs em vez de as: repassa a tag pro Button interno
            sem que o styled-components intercepte e pule a lógica dele */}
        <SubmitButton
          forwardedAs="button"
          type="submit"
          showIcon={false}
          disabled={status === "sending"}
        >
          {status === "sending" ? t("form.sending") : t("form.submit")}
        </SubmitButton>
      </Form>

      {status === "success" && (
        <StatusMessage role="status">{t("form.success")}</StatusMessage>
      )}
      {status === "error" && (
        <StatusMessage role="alert">{t("form.error")}</StatusMessage>
      )}
    </div>
  );
}
