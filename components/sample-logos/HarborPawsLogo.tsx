interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function HarborPawsLogo({ className = '', inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Harbor Paws Pet Care">
      <svg viewBox="0 0 48 48" className="h-9 w-9 flex-shrink-0" role="img" aria-hidden="true">
        <rect x="2" y="2" width="44" height="44" rx="14" fill="#7C9A6E" />
        {/* heart-house roof line */}
        <path
          d="M24 12.5 33 20v0"
          fill="none"
          stroke="#F4EFE2"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        {/* paw pad */}
        <ellipse cx="24" cy="29" rx="6.2" ry="5.2" fill="#F4EFE2" />
        {/* toes */}
        <ellipse cx="16.5" cy="23.5" rx="2.5" ry="3.2" fill="#F4EFE2" />
        <ellipse cx="21.5" cy="20.5" rx="2.5" ry="3.3" fill="#F4EFE2" />
        <ellipse cx="26.5" cy="20.5" rx="2.5" ry="3.3" fill="#F4EFE2" />
        <ellipse cx="31.5" cy="23.5" rx="2.5" ry="3.2" fill="#F4EFE2" />
        {/* small heart in pad */}
        <path
          d="M24 31.5c-1.6-1.2-2.6-2-2.6-3 0-.8.6-1.4 1.4-1.4.5 0 .9.2 1.2.6.3-.4.7-.6 1.2-.6.8 0 1.4.6 1.4 1.4 0 1-1 1.8-2.6 3z"
          fill="#9C7B58"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-tight ${
            inverted ? 'text-white' : 'text-[#4A6240]'
          }`}
        >
          Harbor Paws
        </span>
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#9C7B58]">
          Pet Care
        </span>
      </span>
    </span>
  );
}
