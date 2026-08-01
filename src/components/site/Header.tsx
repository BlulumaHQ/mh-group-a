import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HeaderLogo } from "./Logo";

const nav = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Our Philosophy", to: "/our-philosophy" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      className={`sticky top-0 z-50 bg-ink ${
        scrolled ? "border-b border-brass/20" : "border-b border-transparent"
      }`}
    >
      <div className="container-mh flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="MH Group LLC — home">
          <HeaderLogo height={44} className="h-[36px] sm:h-[44px]" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative py-2 font-sans text-[12px] uppercase tracking-[0.12em] transition-colors ${
                isActive(item.to)
                  ? "text-brass"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.to) ? (
                <span className="absolute -bottom-[8px] left-0 h-[2px] w-full bg-brass" />
              ) : null}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
        >
          <span className="block h-px w-6 bg-brass" />
          <span className="block h-px w-6 bg-brass" />
          <span className="block h-px w-6 bg-brass" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-[76px] z-50 bg-ink lg:hidden">
          <nav className="container-mh flex flex-col gap-2 pt-10" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center py-4 font-display text-[30px] text-white"
              >
                <span
                  aria-hidden="true"
                  className={`mr-5 block h-[30px] w-[4px] ${
                    isActive(item.to) ? "bg-brass" : "bg-transparent"
                  }`}
                />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}