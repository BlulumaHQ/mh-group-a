import { createFileRoute } from "@tanstack/react-router";
import { GoldColumn, SectionHeading } from "@/components/site/Primitives";
import { abs, site } from "@/data/site";

const title = "Terms of Use | MH Group LLC";
const description =
  "The terms that govern your use of the MH Group LLC website, including content ownership and limitations of liability.";

export const Route = createFileRoute("/terms-of-use")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: abs("/terms-of-use") },
    ],
    links: [{ rel: "canonical", href: abs("/terms-of-use") }],
  }),
});

const sections = [
  {
    h: "Acceptance of These Terms",
    p: "By using this website you agree to these terms. If you do not agree with them, please do not use the site.",
  },
  {
    h: "Use of the Site",
    p: "This website is provided for information about MH Group LLC and its services. You may not use it for any unlawful purpose, attempt to interfere with its operation, or copy its contents for commercial use without our written permission.",
  },
  {
    h: "Intellectual Property",
    p: "All text, photography, marks and design elements on this site are owned by MH Group LLC or used with permission. Project photographs depict completed MH Group work and may not be reproduced without consent.",
  },
  {
    h: "No Professional Advice",
    p: "Content on this site is general in nature and is not legal, financial, construction or real estate advice for any particular transaction. Services are governed by the written agreement entered into between MH Group LLC and its client.",
  },
  {
    h: "Limitation of Liability",
    p: "The site is provided on an as-is basis. To the fullest extent permitted by law, MH Group LLC is not liable for any loss arising from your use of, or reliance on, this website.",
  },
  {
    h: "Contact",
    p: `Questions about these terms may be sent to ${site.email}.`,
  },
];

function TermsPage() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow="LEGAL" title="Terms of Use" />
        </div>
      </section>
      <section className="section-pad bg-paper">
        <div className="container-mh max-w-[760px] space-y-12">
          {sections.map((s) => (
            <div key={s.h} className="flex">
              <GoldColumn onPaper />
              <div>
                <h2 className="text-[22px] text-inktext">{s.h}</h2>
                <p className="mt-4 text-[16px] leading-[1.8] text-mutedtext">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}