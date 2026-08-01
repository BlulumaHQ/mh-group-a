import { createFileRoute } from "@tanstack/react-router";
import { Btn } from "@/components/site/Primitives";
import {
  ClosingCTA,
  FeaturedProjects,
  Partnership,
  PhilosophySplit,
  Process,
  ServicesOverview,
} from "@/components/site/Sections";
import { site } from "@/data/site";

const title = "Home | MH Group LLC";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: site.homeDescription },
      { property: "og:title", content: title },
      { property: "og:description", content: site.homeDescription },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/images/og-image.webp" },
      { name: "twitter:image", content: "/images/og-image.webp" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: "/images/upper-west-side-86th-after-01.webp",
      },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative isolate flex flex-col bg-ink lg:min-h-[88vh]">
      {/* photograph */}
      <div className="relative h-[320px] w-full lg:absolute lg:inset-y-0 lg:left-[38%] lg:h-full lg:w-[62%]">
        <img
          src="/images/upper-west-side-86th-after-01.webp"
          alt="Completed open living and kitchen area of the Upper West Side Residence renovated by MH Group"
          width={2400}
          height={1602}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="photo-grade h-full w-full object-cover"
        />
        <span
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-[16%]"
          style={{
            background:
              "linear-gradient(to right, #133846 0%, rgba(19,56,70,0) 100%)",
          }}
        />
      </div>

      {/* ink panel */}
      <div className="relative z-10 flex flex-1 bg-ink lg:w-[46%] lg:min-h-[88vh]">
        <div className="flex w-full items-center px-5 py-16 lg:px-0 lg:py-24 lg:pl-16 xl:pl-[max(64px,calc((100vw-1280px)/2+64px))]">
          <div className="flex max-w-[560px]">
            <span
              aria-hidden="true"
              className="mr-6 hidden w-[4px] shrink-0 self-stretch bg-brass lg:block"
            />
            <div>
            <p className="eyebrow">ONE PARTNER. EVERY STEP HOME.</p>
            <h1 className="mt-6 text-[38px] leading-[1.04] text-white lg:text-[44px] xl:text-[52px]">
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
      <Process />
      <PhilosophySplit />
      <Partnership />
      <ClosingCTA
        title="Ready to Begin Your Journey?"
        sub="Let us take care of the details, so you can enjoy the possibilities."
        buttonLabel="Get in Touch"
        image="/images/upper-west-side-86th-after-03.webp"
      />
    </>
  );
}
