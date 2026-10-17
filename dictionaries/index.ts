import type { Locale } from "@/lib/i18n";
import en, { type Dictionary } from "./en";
import fa from "./fa";

const dictionaries: Record<Locale, Dictionary> = { fa, en };

export type { Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
