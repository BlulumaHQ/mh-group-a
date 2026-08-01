import { createFileRoute } from "@tanstack/react-router";
import { ClosingCTA, Process } from "@/components/site/Sections";
import { GoldColumn, LineIcon, SectionHeading } from "@/components/site/Primitives";
import { abs, renovationDetail, services } from "@/data/site";

const title = "Services | MH Group LLC";
const description =
  "Real estate sales and purchase, property management, renovation and project management, and furniture, styling and move-in service across Manhattan.";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: abs("/services") },
    ],
    links: [{ rel: "canonical", href: abs("/services") }],
  }),
});

function ServicesPage() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading
            as="h1"
            eyebrow="INTEGRATED. SEAMLESS. EXCEPTIONAL."
            title="Manhattan's Premier Renovation Management Team"
          />
          <p className="mt-8 max-w-[600px] pl-10 text-[16px] leading-[1.75] text-white/70">
            One partner across the entire home journey — buying, managing, renovating,
            furnishing and moving in.
          </p>
        </div>
      </section>

      {services.map((s, i) => {
        const ink = i % 2 === 1;
        return (
          <section
            key={s.slug}
            className={`grid grid-cols-1 lg:grid-cols-2 ${ink ? "bg-ink" : "bg-paper"}`}
          >
            <div
              className={`${
                i % 2 === 0 ? "order-1" : "order-1 lg:order-2"
              } h-[280px] lg:h-auto lg:min-h-[520px]`}
            >
              <img
                src={s.image}
                alt={s.imageAlt}
                width={s.imageW}
                height={s.imageH}
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
                      className={`text-[28px] lg:text-[40px] ${
                        ink ? "text-white" : "text-inktext"
                      }`}
                    >
                      {s.title}
                    </h2>
                  </div>
                </div>
                <p
                  className={`mt-7 max-w-[520px] text-[16px] leading-[1.75] ${
                    ink ? "text-white/70" : "text-mutedtext"
                  }`}
                >
                  {s.blurb}
                </p>
                <div className="mt-8">
                  <LineIcon name={s.icon} size={40} />
                </div>

                {s.slug === "renovation" ? (
                  <ul className="mt-12 divide-y divide-hairline border-t border-hairline">
                    {renovationDetail.map((d) => (
                      <li key={d.heading} className="flex gap-6 py-7">
                        <span
                          aria-hidden="true"
                          className="mt-1 block h-[46px] w-[4px] shrink-0 bg-brass"
                          style={{ boxShadow: "inset 1px 0 0 var(--color-brass-light)" }}
                        />
                        <div>
                          <h3 className="font-sans text-[13px] font-medium uppercase tracking-[0.08em] text-inktext">
                            {d.heading}
                          </h3>
                          <p className="mt-3 text-[15px] leading-[1.75] text-mutedtext">
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

      <Process onPaper />

      <ClosingCTA
        title="Ready to Begin Your Journey?"
        sub="Let us take care of the details, so you can enjoy the possibilities."
        buttonLabel="Get in Touch"
        image="/images/upper-west-side-86th-after-03.webp"
      />
    </>
  );
}