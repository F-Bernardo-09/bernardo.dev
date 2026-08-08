import styled from "styled-components";
import { useTranslation } from "react-i18next";
import profile from "../../assets/profile-photo.jpg";

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border: var(--border-accent);
  border-radius: var(--radius-circle);
  margin-bottom: var(--spacing-xl);
  object-fit: cover;
  background-color: var(--accent-green);
`;

export default function HeroImage() {
  const { t } = useTranslation("common");

  return <ProfileImage src={profile} alt={t("hero.image.alt")} />;
}
