import JohanTitle from "@/components/JohanTitle";
import "@/assets/styles/banner.css";

type HeroContent = {
  titleOne: string;
  titleTwo: string;
  subtitleOne: string;
};

type HeroProps = {
  content: HeroContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <div className="presentation-wrapper text-center text-neutral-100 flex flex-col items-center gap-3 sm:gap-4">
      {/* Línea 1 */}
      <h1 className="text-4xl sm:text-6xl lg:text-[4rem] leading-[1.05] flex flex-wrap items-end justify-center gap-y-2 gap-x-4 lg:gap-x-5">
        {content.titleOne}{" "}
        <JohanTitle className="w-40 sm:w-65 lg:w-100 shrink-0" />
      </h1>

      {/* Línea 2 */}
      <h1 className="text-4xl sm:text-6xl lg:text-[4rem] leading-[1.05]">
        {content.titleTwo}
      </h1>

      {/* Subtítulo en una sola fila (wrap si ocupa) */}
      <h2 className="reveal-text-animation mt-3 text-xs sm:text-xl lg:text-2xl flex items-center justify-center gap-2 flex-wrap leading-snug">
        <span className="subtitle-right">{content.subtitleOne}</span>
      </h2>
    </div>
  );
}
