interface LogoProps {
  className?: string;
  /** On light backgrounds, set to false to darken the wordmark. Defaults to light (for dark UI). */
  inverted?: boolean;
}

export default function NovaStackLogo({ className = '', inverted = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="NovaStack Labs">
      <svg viewBox="0 0 48 48" className="h-9 w-9 flex-shrink-0" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="nova-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* stacked isometric panels */}
        <path d="M24 6 41 15 24 24 7 15z" fill="url(#nova-grad)" />
        <path d="M24 24 41 15v6L24 30z" fill="#3B82F6" opacity="0.75" />
        <path d="M24 24 7 15v6l17 9z" fill="#8B5CF6" opacity="0.6" />
        <path d="M24 30 41 21v6L24 36z" fill="#3B82F6" opacity="0.5" />
        <path d="M24 30 7 21v6l17 9z" fill="#8B5CF6" opacity="0.38" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.1rem] font-extrabold tracking-tight ${
            inverted ? 'text-white' : 'text-[#0B1020]'
          }`}
        >
          Nova<span className="text-[#38BDF8]">Stack</span>
        </span>
        <span className="text-[0.66rem] font-semibold uppercase tracking-[0.4em] text-[#8B5CF6]">
          Labs
        </span>
      </span>
    </span>
  );
}
