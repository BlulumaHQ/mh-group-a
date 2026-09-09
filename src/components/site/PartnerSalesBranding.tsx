import { CORCORAN_TEAM_URL } from "@/data/site";

/**
 * Real-estate SALES partner lockup — The Maggie Huang Team at Corcoran.
 * Used only where sales / purchase services are discussed. MH Group LLC
 * remains the primary brand everywhere else.
 */
export function PartnerSalesBranding({
  align = "center",
  size = "md",
  className = "",
}: {
  align?: "center" | "left";
  size?: "sm" | "md";
  className?: string;
}) {
  const centered = align === "center";
  const mhW = size === "md" ? "w-[104px] sm:w-[124px]" : "w-[84px] sm:w-[96px]";
  const corcoranW = size === "md" ? "w-[168px] sm:w-[196px]" : "w-[136px] sm:w-[156px]";
  const barW = size === "md" ? "w-[168px] sm:w-[196px]" : "w-[136px] sm:w-[156px]";

  return (
    <a
      href={CORCORAN_TEAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit The Maggie Huang Team at Corcoran"
      className={`group inline-flex flex-col ${
        centered ? "items-center" : "items-start"
      } gap-5 transition-opacity duration-300 hover:opacity-80 ${className}`}
    >
      <img
        src="/images/partners/maggie-huang-logo.svg"
        alt="Maggie Huang"
        width={350}
        height={340}
        loading="lazy"
        decoding="async"
        className={`${mhW} h-auto`}
      />
      <img
        src="/images/partners/corcoran-logo.png"
        alt="Corcoran"
        width={1520}
        height={240}
        loading="lazy"
        decoding="async"
        className={`${corcoranW} h-auto`}
      />
      <img
        src="/images/partners/corcoran-colorbar.png"
        alt=""
        aria-hidden="true"
        width={1926}
        height={42}
        loading="lazy"
        decoding="async"
        className={`${barW} h-auto`}
      />
    </a>
  );
}
