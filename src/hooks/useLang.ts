import { useTranslation } from 'react-i18next';
import type { Bilingual } from '../data/profile';

/**
 * Resolves a {@link Bilingual} value against the active language, and exposes
 * the two flags every component ends up needing.
 */
export function useLang() {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';
  const pick = (value: Bilingual) => (isHebrew ? value.he : value.en);
  return { t, isHebrew, pick, lang: isHebrew ? ('he' as const) : ('en' as const) };
}
