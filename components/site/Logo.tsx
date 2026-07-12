import Link from 'next/link';

interface LogoProps {
  /** "ink" for light backgrounds, "light" (inverted to white) for dark backgrounds. */
  tone?: 'ink' | 'light';
  className?: string;
}

/**
 * Brand lockup: the hand-drawn "BWD" mark paired with a readable wordmark.
 * The mark image also contains a small tagline baked in; the fixed-height,
 * overflow-hidden wrapper crops it so only the clean "BWD" monogram shows.
 */
export default function Logo({ tone = 'ink', className = '' }: LogoProps) {
  const wordColor = tone === 'light' ? 'text-white' : 'text-[#1E2A38]';
  const subColor = tone === 'light' ? 'text-white/55' : 'text-[#6FA8DC]';

  return (
    <Link
      href="/"
      aria-label="Bellmore Web Design home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="block h-[32px] w-[110px] overflow-hidden shrink-0" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/straight_logo_transparent.png"
          alt=""
          width={110}
          height={45}
          className={`w-[110px] max-w-none select-none transition-transform duration-300 group-hover:scale-[1.03] ${
            tone === 'light' ? '[filter:invert(1)]' : ''
          }`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[15px] sm:text-base font-extrabold tracking-tight ${wordColor}`}>
          Bellmore Web Design
        </span>
        <span className={`mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] ${subColor}`}>
          Sites · Social · Photo
        </span>
      </span>
    </Link>
  );
}
