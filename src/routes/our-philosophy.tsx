import { createFileRoute } from "@tanstack/react-router";
import { ClosingCTA, Partnership } from "@/components/site/Sections";
import { GoldColumn, LineIcon, SectionHeading } from "@/components/site/Primitives";

const title = "Our Philosophy | MH Group LLC";
const description =
  "Built on trust, driven by excellence. How MH Group LLC approaches every Manhattan home — with integrity, expertise and craftsmanship at every step.";

export const Route = createFileRoute("/our-philosophy")({
  component: PhilosophyPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/our-philosophy" },
    ],
    links: [{ rel: "canonical", href: "/our-philosophy" }],
  }),
});

const pillars = [
  {
    label: "INTEGRITY",
    icon: "integrity",
    copy: "Transparent budgets, honest schedules and clear communication from the first walkthrough to the final inspection.",
  },
  {
    label: "EXPERTISE",
    icon: "expertise",
    copy: "Manhattan buildings, boards and trades are their own discipline. We know the requirements before they become delays.",
  },
  {
    label: "EXCELLENCE",
    icon: "excellence",
    copy: "Every detail is inspected against our own standard before a residence is considered complete.",
  },
];

function PhilosophyPage() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow="OUR PHILOSOPHY" title="Built on Trust." />
        </div>
      </section>

      <section className="section-pad bg-paper">
        <div className="container-mh">
          <div className="flex">
            <GoldColumn onPaper />
            <h2 className="max-w-[900px] text-[32px] leading-[1.08] text-inktext lg:text-[56px]">
              Built on Trust.
              <br />
              Driven by Excellence.
            </h2>
          </div>
          <p className="mt-12 max-w-[720px] pl-10 text-[18px] leading-[1.8] text-mutedtext">
            At MH Group LLC, we believe a home is more than a space — it&apos;s where life
            happens and wealth grows. We are committed to delivering unparalleled service,
            craftsmanship, and value at every step.
          </p>
        </div>
      </section>

      <section className="bg-paper pb-[72px] lg:pb-[128px]">
        <div className="container-mh grid grid-cols-1 divide-y divide-hairline border-t border-hairline lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {pillars.map((p) => (
            <div key={p.label} className="py-10 lg:px-10 lg:py-12">
              <LineIcon name={p.icon} size={40} />
              <h3 className="mt-6 font-sans text-[12px] font-medium uppercase tracking-[0.16em] text-inktext">
                {p.label}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-mutedtext">{p.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink">
        <img
          src="/images/upper-east-side-66th-after-02.webp"
          alt="Renovated interior of the Upper East Side Residence by MH Group"
          width={2400}
          height={1600}
          loading="lazy"
          decoding="async"
          className="photo-grade h-[320px] w-full object-cover lg:h-[520px]"
        />
      </section>

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