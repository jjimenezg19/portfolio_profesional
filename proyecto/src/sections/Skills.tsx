// src/sections/Skills.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Title from "@/components/Title";
import { useStore } from "@/utils/store";

gsap.registerPlugin(ScrollTrigger);

type SkillsContent = {
  title: string;
  subtitle: string;
};

type SkillsProps = {
  id?: string;
  className?: string;
  content: SkillsContent;
};

type SkillItem = {
  text: string;
  img: string;
};

// Puedes ajustar / quitar / añadir skills aquí
const SKILLS: SkillItem[] = [
  { text: "JavaScript", img: "javascript" },
  { text: "TypeScript", img: "typescript" },
  { text: "React", img: "react" },
  { text: "Tailwind", img: "tailwind" },
  { text: "HTML", img: "html" },
  { text: "CSS", img: "css" },
  { text: "Node.js", img: "nodejs" },
  { text: "ASP.NET Core", img: "dot-net" },
  { text: "C#", img: "c--4" },
  { text: "MongoDB", img: "mongodb" },
  { text: "MySQL", img: "mysql" },
];

export default function Skills({
  id = "skills",
  className = "",
  content,
}: SkillsProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const { currentLanguage } = useStore();

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const gap = window.matchMedia("(min-width: 768px)").matches ? 80 : 40;

    const getScrollAmount = () =>
      -(track.scrollWidth - window.innerWidth + gap);

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      duration: 1,
    });

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      scrub: 1,
      animation: tween,
      invalidateOnRefresh: true,
    });

    return () => {
      st.kill();
      tween.kill();
    };
  }, [currentLanguage]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`
        relative h-screen min-h-[32rem]
        flex flex-col justify-center
        px-4 md:px-10
        ${className}
      `}
    >
      {/* Fondo ligero para diferenciar la sección */}
      <div className="pointer-events-none absolute inset-0 -z-[1] bg-[radial-gradient(circle_at_top,_rgba(111,213,180,0.15),transparent_55%),_radial-gradient(circle_at_bottom,_rgba(36,27,88,0.4),_rgba(1,8,6,1)_70%)]" />

      {/* Header fijo dentro de la sección */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        <Title text={content.title} />

        <h3 className="text-sm md:text-lg text-white/80 px-2">
          {content.subtitle}
        </h3>
      </div>

      {/* Track horizontal con las tarjetas */}
      <div className="mt-10 md:mt-14 overflow-visible">
        <div
          ref={trackRef}
          className="
            flex gap-6 md:gap-10
            w-max
            px-2 md:px-4
          "
        >
          {SKILLS.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillCardProps = SkillItem;

function SkillCard({ text, img }: SkillCardProps) {
  return (
    <article
      className="
        shrink-0
        w-40 h-48 md:w-48 md:h-56
        rounded-3xl
        border border-white/12
        bg-[color-mix(in_hsl,var(--color-primary-400)_80%,black_20%)]
        shadow-[0_20px_45px_rgba(0,0,0,0.7)]
        flex flex-col items-center justify-center
        transition-transform transition-shadow duration-300
        hover:shadow-[0_0_42px_rgba(138,0,196,0.55)]
        hover:border-[var(--color-accent-400)]
        hover:-translate-y-1.5
      "
    >
      <div
        className="
          rounded-2xl
          w-20 h-20 md:w-24 md:h-24
          bg-black/40
          flex items-center justify-center
          border border-white/10
        "
      >
        <img
          src={`/teclogos/${img}.svg`}
          alt={`${text} logo`}
          className="w-14 md:w-16 h-auto"
        />
      </div>

      <span className="mt-4 text-sm md:text-base font-semibold text-white/90 tracking-wide text-center">
        {text}
      </span>
    </article>
  );
}
