import { createFileRoute } from "@tanstack/react-router";
import { GoldColumn, SectionHeading } from "@/components/site/Primitives";
import { site } from "@/data/site";

const title = "Privacy Policy | MH Group LLC";
const description =
  "How MH Group LLC collects, uses and protects the information you share through this website.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
});

const sections = [
  {
    h: "Information We Collect",
    p: "We collect only the information you choose to give us: the name, email address, phone number, selected service and message you submit through our contact form, or the details you share with us by email or telephone.",
  },
  {
    h: "How We Use Your Information",
    p: "Your information is used solely to respond to your enquiry and to provide the real estate, property management, renovation and furnishing services you ask us about. We do not sell, rent or trade your information.",
  },
  {
    h: "Sharing",
    p: "We share your details with third parties only where it is necessary to deliver a service you have engaged us for — for example a contractor, vendor or building management office — or where we are required to do so by law.",
  },
  {
    h: "Cookies and Analytics",
    p: "This website does not use advertising cookies or third-party tracking profiles. Any technical data collected by our hosting provider is used only to keep the site secure and available.",
  },
  {
    h: "Data Retention and Security",
    p: "We keep enquiry records only for as long as they are needed for the purpose they were provided, and we apply reasonable administrative and technical measures to protect them.",
  },
  {
    h: "Your Choices",
    p: `You may ask us to correct or delete the information we hold about you at any time by writing to ${site.email}.`,
  },
];

function PrivacyPage() {
  return (
    <>
      <section className="bg-ink px-5 py-24 lg:px-0 lg:py-32">
        <div className="container-mh">
          <SectionHeading as="h1" eyebrow="LEGAL" title="Privacy Policy" />
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