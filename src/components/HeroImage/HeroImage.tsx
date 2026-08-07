import styled from "styled-components";
import pt from "../../locales/pt-br.json";
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
  return <ProfileImage src={profile} alt={pt.hero.image.alt} />;
}
