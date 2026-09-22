import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const next = i18n.language === 'he' ? 'en' : 'he';

  return (
    <button
      type="button"
      onClick={() => i18n.changeLanguage(next)}
      className="rounded-md border border-line px-2 py-1 font-mono text-2xs uppercase tracking-wider text-muted transition-colors hover:text-ink"
      aria-label={next === 'he' ? 'Switch to Hebrew' : 'Switch to English'}
    >
      {next === 'he' ? 'עב' : 'EN'}
    </button>
  );
};

export default LanguageSwitch;
