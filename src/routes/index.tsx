import { createFileRoute } from "@tanstack/react-router";
import { Btn } from "@/components/site/Primitives";
import {
  ClosingCTA,
  FeaturedProjects,
  HomesWeManage,
  Partnership,
  PhilosophySplit,
  ServicesOverview,
} from "@/components/site/Sections";
import { HeroSlideshow, heroSlides } from "@/components/site/HeroSlideshow";
import { abs, OG_IMAGE, site } from "@/data/site";

const title = "MH Group LLC | Renovation & Project Management in Manhattan";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: site.homeDescription },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MH Group LLC" },
      { property: "og:locale", content: "en_US" },
      { property: "og:title", content: title },
      { property: "og:description", content: site.homeDescription },
      { property: "og:url", content: abs("/") },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "MH Group LLC — renovation and project management in Manhattan",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: site.homeDescription },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: abs("/") },
      {
        rel: "preload",
        as: "image",
        href: "/images/home/mh-group-hero-nyc-01.webp",
      },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative isolate flex flex-col bg-ink lg:min-h-[88vh]">
      {/* photograph */}
      <HeroSlideshow slides={heroSlides("en")} />

      {/* ink panel */}
      <div className="relative z-10 flex flex-1 bg-ink lg:w-[50%] lg:min-h-[88vh]">
        <div className="flex w-full items-center px-5 py-16 lg:px-0 lg:py-24 lg:pl-16 xl:pl-[max(64px,calc((100vw-1280px)/2+64px))]">
          <div className="flex max-w-[620px]">
            <span
              aria-hidden="true"
              className="mr-6 hidden w-[4px] shrink-0 self-stretch bg-brass lg:block"
            />
            <div>
            <p className="eyebrow">ONE PARTNER. EVERY STEP HOME.</p>
            <h1 className="mt-6 text-[38px] leading-[1.04] text-white lg:text-[42px] xl:text-[50px]">
              Your All-in-One
              <br />
              Real Estate &amp; Home
              <br />
              Solution in New York
            </h1>
            <span className="mt-8 block h-px w-14 bg-brass" />
            <p className="mt-8 text-[16px] leading-[1.75] text-white/70">
              From buying or selling to managing, designing, furnishing, and moving in — we
              take care of everything so you can enjoy the results.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Btn to="/services" variant="brass" arrow>
                Explore Our Services
              </Btn>
              <Btn to="/projects" variant="ghost-white">
                View Our Projects
              </Btn>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <HomesWeManage />
      <PhilosophySplit />
      <Partnership withLockup />
      <ClosingCTA
        title="Ready to Begin Your Journey?"
        sub="Let us take care of the details, so you can enjoy the possibilities."
        buttonLabel="Get in Touch"
        image="/images/upper-west-side-86th-after-03.webp"
      />
    </>
  );
}
