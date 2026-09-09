/** Locale helpers shared by the English site and its /zh Traditional Chinese twin. */

export const isZh = (pathname: string) =>
  pathname === "/zh" || pathname.startsWith("/zh/");

const strip = (pathname: string) => pathname.replace(/\/+$/, "") || "/";

/** Paths that exist in both languages. */
const shared = [
  "/",
  "/projects",
  "/services",
  "/our-philosophy",
  "/contact",
  "/privacy-policy",
  "/terms-of-use",
];

const englishProjectSlugs = [
  "upper-east-side",
  "sutton-place",
  "upper-west-side",
  "midtown-east",
];

/** Given any path, return the equivalent path in the other language. */
export function counterpartPath(pathname: string): string {
  const path = strip(pathname);

  if (isZh(path)) {
    const rest = path.slice(3) || "/"; // "/zh/services" -> "/services"
    if (rest.startsWith("/projects/")) {
      const slug = rest.slice("/projects/".length);
      return englishProjectSlugs.includes(slug) ? `/projects/${slug}` : "/projects";
    }
    return shared.includes(rest) ? rest : "/";
  }

  if (path.startsWith("/projects/")) {
    const slug = path.slice("/projects/".length);
    return englishProjectSlugs.includes(slug) ? `/zh/projects/${slug}` : "/zh/projects";
  }
  if (shared.includes(path)) return path === "/" ? "/zh" : `/zh${path}`;
  return "/zh";
}
