import styled from "styled-components";
import { useTranslation } from "react-i18next";
import profile from "../../assets/profile-photo.webp";
import LazyImage from "../LazyImage/LazyImage";

const ProfileImage = styled(LazyImage)`
  width: 150px;
  height: 150px;
  border: var(--border-accent);
  border-radius: var(--radius-circle);
  margin-bottom: var(--spacing-lg);
  background-color: var(--accent-green);
`;

export default function HeroImage() {
  const { t } = useTranslation("about");

  return <ProfileImage src={profile} alt={t("image.alt")} loading="eager" />;
}
