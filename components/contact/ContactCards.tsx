import { Stagger, StaggerItem } from '../motion-primitives';
import { CONTACT } from '../site/siteData';

const PhoneIcon = (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
);
const SmsIcon = (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M8 10h.01M12 10h.01M16 10h.01M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z" />
);
const MailIcon = (
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
);

const CARDS = [
  { label: 'Call', value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}`, icon: PhoneIcon, external: false },
  { label: 'Text', value: CONTACT.phoneDisplay, href: CONTACT.smsHref, icon: SmsIcon, external: false },
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: MailIcon, external: false, breakAll: true },
];

export default function ContactCards() {
  return (
    <Stagger className="grid gap-4" stagger={0.08}>
      {CARDS.map((c) => (
        <StaggerItem key={c.label}>
          <a
            href={c.href}
            className="card-hover flex items-center gap-4 rounded-2xl border border-[#E8DED0] bg-white p-5 shadow-soft"
          >
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#4E86BC]/10 text-[#4E86BC]">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {c.icon}
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-wide text-[#8A939B]">{c.label}</span>
              <span className={`block font-semibold text-[#1E2A38] ${c.breakAll ? 'break-all' : ''}`}>{c.value}</span>
            </span>
          </a>
        </StaggerItem>
      ))}

      {/* Instagram */}
      <StaggerItem>
        <a
          href={CONTACT.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover flex items-center gap-4 rounded-2xl border border-[#E8DED0] bg-white p-5 shadow-soft"
        >
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#C0699A]/15 to-[#6FA8DC]/15 text-[#C0699A]">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.9.07s-3.63 0-4.9-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2zm0 1.98c-3.15 0-3.52.01-4.76.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.6-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.6.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.6.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 00-.68-1.06 2.86 2.86 0 00-1.06-.68c-.32-.13-.8-.28-1.7-.32-1.24-.06-1.6-.07-4.76-.07zm0 3.37a4.45 4.45 0 110 8.9 4.45 4.45 0 010-8.9zm0 7.34a2.89 2.89 0 100-5.78 2.89 2.89 0 000 5.78zm5.66-7.56a1.04 1.04 0 11-2.08 0 1.04 1.04 0 012.08 0z" />
            </svg>
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-semibold uppercase tracking-wide text-[#8A939B]">Instagram</span>
            <span className="block font-semibold text-[#1E2A38]">{CONTACT.instagramHandle}</span>
          </span>
        </a>
      </StaggerItem>
    </Stagger>
  );
}
