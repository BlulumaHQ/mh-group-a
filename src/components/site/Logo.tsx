export function MHMark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M14 20.5 26 14v36H14z" fill="#BF935B" />
      <path d="M30 22.5 48 14v36H30z" fill="#BF935B" />
    </svg>
  );
}

export function Wordmark({
  size = 28,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <MHMark size={size} />
      <span className="font-sans text-[15px] font-medium tracking-[0.04em] text-white">
        MH Group LLC
      </span>
    </span>
  );
}