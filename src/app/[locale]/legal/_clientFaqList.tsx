'use client';

import { useTranslations } from 'next-intl';

export default function ClientFaqList({ faqKeys }: { faqKeys: string[] }) {
  const t = useTranslations('contactPage');

  return (
    <div className="space-y-4">
      {faqKeys.map((faq) => (
        <details
          key={faq}
          className="group bg-bontera-grey-50 border border-bontera-grey-200 hover:border-bontera-grey-300 transition-colors"
        >
          <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
            <h3 className="text-lg font-semibold text-bontera-grey-900 pr-4">
              {t(`faq.items.${faq}.question`)}
            </h3>
            <span className="flex-shrink-0 w-9 h-9 bg-bontera-navy-100 text-bontera-navy-600 flex items-center justify-center group-open:bg-bontera-navy-600 group-open:text-white transition-colors">
              <svg className="w-4 h-4 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </summary>

          <div className="px-6 pb-6">
            <p className="text-bontera-grey-600 leading-relaxed">
              {t(`faq.items.${faq}.answer`)}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
