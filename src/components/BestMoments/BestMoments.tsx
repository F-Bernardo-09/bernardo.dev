import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { IoClose } from "react-icons/io5";

interface Photo {
  src: string;
  alt: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const Title = styled.h3`
  font-size: var(--font-size-lg);
`;

const Row = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-md);
  overflow-x: auto;
`;

const rotations = [-6, 4, -3, 6, -4, 3];

const Card = styled.button<{ $rotate: number }>`
  all: unset;
  cursor: pointer;
  position: relative;
  flex-shrink: 0;
  width: clamp(120px, 14vw, 180px);
  aspect-ratio: 1 / 1;
  margin-left: -1.5rem;
  border-radius: 4px;
  border: 6px solid var(--bg-dark-accent);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  transform: rotate(${(p) => p.$rotate}deg);
  transition:
    transform 0.25s ease,
    z-index 0.25s ease;
  overflow: hidden;

  &:first-child {
    margin-left: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &:hover,
  &:focus-visible {
    transform: rotate(0deg) scale(1.08);
    z-index: 5;
  }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: var(--spacing-lg);

  img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 4px;
  }
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  line-height: 0;

  &:hover {
    color: var(--accent-green);
  }
`;

export default function BestMoments() {
  const { t } = useTranslation("highlights");
  const photos = t("photos", { returnObjects: true }) as Photo[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  return (
    <div className="container">
      <Wrapper>
        <Title>{t("title")}</Title>
        <Row aria-label={t("ariaLabel")}>
          {photos.map((photo, index) => (
            <Card
              key={photo.src}
              $rotate={rotations[index % rotations.length]}
              onClick={() => setOpenIndex(index)}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </Card>
          ))}
        </Row>

        {openIndex !== null && (
          <Overlay
            role="dialog"
            aria-modal="true"
            aria-label={photos[openIndex].alt}
            onClick={() => setOpenIndex(null)}
          >
            <CloseButton
              aria-label={t("closeAriaLabel", "Fechar")}
              onClick={(e) => {
                e.stopPropagation();
                setOpenIndex(null);
              }}
            >
              <IoClose />
            </CloseButton>
            <img
              src={photos[openIndex].src}
              alt={photos[openIndex].alt}
              onClick={(e) => e.stopPropagation()}
            />
          </Overlay>
        )}
      </Wrapper>
    </div>
  );
}
