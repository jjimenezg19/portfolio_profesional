// src/components/Footer.tsx
type FooterContent = {
  slogan: string;
};

type FooterProps = {
  className?: string;
  content: FooterContent;
};

export default function Footer({ className = "", content }: FooterProps) {
  const networks = [
    {
      to: "https://github.com/jjimenezg19",
      icon: "fab fa-github",
      label: "GitHub",
    },
    {
      to: "https://www.linkedin.com/in/jjimenezg242/",
      icon: "fab fa-linkedin-in",
      label: "LinkedIn",
    },
    {
      to: "mailto:johan.jimenezg.17@gmail.com",
      icon: "fa fa-envelope",
      label: "Email",
    },
    {
      to: "https://wa.me/+13646431273",
      icon: "fab fa-whatsapp",
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      className={`
        relative w-full
        mt-10
        bg-[color-mix(in_hsl,var(--color-primary-400)_20%,black_80%)]
        border-t border-white/5
        shadow-[0_-12px_40px_rgba(0,0,0,0.75)]
        ${className}
      `}
    >
      {/* glow suave arriba del footer */}
      <div
        className="
          pointer-events-none
          absolute -top-6 inset-x-10 h-10
          bg-[radial-gradient(circle_at_top,rgba(138,0,196,0.55),transparent_70%)]
          opacity-70
        "
      />

      <div
        className="
          relative z-[1]
          max-w-[80rem] mx-auto
          px-6 md:px-10
          py-4 md:py-6
          flex flex-col sm:flex-row items-center justify-between
          gap-4
        "
      >
        {/* Social icons */}
        <ul className="flex items-center justify-center gap-5 md:gap-6">
          {networks.map(({ to, icon, label }, index) => (
            <li key={index}>
              <a
                href={to}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="
                  relative
                  flex items-center justify-center
                  w-9 h-9 md:w-10 md:h-10
                  rounded-full
                  border border-white/15
                  bg-black/40
                  text-white/85
                  hover:text-[#6FD5B4]
                  transition
                  hover:-translate-y-0.5
                  hover:shadow-[0_0_18px_rgba(4,173,147,0.85)]
                "
              >
                <i className={`${icon} text-base md:text-lg`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Slogan */}
        <p
          className="
            text-xs sm:text-sm md:text-base
            font-semibold tracking-wide
            text-[var(--color-neutral-100)]
            text-center sm:text-right
          "
        >
          {content.slogan}
        </p>
      </div>
    </footer>
  );
}
