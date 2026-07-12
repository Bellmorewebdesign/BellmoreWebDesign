'use client';

import Link from 'next/link';
import { CONTACT } from './site/siteData';

/**
 * Sticky bottom action bar shown only on small screens: Call, Text, Free Mockup.
 * Hidden on md+ where the header already exposes these actions.
 */
export default function MobileActionBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 glass-header border-t border-[#E8DED0] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-3 gap-1 px-2 py-2">
        <a
          href={`tel:${CONTACT.phoneTel}`}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[#1E2A38] active:bg-[#1E2A38]/5"
        >
          <svg className="h-5 w-5 text-[#4E86BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href={CONTACT.smsHref}
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl py-2 text-[#1E2A38] active:bg-[#1E2A38]/5"
        >
          <svg className="h-5 w-5 text-[#4E86BC]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z" />
          </svg>
          <span className="text-xs font-semibold">Text</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-[#1E2A38] py-2 text-white active:bg-[#16212C]"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-semibold">Free Mockup</span>
        </Link>
      </div>
    </div>
  );
}
