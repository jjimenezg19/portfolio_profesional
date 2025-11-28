import Title from "@/components/Title";

type IdealItem = {
  title: string;
  text: React.ReactNode;
};

type IdealsContent = {
  title: string;
  content: IdealItem[];
};

type IdealsProps = {
  id?: string;
  className?: string;
  content: IdealsContent;
};

export default function Ideals({
  id = "ideals",
  className = "",
  content,
}: IdealsProps) {
  return (
    <section
      id={id}
      className={`
        relative w-full
        py-20 md:py-28
        px-4 md:px-8
        flex flex-col items-center gap-12
        ${className}
      `}
    >
      {/* Título con efecto neon (ya lo tienes en Title) */}
      <Title text={content.title} />

      {/* Grid de 3 tarjetas */}
      <div
        className="
          w-full max-w-6xl
          grid grid-cols-1 md:grid-cols-3
          gap-6 md:gap-8
        "
      >
        {content.content.map(({ title, text }, index) => (
          <article
            key={`ideal-${index}`}
            className="
              relative
              rounded-3xl
              px-6 md:px-7
              py-6 md:py-8
              text-sm sm:text-base
              leading-relaxed
              bg-[color-mix(in_hsl,var(--color-primary-400)_80%,black_20%)]
              border border-white/12              
              shadow-[0_0_34px_rgba(111,213,180,0.28)]
              overflow-hidden
              transition
              hover:shadow-[0_0_42px_rgba(138,0,196,0.55)]
              hover:border-[var(--color-accent-400)]
              hover:-translate-y-1.5
            "
          >
            {/* Glow suave detrás del título */}
            <div
              className="
                pointer-events-none
                absolute -top-16 left-1/2 -translate-x-1/2
                w-44 h-44
                bg-[radial-gradient(circle_at_center,rgba(111,213,180,0.38)_0,transparent_60%)]
                opacity-70
              "
            />

            <h2
              className="
                relative
                text-lg md:text-xl font-extrabold
                text-[var(--color-neutral-100)]
                tracking-wide
                mb-3
              "
            >
              {title}
            </h2>

            <div
              className="
                relative
                text-[var(--color-neutral-100)]
                text-opacity-85
              "
            >
              {text}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
