import { Link, useRouterState } from "@tanstack/react-router";
import { MHCircleMark } from "./Logo";
import { LineIcon } from "./Primitives";
import { site } from "@/data/site";
import { zhSite } from "@/data/zh";
import { isZh } from "@/lib/locale";

const navEn = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Our Philosophy", to: "/our-philosophy" },
  { label: "Contact", to: "/contact" },
];

const serviceLinksEn = [
  "Real Estate Sales & Purchase",
  "Property Management",
  "Renovation & Project Management",
  "Furniture, Styling & Move-in Service",
];

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const zh = isZh(pathname);

  const navLinks = zh ? zhSite.nav : navEn;
  const serviceLinks = zh ? zhSite.footerServices : serviceLinksEn;
  const servicesHref = zh ? "/zh/services" : "/services";
  const tagline = zh ? zhSite.footerIntro : site.footerTagline;

  const headings = zh
    ? zhSite.labels
    : {
        navigation: "Navigation",
        services: "Services",
        contact: "Contact",
      };

  return (
    <footer className="bg-ink">
      <div className="container-mh grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
        <div>
          <MHCircleMark size={92} />
          <p className="mt-6 max-w-[300px] text-[14px] leading-[1.9] text-white/60">
            {tagline}
          </p>
        </div>

        <div>
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-brass">
            {headings.navigation}
          </h2>
          <ul className="mt-6 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-[14px] text-white/70 transition-colors hover:text-brass"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-brass">
            {headings.services}
          </h2>
          <ul className="mt-6 space-y-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link
                  to={servicesHref}
                  className="text-[14px] text-white/70 transition-colors hover:text-brass"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-brass">
            {headings.contact}
          </h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <LineIcon name="phone" size={16} />
              <a
                href={site.phoneHref}
                className="text-[14px] text-white/70 transition-colors hover:text-brass"
              >
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LineIcon name="mail" size={16} />
              <a
                href={`mailto:${site.email}`}
                className="text-[14px] text-white/70 transition-colors hover:text-brass"
              >
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <LineIcon name="pin" size={16} />
              <span className="text-[14px] text-white/70">
                {zh ? zhSite.location : site.location}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "rgba(191,147,91,.18)" }}>
        <div className="container-mh flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-[12px] text-white/55">
            {zh ? zhSite.copyright : "© 2026 MH Group LLC. All rights reserved."}
          </p>
          <p className="flex items-center gap-3 text-[12px] text-white/55">
            <Link
              to={zh ? "/zh/privacy-policy" : "/privacy-policy"}
              className="transition-colors hover:text-brass"
            >
              {zh ? zhSite.privacy : "Privacy Policy"}
            </Link>
            <span aria-hidden="true">|</span>
            <Link
              to={zh ? "/zh/terms-of-use" : "/terms-of-use"}
              className="transition-colors hover:text-brass"
            >
              {zh ? zhSite.terms : "Terms of Use"}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
