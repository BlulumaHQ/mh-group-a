import { createFileRoute } from "@tanstack/react-router";
import { GoldColumn, SectionHeading } from "@/components/site/Primitives";
import { abs, altLinks } from "@/data/site";
import { zhLegalNote, zhMeta, zhTerms } from "@/data/zh";

export const Route = createFileRoute("/zh/terms-of-use")({
  component: ZhTermsPage,
  head: () => ({
    meta: [
      { title: zhMeta.terms.title },
      { name: "description", content: zhMeta.terms.description },
      { property: "og:title", content: zhMeta.terms.title },
      { property: "og:description", content: zhMeta.terms.description },
      { property: "og:locale", content: "zh_TW" },
      { property: "og:url", content: abs("/zh/terms-of-use") },
    ],
    links: [
      { rel: "canonical", href: abs("/zh/terms-of-use") },
      ...altLinks("/terms-of-use", "/zh/terms-of-use"),
    ],
  }),
});

function ZhTermsPage() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow={zhTerms.eyebrow} title={zhTerms.h1} />
        </div>
      </section>
      <section className="section-pad bg-paper">
        <div className="container-mh max-w-[760px] space-y-12">
          {zhTerms.sections.map((s) => (
            <div key={s.h} className="flex">
              <GoldColumn onPaper />
              <div>
                <h2 className="text-[22px] leading-[1.5] text-inktext">{s.h}</h2>
                <p className="mt-4 text-[16px] leading-[2] text-mutedtext">{s.p}</p>
              </div>
            </div>
          ))}
          <p className="border-t border-hairline pt-8 text-[14px] leading-[1.9] text-mutedtext">
            {zhLegalNote}
          </p>
        </div>
      </section>
    </>
  );
}
