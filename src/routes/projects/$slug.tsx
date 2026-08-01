import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProject, projectHighlights, projects } from "@/data/projects";
import { ClosingCTA } from "@/components/site/Sections";
import { GoldColumn, LineIcon, Reveal } from "@/components/site/Primitives";
import { abs } from "@/data/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { slug: project.slug };
  },
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = `${project?.name ?? "Project"} | MH Group LLC`;
    const description = project
      ? `${project.name} — ${project.scope} in ${project.location}, managed end to end by MH Group LLC.`
      : "A completed Manhattan renovation managed by MH Group LLC.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: abs(`/projects/${params.slug}`) },
      ],
      links: [{ rel: "canonical", href: abs(`/projects/${params.slug}`) }],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { slug } = Route.useLoaderData();
  const project = getProject(slug)!;
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Only cells with real data are rendered.
  const meta = [
    { label: "LOCATION", value: project.location, icon: "pin" },
    { label: "SCOPE", value: project.scope, icon: "scissors" },
    project.sizeSqft
      ? { label: "SIZE", value: project.sizeSqft, icon: "house" }
      : null,
    project.completed
      ? { label: "COMPLETED", value: project.completed, icon: "calendar" }
      : null,
  ].filter(Boolean) as { label: string; value: string; icon: string }[];

  const stats = [
    project.durationWeeks
      ? { num: project.durationWeeks, l1: "WEEKS", l2: "ON SITE" }
      : null,
    { num: "100%", l1: "PROJECT MANAGEMENT", l2: "BY MH GROUP" },
    { num: "1", l1: "DEDICATED TEAM", l2: "FROM START TO FINISH" },
  ].filter(Boolean) as { num: string; l1: string; l2: string }[];

  return (
    <>
      <section className="relative isolate bg-ink">
        <div className="container-mh pt-8">
          <Link
            to="/projects"
            className="font-sans text-[11px] uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-brass"
          >
            &lsaquo; Back to Projects
          </Link>
        </div>

        <div className="relative mt-6 lg:mt-0">
          <div className="relative h-[300px] w-full lg:absolute lg:inset-y-0 lg:left-[42%] lg:h-full lg:w-[58%]">
            <img
              src={project.hero.src}
              alt={project.hero.alt}
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
                    <p className="eyebrow mb-4">RENOVATION &amp; PROJECT MANAGEMENT</p>
                    <h1 className="text-[36px] text-white lg:text-[58px]">
                      {project.name}
                    </h1>
                    <p className="mt-2 font-display text-[24px] text-white/80 lg:text-[34px]">
                      {project.scope}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-[16px] leading-[1.75] text-white/70">
                  {project.intro}
                </p>
                <dl
                  className={`mt-12 grid gap-8 ${
                    meta.length > 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"
                  }`}
                >
                  {meta.map((m) => (
                    <div key={m.label} className="flex items-start gap-3">
                      <LineIcon name={m.icon} size={20} />
                      <div>
                        <dt className="font-sans text-[10px] uppercase tracking-[0.16em] text-brass">
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

          {/* stats strip along the bottom of the hero image */}
          <div className="relative z-10 bg-ink-deep lg:absolute lg:bottom-0 lg:left-[42%] lg:right-0">
            <div
              className="grid divide-y sm:grid-cols-2 sm:divide-x sm:divide-y-0"
              style={{ borderColor: "rgba(191,147,91,.25)" }}
            >
              {stats.map((s) => (
                <div
                  key={s.l1}
                  className="px-6 py-7"
                  style={{ borderColor: "rgba(191,147,91,.25)" }}
                >
                  <span className="font-display text-[30px] text-brass">{s.num}</span>
                  <p className="mt-2 font-sans text-[10px] uppercase leading-[1.6] tracking-[0.12em] text-white/70">
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

      {/* Project highlights */}
      <section className="section-pad bg-paper">
        <div className="container-mh grid grid-cols-1 gap-12 lg:grid-cols-[26%_1fr] lg:gap-16">
          <div className="flex">
            <GoldColumn onPaper />
            <div>
              <p className="eyebrow">PROJECT HIGHLIGHTS</p>
              <span className="mt-5 block h-px w-[60px] bg-brass" />
              <p className="mt-6 text-[15px] leading-[1.75] text-mutedtext">
                Every phase of this residence was handled by MH Group — compliance,
                contractors, materials and site logistics under one roof.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
            {projectHighlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80}>
                <div className="h-full py-8 sm:px-6 lg:py-0">
                  <LineIcon name={h.icon} size={36} />
                  <h2 className="mt-6 font-sans text-[13px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-inktext">
                    {h.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.75] text-mutedtext">{h.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed gallery */}
      <section aria-label={`${project.name} gallery`}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {project.gallery.map((g, i) => (
            <button
              key={g.src + i}
              type="button"
              onClick={() => setLightbox(i)}
              className="group relative block overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
              aria-label={`Open larger view: ${g.alt}`}
            >
              <img
                src={g.src}
                alt={g.alt}
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
          aria-label="Project photograph"
          className="fixed inset-0 z-[100] flex items-center justify-center p-6"
          style={{ background: "rgba(13,40,51,.94)" }}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 font-sans text-[12px] uppercase tracking-[0.16em] text-brass"
          >
            Close ✕
          </button>
          <img
            src={project.gallery[lightbox]!.src}
            alt={project.gallery[lightbox]!.alt}
            width={project.gallery[lightbox]!.w}
            height={project.gallery[lightbox]!.h}
            decoding="async"
            className="photo-grade max-h-[86vh] w-auto max-w-full object-contain"
          />
        </div>
      ) : null}

      {/* Before */}
      <section className="section-pad bg-paper">
        <div className="container-mh grid grid-cols-1 gap-12 lg:grid-cols-[30%_1fr] lg:gap-16">
          <div className="flex">
            <GoldColumn onPaper />
            <div>
              <p className="eyebrow">BEFORE</p>
              <p className="mt-6 text-[15px] leading-[1.75] text-mutedtext">
                The apartment as we found it, photographed at the first site visit.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {project.before.map((b) => (
              <img
                key={b.src}
                src={b.src}
                alt={b.alt}
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
        title="Let's Build Your Vision, Beautifully."
        sub="From concept to completion, MH Group is your trusted partner for a seamless and elevated home journey."
        buttonLabel="Start Your Project"
        image={project.ctaImage}
        ghost
      />
    </>
  );
}

export const allProjectSlugs = projects.map((p) => p.slug);