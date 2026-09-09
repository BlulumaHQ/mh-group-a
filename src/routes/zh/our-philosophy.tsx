import { createFileRoute } from "@tanstack/react-router";
import { ClosingCTA, Partnership } from "@/components/site/Sections";
import { GoldColumn, LineIcon, SectionHeading } from "@/components/site/Primitives";
import { abs, altLinks } from "@/data/site";
import { zhMeta, zhPhilosophy } from "@/data/zh";

export const Route = createFileRoute("/zh/our-philosophy")({
  component: ZhPhilosophy,
  head: () => ({
    meta: [
      { title: zhMeta.philosophy.title },
      { name: "description", content: zhMeta.philosophy.description },
      { property: "og:title", content: zhMeta.philosophy.title },
      { property: "og:description", content: zhMeta.philosophy.description },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:url", content: abs("/zh/our-philosophy") },
    ],
    links: [
      { rel: "canonical", href: abs("/zh/our-philosophy") },
      ...altLinks("/our-philosophy", "/zh/our-philosophy"),
    ],
  }),
});

function ZhPhilosophy() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow={zhPhilosophy.eyebrow} title={zhPhilosophy.h1} />
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-mh">
          <div className="flex">
            <GoldColumn onPaper />
            <h2 className="max-w-[900px] text-[28px] leading-[1.35] text-inktext lg:text-[44px]">
              {zhPhilosophy.h1}
            </h2>
          </div>
          <p className="mt-12 max-w-[760px] pl-10 text-[17px] leading-[2] text-mutedtext">
            {zhPhilosophy.intro}
          </p>
        </div>
      </section>

      <section className="bg-paper pb-[72px] lg:pb-[128px]">
        <div className="container-mh grid grid-cols-1 divide-y divide-hairline border-t border-hairline lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {zhPhilosophy.values.map((p) => (
            <div key={p.label} className="py-10 lg:px-10 lg:py-12">
              <LineIcon name={p.icon} size={40} />
              <h3 className="mt-6 font-sans text-[16px] font-medium tracking-[0.1em] text-inktext">
                {p.label}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.9] text-mutedtext">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <img
          src="/images/upper-east-side-66th-after-02.webp"
          alt="MH Group 完成的上東區住宅室內"
          width={2400}
          height={1600}
          loading="lazy"
          decoding="async"
          className="photo-grade h-[320px] w-full object-cover lg:h-[520px]"
        />
      </section>

      <Partnership
        eyebrow={zhPhilosophy.partnershipEyebrow}
        heading={zhPhilosophy.partnershipHeading}
        copy={zhPhilosophy.partnershipCopy}
      />

      <ClosingCTA
        title={zhPhilosophy.ctaHeading}
        sub={zhPhilosophy.ctaCopy}
        buttonLabel={zhPhilosophy.ctaButton}
        image="/images/upper-west-side-86th-after-03.webp"
        to="/zh/contact"
      />
    </>
  );
}
