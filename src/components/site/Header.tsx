import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HeaderLogo } from "./Logo";
import { zhSite } from "@/data/zh";
import { counterpartPath, isZh } from "@/lib/locale";

const navEn = [
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
  const zh = isZh(pathname);
  const nav = zh ? zhSite.nav : navEn;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const home = zh ? "/zh" : "/";
  const normalized = pathname.replace(/\/+$/, "") || "/";

  const isActive = (to: string) => {
    if (to === "/" || to === "/zh") return normalized === to;
    return normalized === to || normalized.startsWith(`${to}/`);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-ink ${
        scrolled ? "border-b border-brass/20" : "border-b border-transparent"
      }`}
    >
      <div className="container-mh flex h-[76px] items-center justify-between gap-4">
        <Link to={home} className="flex items-center" aria-label="MH Group LLC — home">
          <HeaderLogo height={44} className="h-[36px] sm:h-[44px]" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative py-2 font-sans text-[12px] uppercase tracking-[0.12em] transition-colors ${
                zh ? "tracking-[0.06em] text-[13px]" : ""
              } ${
                isActive(item.to) ? "text-brass" : "text-white/80 hover:text-white"
              }`}
            >
              {item.label}
              {isActive(item.to) ? (
                <span className="absolute -bottom-[8px] left-0 h-[2px] w-full bg-brass" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch pathname={pathname} />
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
      </div>

      {open ? (
        <div className="fixed inset-0 top-[76px] z-50 overflow-y-auto bg-ink lg:hidden">
          <nav className="container-mh flex flex-col gap-2 pt-10 pb-16" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center py-4 font-display text-white ${
                  zh ? "text-[26px]" : "text-[30px]"
                }`}
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

function LanguageSwitch({ pathname }: { pathname: string }) {
  const zh = isZh(pathname);
  const enHref = zh ? counterpartPath(pathname) : pathname;
  const zhHref = zh ? pathname : counterpartPath(pathname);

  const cls = (active: boolean) =>
    `font-sans text-[12px] tracking-[0.1em] transition-colors ${
      active ? "text-brass" : "text-white/65 hover:text-white"
    }`;

  return (
    <div className="flex items-center gap-2" aria-label="Language">
      <Link to={enHref} className={cls(!zh)} hrefLang="en">
        EN
      </Link>
      <span aria-hidden="true" className="text-white/30">
        |
      </span>
      <Link to={zhHref} className={cls(zh)} hrefLang="zh-Hant">
        中文
      </Link>
    </div>
  );
}
