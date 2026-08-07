import pt from "../../locales/pt-br.json";
import profile from "../../assets/profile-photo.jpg";

export default function HeroImage() {
  return (
    <img className="profile-image" src={profile} alt={pt.hero.image.alt} />
  );
}
