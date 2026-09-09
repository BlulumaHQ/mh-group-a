import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn, GoldColumn, LineIcon, Reveal, SectionHeading } from "@/components/site/Primitives";
import { ClosingCTA, Partnership, ProjectCard } from "@/components/site/Sections";
import { abs, altLinks, OG_IMAGE } from "@/data/site";
import { projects } from "@/data/projects";
import { zhHome, zhMeta, zhProjects, zhProjectShared } from "@/data/zh";

export const Route = createFileRoute("/zh/")({
  component: ZhHome,
  head: () => ({
    meta: [
      { title: zhMeta.home.title },
      { name: "description", content: zhMeta.home.description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "MH Group LLC" },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:title", content: zhMeta.home.title },
      { property: "og:description", content: zhMeta.home.description },
      { property: "og:url", content: abs("/zh") },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: zhMeta.home.title },
      { name: "twitter:description", content: zhMeta.home.description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: abs("/zh") }, ...altLinks("/", "/zh")],
  }),
});

function ZhHome() {
  return (
    <>
      <section className="relative isolate flex flex-col bg-ink lg:min-h-[88vh]">
        <div className="relative h-[320px] w-full lg:absolute lg:inset-y-0 lg:left-[38%] lg:h-full lg:w-[62%]">
          <img
            src="/images/upper-west-side-86th-after-01.webp"
            alt="MH Group 完成的上西區住宅開放式客廳與廚房"
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
              background: "linear-gradient(to right, #133846 0%, rgba(19,56,70,0) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-1 bg-ink lg:min-h-[88vh] lg:w-[50%]">
          <div className="flex w-full items-center px-5 py-16 lg:px-0 lg:py-24 lg:pl-16 xl:pl-[max(64px,calc((100vw-1280px)/2+64px))]">
            <div className="flex max-w-[620px]">
              <span
                aria-hidden="true"
                className="mr-6 hidden w-[4px] shrink-0 self-stretch bg-brass lg:block"
              />
              <div>
                <p className="eyebrow tracking-[0.12em]">{zhHome.heroEyebrow}</p>
                <h1 className="mt-6 text-[30px] leading-[1.3] text-white lg:text-[38px] xl:text-[44px]">
                  {zhHome.heroTitle}
                </h1>
                <span className="mt-8 block h-px w-14 bg-brass" />
                <p className="mt-8 text-[16px] leading-[1.95] text-white/70">
                  {zhHome.heroCopy}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Btn to="/zh/services" variant="brass" arrow>
                    {zhHome.btn1}
                  </Btn>
                  <Btn to="/zh/projects" variant="ghost-white">
                    {zhHome.btn2}
                  </Btn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-paper">
        <div className="container-mh">
          <Reveal>
            <SectionHeading
              onPaper
              align="center"
              eyebrow={zhHome.servicesEyebrow}
              title={zhHome.servicesHeading}
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 divide-y divide-hairline border-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {zhHome.services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="h-full px-0 py-10 sm:px-8 lg:py-2">
                  <LineIcon name={s.icon} size={44} />
                  <h3 className="mt-7 max-w-[240px] font-sans text-[15px] font-medium leading-[1.6] tracking-[0.02em] text-inktext">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-[1.9] text-mutedtext">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad bg-ink">
        <div className="container-mh">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <Reveal>
              <SectionHeading
                eyebrow={zhHome.projectsEyebrow}
                title={zhHome.projectsHeading}
              />
            </Reveal>
            <Reveal delay={80}>
              <Btn to="/zh/projects" variant="ghost-white" arrow>
                {zhHome.projectsCta}
              </Btn>
            </Reveal>
          </div>
        </div>
        <div className="container-mh mt-14">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <ProjectCard
                  project={project}
                  locale="zh"
                  name={zhProjects[project.slug]!.name}
                  scope={zhProjectShared.scope}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-paper">
        <div className="container-mh">
          <Reveal>
            <SectionHeading
              onPaper
              align="center"
              eyebrow={zhHome.processEyebrow}
              title={zhHome.processHeading}
            />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {zhHome.steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[44px] leading-none text-brass">
                      {step.num}
                    </span>
                    <LineIcon name={step.icon} size={30} />
                    {i < zhHome.steps.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute right-0 hidden translate-x-1/2 font-sans text-[18px] text-brass lg:block"
                      >
                        &rarr;
                      </span>
                    ) : null}
                  </div>
                  <span className="mt-6 block h-px w-10 bg-brass" />
                  <h3 className="mt-6 font-sans text-[16px] font-medium tracking-[0.06em] text-inktext">
                    {step.label}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.9] text-mutedtext">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy split */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="order-2 flex items-center bg-ink px-5 py-20 lg:order-1 lg:px-24 lg:py-24">
          <div>
            <div className="flex">
              <GoldColumn />
              <div>
                <p className="eyebrow mb-4 tracking-[0.12em]">{zhHome.philosophyEyebrow}</p>
                <h2 className="text-[26px] leading-[1.35] text-white lg:text-[38px]">
                  {zhHome.philosophyHeading}
                </h2>
              </div>
            </div>
            <p className="mt-8 max-w-[520px] text-[16px] leading-[1.95] text-white/70">
              {zhHome.philosophyCopy}
            </p>
            <ul className="mt-12 flex gap-10">
              {zhHome.values.map((v) => (
                <li key={v.label}>
                  <LineIcon name={v.icon} size={32} />
                  <span className="mt-4 block font-sans text-[14px] tracking-[0.1em] text-white/80">
                    {v.label}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link
                to="/zh/our-philosophy"
                className="font-sans text-[13px] tracking-[0.08em] text-brass transition-colors hover:text-white"
              >
                品牌理念 &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src="/images/upper-east-side-66th-after-02.webp"
            alt="MH Group 完成的上東區住宅室內"
            width={2400}
            height={1600}
            loading="lazy"
            decoding="async"
            className="photo-grade h-full min-h-[360px] w-full object-cover"
          />
        </div>
      </section>

      <Partnership
        withLockup
        eyebrow={zhHome.partnershipEyebrow}
        heading={zhHome.partnershipHeading}
        copy={zhHome.partnershipCopy}
      />

      <ClosingCTA
        title={zhHome.ctaHeading}
        sub={zhHome.ctaCopy}
        buttonLabel={zhHome.ctaButton}
        image="/images/upper-west-side-86th-after-03.webp"
        to="/zh/contact"
      />
    </>
  );
}
