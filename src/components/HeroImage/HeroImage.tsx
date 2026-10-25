import styled from "styled-components";
import { useTranslation } from "react-i18next";
import profile from "../../assets/profile-photo.webp";
import LazyImage from "../LazyImage/LazyImage";

const ProfileImage = styled(LazyImage)`
  width: 100%;
  aspect-ratio: 4 / 5;
  height: auto;
  object-fit: cover;
  border: var(--border-accent);
  border-radius: var(--radius-md, 16px);
  background-color: var(--accent-green);
`;

export default function HeroImage() {
  const { t } = useTranslation("about");

  return <ProfileImage src={profile} alt={t("image.alt")} loading="eager" />;
}
