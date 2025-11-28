// src/sections/Projects.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Carousel from "@/components/Carousel";
import Title from "@/components/Title";
import { useStore } from "@/utils/store";

gsap.registerPlugin(ScrollTrigger);

type Technology = { name: string; logo: string };
type LinkItem = { text: string; icon: string; url: string };

export type ProjectItem = {
  gallery: string[];
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  links: LinkItem[];
};

type ProjectsContent = {
  title: string;
  content: ProjectItem[];
};

type ProjectsProps = {
  id?: string;
  className?: string;
  content: ProjectsContent;
};

export default function Projects({
  id = "projects",
  className = "",
  content,
}: ProjectsProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const { currentLanguage } = useStore();

  const { title, content: projects } = content;

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    // Gap extra en desktop para que no quede pegado al borde
    const gap = window.matchMedia("(min-width: 768px)").matches ? 80 : 40;

    const getScrollAmount = () =>
      -(track.scrollWidth - window.innerWidth + gap);

    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      duration: 1,
    });

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });

    ScrollTrigger.refresh();

    return () => {
      st.kill();
      tween.kill();
    };
  }, [projects, currentLanguage]);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`projectsWrapper h-screen md:pl-20 ${className}`}
    >
      <div className="h-full flex flex-col justify-center gap-8 md:gap-10 px-4 md:px-10 pt-10 md:pt-16 ">
        {/* Título de la sección */}
        <div className="mb-2 md:mb-4">
          <Title text={title} />
        </div>

        {/* Track horizontal */}
        <div
          ref={trackRef}
          className="projects w-full h-full flex mdAndDown:pt-12"
        >
          {projects.map(
            (
              { gallery, title, subtitle, description, technologies, links },
              i
            ) => (
              <article
                key={`project-${i}`}
                className="
                  shrink-0 w-full h-full
                  flex flex-col lg:flex-row
                  justify-center items-center
                  gap-6 lg:gap-10
                  px-0 md:px-4
                "
              >
                {/* PREVIEW CARD (Browser frame + carousel) */}
                <div className="shrink-0 w-[20rem] xs:w-[24rem] sm:w-[28rem] lg:w-[34rem]">
                  <div
                    className="
                      relative rounded-2xl overflow-hidden
                      bg-[color-mix(in_hsl,var(--color-primary-400)_80%,black_20%)]
                      border border-white/10 shadow-2xl
                    "
                  >
                    {/* Browser top bar */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-black/40">
                      <span className="size-2.5 rounded-full bg-red-400/80" />
                      <span className="size-2.5 rounded-full bg-yellow-400/80" />
                      <span className="size-2.5 rounded-full bg-green-400/80" />
                      <div className="ml-3 text-xs text-white/60 truncate">
                        {title.toLowerCase().replace(/\s+/g, "-")}.app
                      </div>
                    </div>

                    <Carousel
                      className="w-full aspect-video"
                      items={gallery}
                      index={i}
                    />
                  </div>
                </div>

                {/* TEXT CARD */}
                <div className="w-full max-w-xl overflow-y-auto text-center lg:text-left">
                  <h1 className="text-2xl lg:text-3xl font-extrabold text-white">
                    {title}
                  </h1>
                  <h2 className="text-lg lg:text-xl text-white/70 italic">
                    {subtitle}
                  </h2>

                  <p className="text-base lg:text-lg text-white/80 mt-3">
                    {description}
                  </p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-5">
                    {technologies.map(({ name, logo }, j) => (
                      <div
                        key={`project-${i}-tec-${j}`}
                        className="
                          shrink-0 flex items-center gap-2
                          border border-white/15 rounded-full
                          px-3 py-1 cursor-default
                          bg-black/20
                        "
                      >
                        <img
                          className="w-4 h-auto"
                          src={`/teclogos/${logo}.svg`}
                          alt={`${name} logo`}
                        />
                        <span className="capitalize text-xs sm:text-sm text-white/80 font-bold">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-center lg:justify-start gap-4 mt-5">
                    {links.map(({ icon, url, text }, k) => (
                      <a
                        key={`project-${i}-link-${k}`}
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          hover:text-[var(--color-secondary)]
                          text-white/90 text-base lg:text-lg
                          transition flex items-center gap-2
                        "
                      >
                        <i className={icon} />
                        <span>{text}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
