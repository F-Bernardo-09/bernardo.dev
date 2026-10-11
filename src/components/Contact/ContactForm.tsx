import { useRef, useState } from "react";
import type { FormEvent } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Button from "../Button/Button";

type Status = "idle" | "sending" | "success" | "error";

const fieldTypography = css`
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: 1;
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

const Input = styled.input`
  ${fieldTypography}

  width: 100%;
  background-color: var(--bg-dark-accent);
  border: var(--border-default);
  border-radius: var(--radius-pill);
  color: var(--text-primary);
  padding: calc(0.8rem - 2px) 1.5rem calc(0.8rem - 2px) 1.5rem;
  transition: border-color var(--transition-base);

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
    border-color: var(--accent-green);
  }
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
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef<HCaptcha>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || !captchaToken) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("botcheck")) return;

    setStatus("sending");

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "",
    );
    formData.set("h-captcha-response", captchaToken);
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
        console.error("Web3Forms:", response.status, result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Falha na requisição:", err);
      setStatus("error");
    } finally {
      setCaptchaToken("");
      captchaRef.current?.resetCaptcha();
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
          required
        />

        <HCaptcha
          ref={captchaRef}
          sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
          theme="dark"
          onVerify={setCaptchaToken}
          onExpire={() => setCaptchaToken("")}
          onError={() => setCaptchaToken("")}
        />

        <SubmitButton
          forwardedAs="button"
          type="submit"
          iconDirection="up"
          disabled={status === "sending" || !captchaToken}
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
