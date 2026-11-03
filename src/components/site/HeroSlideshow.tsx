import { useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

/** Each hero photograph is shown for 3 seconds. */
const SLIDE_MS = 3000;
const FADE_MS = 700;

const SLIDES: Record<"en" | "zh", HeroSlide[]> = {
  en: [
    {
      src: "/images/home/mh-group-hero-nyc-01.webp",
      alt: "Lower Manhattan skyline and waterfront seen across the Hudson River",
    },
    {
      src: "/images/home/mh-group-hero-nyc-02.webp",
      alt: "Midtown Manhattan skyline at twilight with the Empire State Building",
    },
    {
      src: "/images/home/mh-group-hero-nyc-03.webp",
      alt: "Midtown Manhattan towers in afternoon light toward Central Park",
    },
  ],
  zh: [
    {
      src: "/images/home/mh-group-hero-nyc-01.webp",
      alt: "曼哈頓下城天際線與哈德遜河",
    },
    {
      src: "/images/home/mh-group-hero-nyc-02.webp",
      alt: "曼哈頓中城暮色天際線與帝國大廈",
    },
    {
      src: "/images/home/mh-group-hero-nyc-03.webp",
      alt: "午後的曼哈頓中城摩天樓群",
    },
  ],
};

/** Hero photographs in rotation order, with alt text for the given language. */
export function heroSlides(locale: "en" | "zh"): HeroSlide[] {
  return SLIDES[locale];
}

/**
 * The hero photograph layer: the same headline and copy sit over it, and only
 * the photograph changes. Photographs crossfade every 3 seconds.
 */
export function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotion(!mq.matches);
    const onChange = () => setMotion(!mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!motion || slides.length < 2) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      SLIDE_MS,
    );
    return () => window.clearInterval(id);
  }, [motion, slides.length]);

  return (
    <div className="relative h-[320px] w-full bg-ink lg:absolute lg:inset-y-0 lg:left-[38%] lg:h-full lg:w-[62%]">
      {slides.map((slide, i) => {
        const isOn = i === active;
        return (
          <img
            key={slide.src}
            src={slide.src}
            alt={isOn ? slide.alt : ""}
            aria-hidden={isOn ? undefined : true}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            className="photo-grade absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: isOn ? 1 : 0,
              transition: `opacity ${FADE_MS}ms ease-in-out${
                isOn ? "" : ` ${FADE_MS}ms`
              }`,
            }}
          />
        );
      })}
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-[16%]"
        style={{
          background:
            "linear-gradient(to right, #133846 0%, rgba(19,56,70,0) 100%)",
        }}
      />
    </div>
  );
}
