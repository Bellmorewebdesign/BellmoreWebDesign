interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function SouthShoreShineLogo({ className = '', inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="South Shore Shine">
      <svg viewBox="0 0 48 48" className="h-9 w-9 flex-shrink-0" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="sss-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#sss-grad)" />
        {/* house outline */}
        <path
          d="M14 25.5 24 17l10 8.5V35a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 14 35z"
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        {/* water droplet */}
        <path
          d="M24 21.5c2.4 2.6 3.8 4.6 3.8 6.6a3.8 3.8 0 1 1-7.6 0c0-2 1.4-4 3.8-6.6z"
          fill="white"
        />
        <circle cx="22.4" cy="28.4" r="1.1" fill="#22D3EE" opacity="0.9" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-tight ${
            inverted ? 'text-white' : 'text-[#0E4C66]'
          }`}
        >
          South Shore
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#22B8D6]">
          Shine
        </span>
      </span>
    </span>
  );
}
