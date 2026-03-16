import { getRequestConfig } from "next-intl/server";
import { legalOverrides } from "@/i18n/legalOverrides";
import { locales, type Locale } from "@/lib/i18n/config";

type MessageTree = Record<string, unknown>;

const defaultFallbackLocale: Locale = "de";
const preferredFallbackLocale: Locale = "en";

function isRecord(value: unknown): value is MessageTree {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeMessages(base: MessageTree, overrides: MessageTree): MessageTree {
  const merged: MessageTree = { ...base };

  for (const [key, value] of Object.entries(overrides)) {
    const existing = merged[key];

    if (isRecord(existing) && isRecord(value)) {
      merged[key] = mergeMessages(existing, value);
      continue;
    }

    merged[key] = value;
  }

  return merged;
}

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  // Validate that the incoming locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    locale = "de";
  }

  const activeLocale = locale as Locale;
  const localeOverride = legalOverrides[activeLocale];
  const defaultMessages = (await import(`@/messages/${defaultFallbackLocale}.json`))
    .default as MessageTree;

  if (activeLocale === defaultFallbackLocale) {
    return {
      locale: activeLocale,
      messages: localeOverride
        ? mergeMessages(defaultMessages, localeOverride)
        : defaultMessages,
    };
  }

  const preferredMessages = (await import(`@/messages/${preferredFallbackLocale}.json`))
    .default as MessageTree;

  if (activeLocale === preferredFallbackLocale) {
    const preferredMerged = mergeMessages(defaultMessages, preferredMessages);

    return {
      locale: activeLocale,
      messages: localeOverride
        ? mergeMessages(preferredMerged, localeOverride)
        : preferredMerged,
    };
  }

  const localeMessages = (await import(`@/messages/${activeLocale}.json`)).default as MessageTree;

  return {
    locale: activeLocale,
    messages: localeOverride
      ? mergeMessages(
          mergeMessages(
            mergeMessages(defaultMessages, preferredMessages),
            localeMessages
          ),
          localeOverride
        )
      : mergeMessages(
          mergeMessages(defaultMessages, preferredMessages),
          localeMessages
        ),
  };
});
