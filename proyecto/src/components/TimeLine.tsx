// src/components/Timeline.tsx
type TimelineItem = {
  time: string;
  title: string;
  subtitle: string;
  text: string;
};

type TimelineProps = {
  data: TimelineItem[];
  /** Si es true, el texto principal se alinea a la derecha del eje */
  onRight?: boolean;
};

export default function Timeline({ data, onRight = false }: TimelineProps) {
  return (
    <section className="w-full max-w-[54rem] px-4">
      {data.map(({ time, title, subtitle, text }, index) => (
        <article
          key={index}
          className={`flex gap-8 items-stretch ${
            onRight ? "flex-row-reverse" : ""
          }`}
        >
          {/* Columna de tiempo */}
          <div
            className={`
              hidden md:flex items-center w-44 shrink-0
              text-[#6FD5B4] text-base tracking-wide
              ${onRight ? "justify-start text-left" : "justify-end text-right"}
            `}
          >
            {time}
          </div>

          {/* Eje vertical + punto */}
          <div className="hidden md:flex justify-center items-stretch min-h-full relative">
            {/* línea */}
            <div
              className="
                absolute h-full w-[3px]
                bg-gradient-to-b from-[#04AD93] via-[#6FD5B4] to-[#241B58]
                shadow-[0_0_12px_#04AD93]
              "
            />
            {/* punto */}
            <div
              className="
                relative shrink-0 size-5 rounded-full border-[3px]
                border-[#04AD93] bg-[#010806]
                shadow-[0_0_16px_#04AD93]
              "
            />
          </div>

          {/* Tarjeta de contenido */}
          <div
            className={`
              flex flex-col gap-3
              py-10 md:py-14
              text-sm sm:text-base md:text-lg
              leading-relaxed
              text-white/85
              ${onRight ? "md:text-right" : "md:text-left"}
            `}
          >
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#6FD5B4]/80">
                {subtitle}
              </div>

              <div className="mt-1 text-xl sm:text-2xl font-extrabold text-[#6FD5B4] drop-shadow-[0_0_10px_#04AD93]">
                {title}
              </div>

              {/* tiempo en mobile */}
              <div className="mt-1 block md:hidden text-xs sm:text-sm text-[#6FD5B4]/70 italic">
                {time}
              </div>
            </div>

            <div
              className="
                mt-3 rounded-3xl
                bg-[color-mix(in_hsl,var(--color-primary-400)_80%,black_20%)]
                border border-white/5
                px-5 md:px-7 py-5
                shadow-[0_22px_40px_rgba(0,0,0,0.65)]
              "
            >
              {text}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
