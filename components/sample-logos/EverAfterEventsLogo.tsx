interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function EverAfterEventsLogo({ className = '', inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Ever After Events">
      <svg viewBox="0 0 48 48" className="h-9 w-9 flex-shrink-0" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="eae-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F4C0D2" />
            <stop offset="100%" stopColor="#C9A86A" />
          </linearGradient>
        </defs>
        {/* balloon */}
        <ellipse cx="20" cy="20" rx="9" ry="10.5" fill="url(#eae-grad)" />
        <path d="M20 30.5 18.6 33h2.8z" fill="#C9A86A" />
        <path d="M20 33c0 3 2.4 3.5 2.4 6" fill="none" stroke="#C9A86A" strokeWidth="1.4" strokeLinecap="round" />
        <ellipse cx="17" cy="16.5" rx="2.4" ry="3" fill="white" opacity="0.55" />
        {/* sparkle */}
        <path
          d="M33 13c.4 2.5 1.2 3.3 3.7 3.7-2.5.4-3.3 1.2-3.7 3.7-.4-2.5-1.2-3.3-3.7-3.7 2.5-.4 3.3-1.2 3.7-3.7z"
          fill="#E8C56B"
        />
        <path
          d="M34 26c.25 1.5.75 2 2.25 2.25-1.5.25-2 .75-2.25 2.25-.25-1.5-.75-2-2.25-2.25 1.5-.25 2-.75 2.25-2.25z"
          fill="#F4C0D2"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.1rem] font-bold italic tracking-tight ${
            inverted ? 'text-white' : 'text-[#A05680]'
          }`}
          style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Ever After
        </span>
        <span className="text-[0.68rem] font-semibold uppercase tracking-[0.36em] text-[#C9A86A]">
          Events
        </span>
      </span>
    </span>
  );
}
