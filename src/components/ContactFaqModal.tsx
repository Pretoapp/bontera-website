'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

type Props = {
  isRTL?: boolean;
};

const ALL_FAQ_KEYS = [
  'timeline',
  'budget',

  'warranty',
 
 
  'process'

  // add the rest of your FAQ keys here
];

export default function ContactFaqModal({ isRTL }: Props) {
  const t = useTranslations('contactPage');
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // focus close button for accessibility
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <>
      {/* Trigger (replaces the Link) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 text-bontera-navy-600 font-semibold hover:text-bontera-navy-700 transition-colors"
      >
        {t('faq.viewAll')}
        <svg
          className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center" dir={isRTL ? 'rtl' : 'ltr'}>
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-bontera-navy-900/70"
          />

          {/* Panel */}
          <div className="relative w-full sm:max-w-3xl bg-white shadow-2xl border border-bontera-grey-200 max-h-[85vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-bontera-grey-200">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-bontera-grey-500 font-semibold">
                  {t('faq.eyebrow')}
                </div>
                <h2 id={titleId} className="mt-2 text-2xl font-semibold text-bontera-grey-900">
                  {t('faq.title')}
                </h2>
              </div>

              <button
                ref={closeBtnRef}
                type="button"
                onClick={() => setOpen(false)}
                className="w-10 h-10 flex items-center justify-center bg-bontera-grey-100 text-bontera-grey-700 hover:bg-bontera-navy-600 hover:text-white transition-colors"
                aria-label="Close FAQ"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-6 overflow-y-auto max-h-[calc(85vh-84px)]">
              <div className="space-y-4">
                {ALL_FAQ_KEYS.map((faq) => (
                  <details
                    key={faq}
                    className="group bg-bontera-grey-50 border border-bontera-grey-200 hover:border-bontera-grey-300 transition-colors"
                  >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                      <h3 className="text-base sm:text-lg font-semibold text-bontera-grey-900 pr-4">
                        {t(`faq.items.${faq}.question`)}
                      </h3>
                      <span className="flex-shrink-0 w-9 h-9 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center group-open:bg-bontera-navy-600 group-open:text-white transition-colors">
                        <svg className="w-4 h-4 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="text-bontera-grey-600 leading-relaxed">
                        {t(`faq.items.${faq}.answer`)}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
