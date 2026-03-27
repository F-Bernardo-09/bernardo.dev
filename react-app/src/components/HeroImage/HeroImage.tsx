import profile from "../../assets/profile-photo.jpg";

export default function HeroImage() {
  return (
    <img
      className="profile-image"
      src={profile}
      alt="Bernardo Alencar Profile Photo"
    />
  );
}
