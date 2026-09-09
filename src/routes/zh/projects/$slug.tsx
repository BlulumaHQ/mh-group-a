import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProject } from "@/data/projects";
import { ClosingCTA } from "@/components/site/Sections";
import { GoldColumn, LineIcon, Reveal } from "@/components/site/Primitives";
import { abs, altLinks } from "@/data/site";
import { zhProjects, zhProjectShared } from "@/data/zh";

export const Route = createFileRoute("/zh/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project || !zhProjects[params.slug]) throw notFound();
    return { slug: project.slug };
  },
  head: ({ params }) => {
    const zh = zhProjects[params.slug];
    const title = `${zh?.name ?? "案例"} | MH Group LLC`;
    const description = zh
      ? `${zh.name}｜${zhProjectShared.scope}，位於${zh.location}，由 MH Group LLC 全程統籌管理。`
      : "由 MH Group LLC 統籌管理的曼哈頓住宅翻新案例。";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "zh_TW" },
        { property: "og:url", content: abs(`/zh/projects/${params.slug}`) },
      ],
      links: [
        { rel: "canonical", href: abs(`/zh/projects/${params.slug}`) },
        ...altLinks(`/projects/${params.slug}`, `/zh/projects/${params.slug}`),
      ],
    };
  },
  component: ZhProjectDetail,
});

function ZhProjectDetail() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug)!;
  const zh = zhProjects[slug]!;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const meta = [
    { label: zhProjectShared.locationLabel, value: zh.location, icon: "pin" },
    { label: zhProjectShared.scopeLabel, value: zhProjectShared.scope, icon: "scissors" },
  ];

  return (
    <>
      <section className="relative isolate bg-ink">
        <div className="container-mh pt-8">
          <Link
            to="/zh/projects"
            className="font-sans text-[12px] tracking-[0.12em] text-white/70 transition-colors hover:text-brass"
          >
            &lsaquo; {zhProjectShared.back}
          </Link>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <div className="relative h-[300px] w-full lg:absolute lg:inset-y-0 lg:left-[42%] lg:h-full lg:w-[58%]">
            <img
              src={project.hero.src}
              alt={zh.name}
              width={project.hero.w}
              height={project.hero.h}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="photo-grade h-full w-full object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[14%]"
              style={{
                background:
                  "linear-gradient(to right, #133846 0%, rgba(19,56,70,0) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 bg-ink lg:w-[46%]">
            <div className="px-5 py-16 lg:px-0 lg:py-28 lg:pl-16 xl:pl-[max(64px,calc((100vw-1280px)/2+64px))]">
              <div className="max-w-[520px]">
                <div className="flex">
                  <GoldColumn />
                  <div>
                    <p className="eyebrow mb-4">{zhProjectShared.serviceLabel}</p>
                    <h1 className="text-[32px] leading-[1.3] text-white lg:text-[48px]">
                      {zh.name}
                    </h1>
                    <p className="mt-3 font-display text-[20px] text-white/80 lg:text-[28px]">
                      {zhProjectShared.subtitle}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-[16px] leading-[1.95] text-white/70">{zh.intro}</p>
                <dl className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {meta.map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <LineIcon name={m.icon} size={20} />
                      <div>
                        <dt className="font-sans text-[11px] tracking-[0.12em] text-brass">
                          {m.label}
                        </dt>
                        <dd className="mt-1 text-[14px] text-white">{m.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-ink-deep lg:absolute lg:bottom-0 lg:left-[42%] lg:right-0">
            <div
              className="grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"
              style={{ borderColor: "rgba(191,147,91,.25)" }}
            >
              {zhProjectShared.stats.map((s) => (
                <div
                  key={s.l1}
                  className="px-6 py-7"
                  style={{ borderColor: "rgba(191,147,91,.25)" }}
                >
                  <span className="font-display text-[30px] text-brass">{s.num}</span>
                  <p className="mt-2 font-sans text-[11px] leading-[1.7] tracking-[0.08em] text-white/70">
                    {s.l1}
                    <br />
                    {s.l2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-mh grid grid-cols-1 gap-12 lg:grid-cols-[26%_1fr] lg:gap-16">
          <div className="flex">
            <GoldColumn onPaper />
            <div>
              <p className="eyebrow">{zhProjectShared.highlightsHeading}</p>
              <span className="mt-5 block h-px w-[60px] bg-brass" />
              <p className="mt-6 text-[15px] leading-[1.9] text-mutedtext">
                {zhProjectShared.highlightsIntro}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {zhProjectShared.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="h-full py-8 sm:px-6 lg:py-0">
                  <LineIcon name={h.icon} size={36} />
                  <h2 className="mt-6 font-sans text-[15px] font-medium leading-[1.6] tracking-[0.04em] text-inktext">
                    {h.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.9] text-mutedtext">{h.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label={`${zh.name} 相簿`}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {project.gallery.map((g, i) => (
            <button
              key={g.src + i}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
              aria-label={`放大檢視：${zh.name}`}
            >
              <img
                src={g.src}
                alt={zh.name}
                width={g.w}
                height={g.h}
                loading="lazy"
                decoding="async"
                className="photo-grade h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="案例照片"
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(13,40,51,.94)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="關閉"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 font-sans text-[13px] tracking-[0.12em] text-brass"
          >
            關閉 ✕
          </button>
          <img
            src={project.gallery[lightbox]!.src}
            alt={zh.name}
            width={project.gallery[lightbox]!.w}
            height={project.gallery[lightbox]!.h}
            decoding="async"
            className="photo-grade max-h-[86vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}

      <section className="section-pad bg-paper">
        <div className="container-mh grid grid-cols-1 gap-12 lg:grid-cols-[30%_1fr] lg:gap-16">
          <div className="flex">
            <GoldColumn onPaper />
            <div>
              <p className="eyebrow">{zhProjectShared.beforeLabel}</p>
              <p className="mt-6 text-[15px] leading-[1.9] text-mutedtext">
                {zhProjectShared.beforeCopy}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {project.before.map((b) => (
              <img
                key={b.src}
                src={b.src}
                alt={`${zh.name}｜${zhProjectShared.beforeLabel}`}
                width={b.w}
                height={b.h}
                loading="lazy"
                decoding="async"
                className="photo-grade h-[200px] w-[200px] object-cover lg:h-[240px] lg:w-[240px]"
              />
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA
        title={zhProjectShared.ctaHeading}
        sub=""
        buttonLabel={zhProjectShared.ctaButton}
        image={project.ctaImage}
        ghost
        to="/zh/contact"
      />
    </>
  );
}
