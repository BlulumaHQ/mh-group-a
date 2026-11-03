import { createFileRoute } from "@tanstack/react-router";
import { GoldColumn, LineIcon, Reveal, SectionHeading } from "@/components/site/Primitives";
import { ClosingCTA, ManagedAddressList } from "@/components/site/Sections";
import { PartnerSalesBranding } from "@/components/site/PartnerSalesBranding";
import { abs, altLinks, services } from "@/data/site";
import { zhMeta, zhServices } from "@/data/zh";

export const Route = createFileRoute("/zh/services")({
  component: ZhServices,
  head: () => ({
    meta: [
      { title: zhMeta.services.title },
      { name: "description", content: zhMeta.services.description },
      { property: "og:title", content: zhMeta.services.title },
      { property: "og:description", content: zhMeta.services.description },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:url", content: abs("/zh/services") },
    ],
    links: [
      { rel: "canonical", href: abs("/zh/services") },
      ...altLinks("/services", "/zh/services"),
    ],
  }),
});

function ZhServices() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow={zhServices.eyebrow} title={zhServices.h1} />
          <p className="mt-8 max-w-[640px] pl-10 text-[16px] leading-[1.95] text-white/70">
            {zhServices.intro}
          </p>
        </div>
      </section>

      {zhServices.items.map((item, i) => {
        const ink = i % 2 === 1;
        const photo = services[i]!;
        return (
          <section
            key={item.title}
            className={`grid grid-cols-1 lg:grid-cols-2 ${ink ? "bg-ink" : "bg-paper"}`}
          >
            <div
              className={`${
                i % 2 === 0 ? "order-1" : "order-1 lg:order-2"
              } h-[280px] lg:h-auto lg:min-h-[520px]`}
            >
              <img
                src={photo.image}
                alt={item.title}
                width={photo.imageW}
                height={photo.imageH}
                loading="lazy"
                decoding="async"
                className="photo-grade h-full w-full object-cover"
              />
            </div>
            <div
              className={`${
                i % 2 === 0 ? "order-2" : "order-2 lg:order-1"
              } flex items-center px-5 py-16 lg:px-20 lg:py-24`}
            >
              <div className="w-full">
                <div className="flex">
                  <GoldColumn onPaper={!ink} />
                  <div>
                    <p className="eyebrow mb-4">SERVICE 0{i + 1}</p>
                    <h2
                      className={`text-[24px] leading-[1.4] lg:text-[34px] ${
                        ink ? "text-white" : "text-inktext"
                      }`}
                    >
                      {item.title}
                    </h2>
                  </div>
                </div>
                <p
                  className={`mt-7 max-w-[520px] text-[16px] leading-[1.95] ${
                    ink ? "text-white/70" : "text-mutedtext"
                  }`}
                >
                  {item.blurb}
                </p>
                <div className="mt-8">
                  <LineIcon name={photo.icon} size={40} />
                </div>

                {i === 0 ? (
                  <div className="mt-12 border-t border-hairline pt-10">
                    <p className="font-sans text-[12px] tracking-[0.14em] text-mutedtext">
                      物件買賣合作夥伴
                    </p>
                    <PartnerSalesBranding align="left" size="sm" className="mt-6" />
                  </div>
                ) : null}

                {i === 1 ? (
                  <div className="mt-12 border-t border-white/15 pt-10">
                    <p className="font-sans text-[13px] tracking-[0.14em] text-brass">
                      我們管理的住宅
                    </p>
                    <ManagedAddressList onInk className="mt-6" />
                  </div>
                ) : null}

                {i === 2 ? (
                  <ul className="mt-12 divide-y divide-hairline border-t border-hairline">
                    {zhServices.renovationDetail.map((d) => (
                      <li key={d.heading} className="flex gap-6 py-7">
                        <span
                          aria-hidden="true"
                          className="mt-1 block h-[46px] w-[4px] shrink-0 bg-brass"
                          style={{ boxShadow: "inset 1px 0 0 var(--color-brass-light)" }}
                        />
                        <div>
                          <h3 className="font-sans text-[15px] font-medium tracking-[0.04em] text-inktext">
                            {d.heading}
                          </h3>
                          <p className="mt-3 text-[15px] leading-[1.9] text-mutedtext">
                            {d.copy}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </section>
        );
      })}

      <section className="section-pad bg-paper">
        <div className="container-mh">
          <Reveal>
            <SectionHeading onPaper align="center" title={zhServices.processHeading} />
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {zhServices.steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 80}>
                <div>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-[44px] leading-none text-brass">
                      {step.num}
                    </span>
                    <LineIcon name={step.icon} size={30} />
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

      <ClosingCTA
        title={zhServices.ctaHeading}
        sub=""
        buttonLabel={zhServices.ctaButton}
        image="/images/upper-west-side-86th-after-03.webp"
        to="/zh/contact"
      />
    </>
  );
}
