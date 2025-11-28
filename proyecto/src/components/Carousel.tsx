import { useEffect, useState } from "react";
import gsap from "gsap";

type CarouselProps = {
  className?: string;
  items: string[];
  index: number;
};

export default function Carousel({
  className = "",
  items,
  index,
}: CarouselProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(items.length - 1);
  const [next, setNext] = useState(items.length > 1 ? 1 : 0);

  useEffect(() => {
    // 1) primero escondemos TODAS abajo
    items.forEach((_, imgIdx) => {
      gsap.set(`#project-${index}-img-${imgIdx}`, { x: 0, y: "100%" });
    });

    // 2) luego colocamos las 3 que participan
    gsap.set(`#project-${index}-img-${current}`, { x: 0, y: 0 });
    gsap.set(`#project-${index}-img-${prev}`, { x: "-100%", y: 0 });
    gsap.set(`#project-${index}-img-${next}`, { x: "100%", y: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNewValues = (newCurrent: number, direction: "next" | "prev") => {
    setCurrent(newCurrent);

    const newPrev = newCurrent - 1 < 0 ? items.length - 1 : newCurrent - 1;
    const newNext = newCurrent + 1 > items.length - 1 ? 0 : newCurrent + 1;

    setPrev(newPrev);
    setNext(newNext);

    if (direction === "next") {
      // entra el "next" al centro
      gsap.to(`#project-${index}-img-${next}`, {
        x: 0,
        y: 0,
        duration: 0.3,
      });

      // preparamos el siguiente "next" afuera a la derecha, PERO con y:0
      gsap.set(`#project-${index}-img-${newNext}`, {
        x: "100%",
        y: 0,
      });

      // escondemos el prev abajo
      gsap.set(`#project-${index}-img-${prev}`, { x: 0, y: "100%" });
    } else {
      // entra el "prev" al centro
      gsap.to(`#project-${index}-img-${prev}`, {
        x: 0,
        y: 0,
        duration: 0.3,
      });

      // preparamos el siguiente "prev" afuera a la izquierda con y:0
      gsap.set(`#project-${index}-img-${newPrev}`, {
        x: "-100%",
        y: 0,
      });

      // escondemos el next abajo
      gsap.set(`#project-${index}-img-${next}`, { x: 0, y: "100%" });
    }
  };

  const onNext = () => {
    gsap.to(`#project-${index}-img-${current}`, {
      x: "-100%",
      y: 0,
      duration: 0.3,
    });

    const newCurrent = current + 1 <= items.length - 1 ? current + 1 : 0;
    setNewValues(newCurrent, "next");
  };

  const onPrev = () => {
    gsap.to(`#project-${index}-img-${current}`, {
      x: "100%",
      y: 0,
      duration: 0.3,
    });

    const newCurrent = current - 1 >= 0 ? current - 1 : items.length - 1;
    setNewValues(newCurrent, "prev");
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-full h-full relative overflow-hidden">
        {items.map((item, imgIdx) => (
          <img
            id={`project-${index}-img-${imgIdx}`}
            key={`project-${index}-img-${imgIdx}`}
            src={`/projects/${item}.webp`}
            alt={`${item} image`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={onPrev}
            className="
              absolute left-3 top-1/2 -translate-y-1/2 z-10
              size-9 rounded-full
              bg-black/40 hover:bg-black/60 text-white
              flex items-center justify-center transition
            "
            aria-label="Previous image"
          >
            <i className="fas fa-chevron-left" />
          </button>

          <button
            onClick={onNext}
            className="
              absolute right-3 top-1/2 -translate-y-1/2 z-10
              size-9 rounded-full
              bg-black/40 hover:bg-black/60 text-white
              flex items-center justify-center transition
            "
            aria-label="Next image"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </>
      )}
    </div>
  );
}
