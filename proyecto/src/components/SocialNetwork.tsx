// SocialNetwork.tsx
import "@/assets/styles/social-network.css";

type SocialNetworkProps = {
  to: string;
  icon: string;
  label?: string;
  className?: string;
};

export default function SocialNetwork({ to, icon, label }: SocialNetworkProps) {
  return (
    <div className="sn-container size-12 md:size-14">
      <div className="sn-wrapper size-full">
        <a
          href={to}
          target="_blank"
          rel="noreferrer"
          aria-label={label || icon}
          title={label}
          className="size-full"
        >
          <i className={`${icon} text-xl md:text-2xl text-neutral-100`} />
          {label && <span className="sr-only">{label}</span>}
        </a>
      </div>
    </div>
  );
}
