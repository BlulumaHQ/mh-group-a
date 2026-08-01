export type ProjectPhoto = { src: string; w: number; h: number; alt: string };

export type Project = {
  slug: string;
  name: string;
  location: string;
  scope: string;
  intro: string;
  hero: ProjectPhoto;
  gallery: ProjectPhoto[];
  before: ProjectPhoto[];
  ctaImage: string;
  cardImage: ProjectPhoto;
  /** ⚠ unverified fields — omitted from the render while empty */
  sizeSqft?: string;
  completed?: string;
  durationWeeks?: string;
};

const p = (src: string, w: number, h: number, alt: string): ProjectPhoto => ({
  src,
  w,
  h,
  alt,
});

export const projects: Project[] = [
  {
    slug: "upper-east-side",
    name: "Upper East Side Residence",
    location: "Upper East Side, Manhattan",
    scope: "Full Renovation & Project Management",
    intro:
      "A full renovation on the Upper East Side, managed end to end by MH Group. We coordinated the building approvals, vetted every contractor, selected the materials alongside the owner and oversaw the work on site through final inspection. The apartment was handed back complete, clean and ready to live in.",
    hero: p(
      "/images/upper-east-side-66th-after-01.webp",
      2400,
      1601,
      "Completed kitchen and living area of the Upper East Side Residence after full renovation",
    ),
    gallery: [
      p(
        "/images/upper-east-side-66th-after-02.webp",
        2400,
        1600,
        "Renovated interior of the Upper East Side Residence",
      ),
      p(
        "/images/upper-west-side-86th-after-02.webp",
        2400,
        1602,
        "Completed living room finished by the MH Group renovation team",
      ),
      p(
        "/images/midtown-east-55th-3d-after-02.webp",
        2400,
        1602,
        "Completed interior detail from an MH Group Manhattan renovation",
      ),
      p(
        "/images/upper-west-side-86th-after-03.webp",
        2400,
        1602,
        "Finished Manhattan apartment interior managed by MH Group",
      ),
    ],
    before: [
      p(
        "/images/upper-east-side-66th-before-01.webp",
        300,
        400,
        "Upper East Side Residence before renovation",
      ),
      p(
        "/images/upper-east-side-66th-before-02.webp",
        300,
        400,
        "Original kitchen of the Upper East Side Residence before renovation",
      ),
      p(
        "/images/upper-east-side-66th-before-03.webp",
        300,
        400,
        "Original interior of the Upper East Side Residence before renovation",
      ),
      p(
        "/images/upper-east-side-66th-neighborhood.webp",
        960,
        641,
        "Central Park and the Upper East Side neighborhood surrounding the residence",
      ),
    ],
    ctaImage: "/images/upper-east-side-66th-after-02.webp",
    cardImage: p(
      "/images/upper-east-side-66th-after-01.webp",
      2400,
      1601,
      "Renovated kitchen of the Upper East Side Residence",
    ),
  },
  {
    slug: "sutton-place",
    name: "Sutton Place Residence",
    location: "Sutton Place, Manhattan",
    scope: "Full Renovation & Project Management",
    intro:
      "A Sutton Place apartment taken through a complete renovation under MH Group's management. Alteration agreements and insurance certificates were filed with building management, deliveries and construction hours were coordinated with the superintendent, and the finishes were selected and inspected with the owner.",
    hero: p(
      "/images/midtown-east-55th-10c-after-01.webp",
      2400,
      1600,
      "Completed living space of the Sutton Place Residence after full renovation",
    ),
    gallery: [
      p(
        "/images/midtown-east-55th-10c-after-02.webp",
        2400,
        1600,
        "Renovated interior of the Sutton Place Residence",
      ),
      p(
        "/images/upper-east-side-66th-after-02.webp",
        2400,
        1600,
        "Completed interior from an MH Group Manhattan renovation",
      ),
      p(
        "/images/upper-west-side-86th-after-01.webp",
        2400,
        1602,
        "Finished open living and kitchen area completed by MH Group",
      ),
      p(
        "/images/midtown-east-55th-3d-after-02.webp",
        2400,
        1602,
        "Completed interior detail from an MH Group Manhattan renovation",
      ),
    ],
    before: [
      p(
        "/images/midtown-east-55th-10c-before-01.webp",
        1024,
        768,
        "Sutton Place Residence interior before renovation",
      ),
    ],
    ctaImage: "/images/midtown-east-55th-10c-after-02.webp",
    cardImage: p(
      "/images/midtown-east-55th-10c-after-01.webp",
      2400,
      1600,
      "Renovated living space of the Sutton Place Residence",
    ),
  },
  {
    slug: "upper-west-side",
    name: "Upper West Side Residence",
    location: "Upper West Side, Manhattan",
    scope: "Full Renovation & Project Management",
    intro:
      "A full gut renovation on the Upper West Side delivered under a single point of responsibility. MH Group managed the contractors, the building's requirements and the material selections, then styled and prepared the apartment so the owners could move straight in.",
    hero: p(
      "/images/upper-west-side-86th-after-01.webp",
      2400,
      1602,
      "Completed open living and kitchen area of the Upper West Side Residence",
    ),
    gallery: [
      p(
        "/images/upper-west-side-86th-after-02.webp",
        2400,
        1602,
        "Renovated living room of the Upper West Side Residence",
      ),
      p(
        "/images/upper-west-side-86th-after-03.webp",
        2400,
        1602,
        "Renovated interior detail of the Upper West Side Residence",
      ),
      p(
        "/images/upper-east-side-66th-after-01.webp",
        2400,
        1601,
        "Completed kitchen from an MH Group Manhattan renovation",
      ),
      p(
        "/images/midtown-east-55th-10c-after-02.webp",
        2400,
        1600,
        "Completed interior from an MH Group Manhattan renovation",
      ),
    ],
    before: [
      p(
        "/images/upper-west-side-86th-before-01.webp",
        600,
        400,
        "Upper West Side Residence before renovation",
      ),
      p(
        "/images/upper-west-side-86th-before-02.webp",
        600,
        400,
        "Original kitchen of the Upper West Side Residence before renovation",
      ),
      p(
        "/images/upper-west-side-86th-before-03.webp",
        601,
        400,
        "Original interior of the Upper West Side Residence before renovation",
      ),
    ],
    ctaImage: "/images/upper-west-side-86th-after-02.webp",
    cardImage: p(
      "/images/upper-west-side-86th-after-02.webp",
      2400,
      1602,
      "Renovated living room of the Upper West Side Residence",
    ),
  },
  {
    slug: "midtown-east",
    name: "Midtown East Residence",
    location: "Midtown East, Manhattan",
    scope: "Full Renovation & Project Management",
    intro:
      "A Midtown East apartment rebuilt room by room with MH Group managing every trade on site. Schedules, compliance documents and quality inspections were handled by our team, keeping the project on programme and the building's protocols fully respected.",
    hero: p(
      "/images/midtown-east-55th-3d-after-01.webp",
      1600,
      1068,
      "Completed interior of the Midtown East Residence after full renovation",
    ),
    gallery: [
      p(
        "/images/midtown-east-55th-3d-after-02.webp",
        2400,
        1602,
        "Renovated interior of the Midtown East Residence",
      ),
      p(
        "/images/upper-west-side-86th-after-03.webp",
        2400,
        1602,
        "Completed interior from an MH Group Manhattan renovation",
      ),
      p(
        "/images/midtown-east-55th-10c-after-01.webp",
        2400,
        1600,
        "Completed living space from an MH Group Manhattan renovation",
      ),
      p(
        "/images/upper-east-side-66th-after-02.webp",
        2400,
        1600,
        "Completed interior from an MH Group Manhattan renovation",
      ),
    ],
    before: [
      p(
        "/images/midtown-east-55th-3d-before-01.webp",
        1024,
        768,
        "Midtown East Residence interior before renovation",
      ),
      p(
        "/images/midtown-east-55th-3d-before-02.webp",
        1024,
        768,
        "Original kitchen of the Midtown East Residence before renovation",
      ),
    ],
    ctaImage: "/images/midtown-east-55th-3d-after-02.webp",
    cardImage: p(
      "/images/midtown-east-55th-3d-after-02.webp",
      2400,
      1602,
      "Renovated interior of the Midtown East Residence",
    ),
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const projectHighlights = [
  {
    title: "ON-SITE OVERSIGHT",
    copy: "Dedicated on-site management through every phase, with rigorous final inspections before handover.",
    icon: "oversight" as const,
  },
  {
    title: "MATERIAL SELECTION",
    copy: "Materials sourced and selected with the owner, balancing aesthetics, durability and budget.",
    icon: "material" as const,
  },
  {
    title: "BOARD APPROVALS",
    copy: "Alteration agreements and certificates of insurance prepared and filed with building management.",
    icon: "approvals" as const,
  },
  {
    title: "SITE LOGISTICS",
    copy: "Superintendent liaison, construction schedules and deliveries coordinated to building protocol.",
    icon: "logistics" as const,
  },
];