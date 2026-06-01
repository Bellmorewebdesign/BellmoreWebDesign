interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function MainStreetChickenLogo({ className = '', inverted = false }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Main Street Chicken Co.">
      <svg viewBox="0 0 48 48" className="h-9 w-9 flex-shrink-0" role="img" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="#7A2E12" />
        <circle cx="24" cy="24" r="22" fill="none" stroke="#E8B23A" strokeWidth="2" />
        {/* rooster head + comb */}
        <path
          d="M18 31c-2.2-1.6-3.4-4-3.4-6.7C14.6 19 18 15.4 23 15.4c1.2 0 2.3.2 3.3.6.7-1.3 1.9-2.4 3.2-2.7-.2 1.3-.1 2.4.3 3.3 1.9 1.5 3.1 3.8 3.1 6.4 0 1.1-.2 2-.6 2.9l1.9 1.1-2.4.8c-.6.7-1.3 1.3-2.1 1.7l.6 2.4-2.3-1.1c-.7.2-1.5.3-2.3.3z"
          fill="#E8B23A"
        />
        {/* beak */}
        <path d="M14.4 23.4 10.6 22l3.6-1.8z" fill="#D85B2B" />
        {/* eye */}
        <circle cx="21" cy="21.2" r="1.5" fill="#7A2E12" />
        {/* wattle */}
        <path d="M16.2 25.6c-.2 1.4-.1 2.6.6 3.4-1.3-.2-2.2-1-2.4-2.3z" fill="#D85B2B" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] font-extrabold tracking-tight ${
            inverted ? 'text-[#FBE9C8]' : 'text-[#7A2E12]'
          }`}
        >
          Main Street
        </span>
        <span className="text-[0.7rem] font-bold uppercase tracking-[0.28em] text-[#D85B2B]">
          Chicken Co.
        </span>
      </span>
    </span>
  );
}
