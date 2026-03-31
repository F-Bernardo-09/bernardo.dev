import "./SocialNetworkCard.css";

interface SocialNetworkCardProps {
  name: string;
  link: string;
}

export default function SocialNetworkCard({
  name,
  link,
}: SocialNetworkCardProps) {
  return (
    <div className="social-network-card">
      <h3 className="social-network-title">{name}</h3>
      <a
        href={link}
        className="social-network-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {link}
      </a>
    </div>
  );
}
