// Shared line icons for the three core services. Decorative; callers label them.

export function WebsiteIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={1.7} />
      <path strokeLinecap="round" strokeWidth={1.7} d="M3 9h18" />
      <path strokeLinecap="round" strokeWidth={1.7} d="M6.5 6.5h.01M9 6.5h.01" />
    </svg>
  );
}

export function SocialIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

export function CameraIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 9a2 2 0 012-2h1.5l1-1.5A2 2 0 019.2 4.5h5.6a2 2 0 011.7.99L17.5 7H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <circle cx="12" cy="13" r="3.2" strokeWidth={1.7} />
    </svg>
  );
}

export const SERVICE_ICON = {
  websites: WebsiteIcon,
  social: SocialIcon,
  photography: CameraIcon,
} as const;
