import "./SocialNetworkCard.css";

interface SocialNetworkCardProps {
  name: string;
  label: string;
  link: string;
  ariaLabel: string;
}

export default function SocialNetworkCard({
  name,
  label,
  link,
  ariaLabel,
}: SocialNetworkCardProps) {
  return (
    <div className="social-network-card">
      <h3 className="social-network-title">{name}</h3>
      <a
        href={link}
        className="social-network-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {label}
      </a>
    </div>
  );
}
