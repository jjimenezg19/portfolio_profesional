import { useEffect, useRef, useState } from "react";
import { useStore } from "@/utils/store";

import myPhoto from "~/JohanPhoto.svg?url";

type AboutMeProps = {
  text: string;
};

export default function AboutMe({ text }: AboutMeProps) {
  const { currentLanguage } = useStore();

  const [displayedText, setDisplayedText] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const executedRef = useRef(false);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let intervalId: number | undefined;
    let index = -1;

    // reset por idioma (para que tipeé otra vez al cambiar idioma)
    executedRef.current = false;
    setDisplayedText("");

    if (containerRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting || executedRef.current) return;

          executedRef.current = true;
          observer?.disconnect();

          intervalId = window.setInterval(() => {
            index++;
            if (index >= text.length) {
              if (intervalId) window.clearInterval(intervalId);
              return;
            }
            setDisplayedText((prev) => prev + text[index]);
          }, 45);
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.4, // más natural que 1
        }
      );

      observer.observe(containerRef.current);
    }

    return () => {
      observer?.disconnect();
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, currentLanguage]);

  return (
    <section
      id="about-me-section"
      className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-20 px-6 max-w-[90rem] mx-auto h-100"
    >
      {/* Foto */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-0 bg-neutral-800 place-items-center justify-center">
        <img
          src={myPhoto}
          alt="Johan Jimenez"
          className="w-full h-62 object-cover"
        />
      </div>

      <div className="flex-1 w-full md:w-auto flex items-center justify-center">
        <div
          ref={containerRef}
          className="text-center text-lg sm:text-2xl lg:text-3xl max-w-3xl leading-relaxed relative"
        >
          <span>{displayedText}</span>
          <span className="blink_cursor">|</span>
        </div>
      </div>
    </section>
  );
}
