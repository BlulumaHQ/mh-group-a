import { Link } from "@tanstack/react-router";
import { Btn, GoldColumn, LineIcon, Reveal, SectionHeading } from "./Primitives";
import { PartnerSalesBranding } from "./PartnerSalesBranding";
import { services, processSteps } from "@/data/site";
import { managedProperties } from "@/data/managedProperties";
import { projects, type Project } from "@/data/projects";

/* ---------- Services overview (paper band, hairline columns) ---------- */
export function ServicesOverview() {
  return (
    <section className="section-pad bg-paper">
      <div className="container-mh">
        <Reveal>
          <SectionHeading
            onPaper
            align="center"
            eyebrow="INTEGRATED. SEAMLESS. EXCEPTIONAL."
            title="A One-Stop Solution for Your Home Journey"
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 divide-y divide-hairline border-hairline sm:grid-cols-2 sm:divide-x lg:grid-cols-4 lg:divide-y-0">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <div className="h-full px-0 py-10 sm:px-8 lg:py-2">
                <LineIcon name={s.icon} size={44} />
                <h3 className="mt-7 max-w-[220px] font-sans text-[13px] font-medium uppercase leading-[1.5] tracking-[0.08em] text-inktext">
                  {s.title}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.75] text-mutedtext">
                  {s.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Project card ---------- */
export function ProjectCard({
  project,
  eager = false,
  locale = "en",
  name,
  scope,
}: {
  project: Project;
  eager?: boolean;
  locale?: "en" | "zh";
  name?: string;
  scope?: string;
}) {
  return (
    <Link
      to={locale === "zh" ? "/zh/projects/$slug" : "/projects/$slug"}
      params={{ slug: project.slug }}
      className="group relative block overflow-hidden"
      style={{ aspectRatio: "4 / 5" }}
    >
      <img
        src={project.cardImage.src}
        alt={project.cardImage.alt}
        width={project.cardImage.w}
        height={project.cardImage.h}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="photo-grade absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.2,.6,.2,1)] group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 transition-opacity duration-[900ms] group-hover:opacity-60"
        style={{
          background:
            "linear-gradient(to top, rgba(13,40,51,.92) 0%, rgba(13,40,51,.35) 45%, rgba(13,40,51,0) 75%)",
        }}
      />
      <span className="absolute inset-x-0 bottom-0 block p-5">
        <span className="block font-display text-[19px] text-white">
          {name ?? project.name}
        </span>
        <span className="mt-1 block font-sans text-[12px] uppercase tracking-[0.1em] text-brass">
          {scope ?? project.scope}
        </span>
      </span>
    </Link>
  );
}

/* ---------- Featured projects (ink band) ---------- */
export function FeaturedProjects() {
  return (
    <section className="section-pad bg-ink">
      <div className="container-mh">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading eyebrow="FEATURED PROJECTS" title="Spaces We Transform" />
          </Reveal>
          <Reveal delay={80}>
            <Btn to="/projects" variant="ghost-white" arrow>
              View All Projects
            </Btn>
          </Reveal>
        </div>
      </div>
      <div className="container-mh mt-14">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */
export function Process({ onPaper = true }: { onPaper?: boolean }) {
  return (
    <section className={`section-pad ${onPaper ? "bg-paper" : "bg-ink"}`}>
      <div className="container-mh">
        <Reveal>
          <SectionHeading
            onPaper={onPaper}
            align="center"
            eyebrow="OUR PROCESS"
            title="A Seamless Experience from Start to Finish"
          />
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.num} delay={i * 80}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="font-display text-[44px] leading-none text-brass">
                    {step.num}
                  </span>
                  <LineIcon name={step.icon} size={30} />
                  {i < processSteps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute right-0 hidden translate-x-1/2 font-sans text-[18px] text-brass lg:block"
                    >
                      &rarr;
                    </span>
                  ) : null}
                </div>
                <span className="mt-6 block h-px w-10 bg-brass" />
                <h3
                  className={`mt-6 font-sans text-[13px] font-medium uppercase tracking-[0.12em] ${
                    onPaper ? "text-inktext" : "text-white"
                  }`}
                >
                  {step.label}
                </h3>
                <p
                  className={`mt-3 text-[15px] leading-[1.75] ${
                    onPaper ? "text-mutedtext" : "text-white/65"
                  }`}
                >
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Philosophy split ---------- */
const pillars = [
  { label: "INTEGRITY", icon: "integrity" },
  { label: "EXPERTISE", icon: "expertise" },
  { label: "EXCELLENCE", icon: "excellence" },
];

export function PhilosophySplit() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="order-2 flex items-center bg-ink px-5 py-20 lg:order-1 lg:px-24 lg:py-24">
        <div>
          <div className="flex">
            <GoldColumn />
            <div>
              <p className="eyebrow mb-4">OUR PHILOSOPHY</p>
              <h2 className="text-[28px] text-white lg:text-[44px]">
                Built on Trust.
                <br />
                Driven by Excellence.
              </h2>
            </div>
          </div>
          <p className="mt-8 max-w-[520px] text-[16px] leading-[1.75] text-white/70">
            At MH Group LLC, we believe a home is more than a space — it&apos;s where life
            happens and wealth grows. We are committed to delivering unparalleled service,
            craftsmanship, and value at every step.
          </p>
          <ul className="mt-12 flex gap-10">
            {pillars.map((p) => (
              <li key={p.label}>
                <LineIcon name={p.icon} size={32} />
                <span className="mt-4 block font-sans text-[11px] uppercase tracking-[0.16em] text-white/80">
                  {p.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src="/images/upper-east-side-66th-after-02.webp"
          alt="Renovated interior of the Upper East Side Residence by MH Group"
          width={2400}
          height={1600}
          loading="lazy"
          decoding="async"
          className="photo-grade h-full min-h-[360px] w-full object-cover"
        />
      </div>
    </section>
  );
}

/* ---------- Partnership (no team photo supplied → centred statement) ---------- */
export function Partnership({
  eyebrow = "In Partnership with",
  heading = "The Maggie Huang Team",
  copy = "As the parent company, MH Group LLC provides the space-extended services and resources that power The Maggie Huang Team\u2019s real estate expertise and client success.",
  withLockup = false,
}: {
  eyebrow?: string;
  heading?: string;
  copy?: string;
  withLockup?: boolean;
}) {
  return (
    <section className="section-pad bg-paper">
      <div className="container-mh flex flex-col items-center text-center">
        {withLockup ? <PartnerSalesBranding /> : null}
        <p
          className={`${withLockup ? "mt-10" : ""} font-sans text-[12px] uppercase tracking-[0.18em] text-mutedtext`}
        >
          {eyebrow}
        </p>
        <h2 className="mt-4 max-w-[840px] text-[30px] text-inktext lg:text-[44px]">
          {heading}
        </h2>
        <span className="mt-8 block h-px w-12 bg-brass" />
        <p className="mt-8 max-w-[640px] text-[16px] leading-[1.75] text-mutedtext">
          {copy}
        </p>
      </div>
    </section>
  );
}

/* ---------- Closing CTA ---------- */
export function ClosingCTA({
  title,
  sub,
  buttonLabel,
  image,
  ghost = false,
  to = "/contact",
}: {
  title: string;
  sub: string;
  buttonLabel: string;
  image: string;
  ghost?: boolean;
  to?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="photo-grade absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ background: "rgba(19,56,70,.78)" }}
      />
      <div className="container-mh flex flex-col items-center py-[88px] text-center lg:py-[120px]">
        <Reveal>
          <h2 className="text-[28px] text-white lg:text-[44px]">{title}</h2>
          <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.75] text-white/75">
            {sub}
          </p>
          <div className="mt-10 flex justify-center">
            <Btn to={to} variant={ghost ? "ghost-brass" : "brass"} arrow>
              {buttonLabel}
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}