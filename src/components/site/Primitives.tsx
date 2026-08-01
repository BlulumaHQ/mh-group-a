import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- The Gold Column Rule ---------- */
export function GoldColumn({ onPaper = false }: { onPaper?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="mr-6 block w-[4px] shrink-0 self-stretch bg-brass"
      style={
        onPaper ? { boxShadow: "inset 1px 0 0 var(--color-brass-light)" } : undefined
      }
    />
  );
}

export function SectionHeading({
  eyebrow,
  title,
  onPaper = false,
  align = "left",
  className = "",
  as = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  onPaper?: boolean;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div
      className={`flex ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <div className="flex">
        <GoldColumn onPaper={onPaper} />
        <div>
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <Tag
            className={`text-[28px] lg:text-[44px] ${
              onPaper ? "text-inktext" : "text-white"
            }`}
          >
            {title}
          </Tag>
        </div>
      </div>
    </div>
  );
}

/* ---------- Buttons ---------- */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: "brass" | "ghost-white" | "ghost-brass";
  arrow?: boolean;
  type?: "submit" | "button";
  className?: string;
};

const variantClass = {
  brass: "btn-base bg-brass text-white hover:bg-brass-deep",
  "ghost-white": "btn-base border border-white/40 text-white hover:border-white",
  "ghost-brass": "btn-base border border-brass text-brass hover:bg-brass hover:text-white",
};

export function Btn({
  children,
  to,
  href,
  variant = "brass",
  arrow = false,
  type,
  className = "",
}: BtnProps) {
  const cls = `${variantClass[variant]} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow ? <span className="arrow">&rarr;</span> : null}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {inner}
    </button>
  );
}

/* ---------- Scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Brass line icons (1.5px stroke, outline only) ---------- */
const paths: Record<string, ReactNode> = {
  house: (
    <>
      <path d="M4 11 16 3l12 8" />
      <path d="M7 13v15h18V13" />
      <path d="M13 28v-8h6v8" />
    </>
  ),
  building: (
    <>
      <path d="M6 29V6h13v23" />
      <path d="M19 13h7v16" />
      <path d="M10 11h5M10 16h5M10 21h5M22 18h1M22 23h1" />
      <path d="M3 29h26" />
    </>
  ),
  drafting: (
    <>
      <path d="M4 26 20 10l2 2L6 28l-3 1z" />
      <path d="M17 13l2-2 2 2" />
      <path d="M22 4h6v6" />
      <path d="M28 4 20 12" />
    </>
  ),
  armchair: (
    <>
      <path d="M7 14v-4a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v4" />
      <path d="M4 16a3 3 0 0 1 3 3v4h15v-4a3 3 0 0 1 3-3" />
      <path d="M7 23v3M22 23v3" />
      <path d="M26 8h4v6h-4z" />
    </>
  ),
  discover: (
    <>
      <circle cx="14" cy="14" r="9" />
      <path d="M21 21l7 7" />
    </>
  ),
  plan: (
    <>
      <path d="M5 5h22v22H5z" />
      <path d="M5 12h22M12 12v15" />
    </>
  ),
  manage: (
    <>
      <path d="M8 4h16v24H8z" />
      <path d="M12 11h8M12 16h8M12 21h5" />
    </>
  ),
  enjoy: (
    <>
      <circle cx="11" cy="17" r="5" />
      <path d="M15 14l11-11 3 3-2 2 2 2-3 3-2-2-3 3-2-2z" />
    </>
  ),
  integrity: (
    <>
      <path d="M16 3l11 5v8c0 7-5 11-11 13C11 27 5 23 5 16V8z" />
      <path d="M11 16l4 4 7-8" />
    </>
  ),
  expertise: (
    <>
      <path d="M4 10 16 4l12 6-12 6z" />
      <path d="M9 13v7c0 2 3 4 7 4s7-2 7-4v-7" />
      <path d="M28 10v9" />
    </>
  ),
  excellence: (
    <>
      <path d="M16 3l3.6 8.2 8.4.9-6.3 5.7 1.8 8.5L16 22l-7.5 4.3 1.8-8.5L4 12.1l8.4-.9z" />
    </>
  ),
  pin: (
    <>
      <path d="M16 29s10-9 10-16A10 10 0 0 0 6 13c0 7 10 16 10 16z" />
      <circle cx="16" cy="13" r="4" />
    </>
  ),
  calendar: (
    <>
      <path d="M5 8h22v20H5z" />
      <path d="M5 14h22M11 4v6M21 4v6" />
    </>
  ),
  scissors: (
    <>
      <circle cx="8" cy="24" r="4" />
      <circle cx="24" cy="24" r="4" />
      <path d="M11 21 24 5M21 21 8 5" />
    </>
  ),
  phone: (
    <>
      <path d="M11 4l4 7-3 3a17 17 0 0 0 6 6l3-3 7 4-3 6c-9 0-18-9-18-18z" />
    </>
  ),
  mail: (
    <>
      <path d="M3 7h26v18H3z" />
      <path d="m3 8 13 10L29 8" />
    </>
  ),
  oversight: (
    <>
      <path d="M2 16s6-9 14-9 14 9 14 9-6 9-14 9S2 16 2 16z" />
      <circle cx="16" cy="16" r="4" />
    </>
  ),
  material: (
    <>
      <path d="M16 3 29 10l-13 7L3 10z" />
      <path d="m3 16 13 7 13-7M3 22l13 7 13-7" />
    </>
  ),
  approvals: (
    <>
      <path d="M7 3h13l6 6v20H7z" />
      <path d="M19 3v7h7" />
      <path d="m12 19 3 3 6-7" />
    </>
  ),
  logistics: (
    <>
      <path d="M2 9h16v12H2z" />
      <path d="M18 13h6l5 5v3h-11z" />
      <circle cx="9" cy="24" r="3" />
      <circle cx="23" cy="24" r="3" />
    </>
  ),
};

export function LineIcon({
  name,
  size = 44,
  className = "",
}: {
  name: keyof typeof paths | string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="#BF935B"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}