import Title from "@/components/Title";

type ExperienceItem = {
  time: string;
  title: string;
  subtitle: string;
  text: string;
};

type ExperienceContent = {
  title: string;
  content: ExperienceItem[];
};

type ExperienceProps = {
  id?: string;
  className?: string;
  content: ExperienceContent;
};

export default function Experience({
  id = "experience",
  className = "",
  content,
}: ExperienceProps) {
  return (
    <section
      id={id}
      className={`
        flex flex-col items-center
        gap-10 md:gap-16
        py-16 md:py-24
        px-4
        ${className}
      `}
    >
      {/* Título principal */}
      <Title text={content.title} />

      {/* Timeline tipo “banners” */}
      <div className="w-full max-w-6xl flex flex-col gap-10">
        {content.content.map((item, index) => (
          <ExperienceCard
            key={`exp-${index}`}
            item={item}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </section>
  );
}

type ExperienceCardProps = {
  item: ExperienceItem;
  align: "left" | "right";
};

function ExperienceCard({ item, align }: ExperienceCardProps) {
  const reversed = align === "right";

  return (
    <article
      className={`
        flex flex-col md:flex-row
        ${reversed ? "md:flex-row-reverse" : ""}
        gap-6 md:gap-10
        items-stretch
      `}
    >
      {/* Columna de gradiente (empresa / rol / fecha) */}
      <div className="md:w-[40%]">
        <div
          className={`
            h-full rounded-3xl
            bg-[radial-gradient(circle_at_top,_rgba(111,213,180,0.25),_transparent_55%)]
            bg-[color-mix(in_hsl,var(--color-primary-400)_70%,black_30%)]
            border border-[#6FD5B4]/40
            px-6 md:px-8
            py-6 md:py-8
            text-[var(--color-neutral-100)]
            flex flex-col justify-center
            shadow-[0_0_24px_rgba(4,173,147,0.55)]
          `}
        >
          <p className="text-[0.7rem] sm:text-xs uppercase tracking-[0.35em] text-[#6FD5B4]/80">
            {item.subtitle}
          </p>

          <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#E9FDF7] drop-shadow-[0_0_10px_rgba(4,173,147,0.6)]">
            {item.title}
          </h3>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-medium text-[#c2f3e6]">
            {item.time}
          </p>
        </div>
      </div>

      {/* Columna de descripción */}
      <div
        className={`
          md:flex-1
          rounded-3xl
          bg-[color-mix(in_hsl,var(--color-primary-400)_82%,black_18%)]
          border border-[#6FD5B4]/18
          px-6 md:px-8
          py-6 md:py-8
          text-[var(--color-neutral-100)]
          text-sm sm:text-base md:text-lg
          leading-relaxed
          shadow-[0_18px_45px_rgba(0,0,0,0.55)]
        `}
      >
        {item.text}
      </div>
    </article>
  );
}
