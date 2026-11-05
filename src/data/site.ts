// ─────────────────────────────────────────────────────────────
// SITE ORIGIN — the ONLY place the deployed domain is written.
// Currently pointing at the temporary Cloudflare Workers subdomain.
// On launch: change this one line to the client's real domain,
// then follow the LAUNCH CHECKLIST in README.md.
// ─────────────────────────────────────────────────────────────
export const SITE_URL = "https://mhgroupny.com"; // no trailing slash

export const abs = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const OG_IMAGE = abs("/images/og-image.webp");

// Flip to false on launch so the real domain gets indexed.
export const NOINDEX = true;

export const site = {
  name: "MH Group LLC",
  positioning: "One Partner. Every Step Home.",
  phone: "(516) 972-5190",
  phoneHref: "tel:+15169725190",
  email: "James.huang@mhgroupny.com",
  location: "New York, NY",
  footerTagline:
    "A one-stop solution for real estate, property management, renovation, and home furnishing. We take care of everything, so you can enjoy the results.",
  homeDescription:
    "MH Group LLC provides real estate sales and leasing, property and asset management, renovation project management, and staging services in Manhattan.",
};

export const services = [
  {
    slug: "real-estate",
    title: "Real Estate Sales & Leasing",
    blurb:
      "Expert guidance for buying, selling, and leasing residential properties across Manhattan.",
    icon: "house" as const,
    image: "/images/upper-east-side-66th-neighborhood.webp",
    imageW: 960,
    imageH: 641,
    imageAlt:
      "Central Park treetops framed by Upper East Side buildings near an MH Group project",
  },
  {
    slug: "property-management",
    title: "Property & Asset Management",
    blurb:
      "From tenant management to repairment and financial reports, we provide comprehensive property and asset management services.",
    icon: "building" as const,
    image: "/images/midtown-east-55th-10c-after-02.webp",
    imageW: 2400,
    imageH: 1600,
    imageAlt:
      "Renovated living space in the Sutton Place Residence managed by MH Group",
  },
  {
    slug: "renovation",
    title: "Renovation & Project Management",
    blurb:
      "End-to-end renovation management with trusted contractors and meticulous attention to detail.",
    icon: "drafting" as const,
    image: "/images/upper-east-side-66th-after-01.webp",
    imageW: 2400,
    imageH: 1601,
    imageAlt:
      "Completed kitchen renovation in the Upper East Side Residence by MH Group",
  },
  {
    slug: "furnishing",
    title: "Furniture, Staging & Move-in Service",
    blurb:
      "Curated furniture selection, staging for sales and rental, and seamless move-in service.",
    icon: "armchair" as const,
    image: "/images/services/furniture-staging-move-in.webp",
    imageW: 1200,
    imageH: 800,
    imageAlt:
      "Staged living room with a sofa, wooden coffee table, and open dining area",
  },
];

export const renovationDetail = [
  {
    heading: "On-Site Oversight & Quality Assurance",
    copy: "We provide dedicated on-site management, closely monitoring the renovation's progress and conducting rigorous final inspections to ensure every detail meets our exacting standards before the project is considered complete.",
  },
  {
    heading: "Curated Material Selection",
    copy: "Our team works closely with you to source and select high-quality materials, perfectly balancing your aesthetic vision with durability, functionality, and budget constraints.",
  },
  {
    heading: "Building Board & Management Approvals",
    copy: "We handle the administrative heavy lifting. Our team efficiently processes and submits all necessary Alteration Agreements and Certificates of Insurance (COIs) to your building's management, ensuring full compliance.",
  },
  {
    heading: "Contractor Compliance & Vetting",
    copy: "We proactively manage your vendors and contractors, taking on the responsibility of securing all required licenses, insurance policies, and documentation in a timely manner to prevent any project delays.",
  },
  {
    heading: "Superintendent & Logistics Coordination",
    copy: "We act as your primary liaison on the ground. We maintain clear, ongoing communication with building superintendents to coordinate construction schedules, manage deliveries, and guarantee that all building protocols are strictly followed.",
  },
];

export const processSteps = [
  {
    num: "01",
    label: "DISCOVER",
    copy: "We listen to your goals and understand your lifestyle and investment needs.",
    icon: "discover" as const,
  },
  {
    num: "02",
    label: "PLAN",
    copy: "We craft a tailored strategy with the right property, design, and service plan.",
    icon: "plan" as const,
  },
  {
    num: "03",
    label: "MANAGE",
    copy: "Our team executes every detail with precision, transparency, and constant communication.",
    icon: "manage" as const,
  },
  {
    num: "04",
    label: "ENJOY",
    copy: "Move in with confidence and enjoy a home that reflects your vision.",
    icon: "enjoy" as const,
  },
];
// ─────────────────────────────────────────────────────────────
// Real-estate sales partnership (The Maggie Huang Team @ Corcoran)
// ─────────────────────────────────────────────────────────────
export const CORCORAN_TEAM_URL =
  "https://www.corcoran.com/real-estate-agents/detail/team/the-maggie-huang-team/493";

/** hreflang set shared by an English page and its Traditional Chinese twin. */
export const altLinks = (enPath: string, zhPath: string) => [
  { rel: "alternate", hrefLang: "en", href: abs(enPath) },
  { rel: "alternate", hrefLang: "zh-Hant", href: abs(zhPath) },
  { rel: "alternate", hrefLang: "x-default", href: abs(enPath) },
];
