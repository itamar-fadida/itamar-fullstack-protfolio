import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'he' ? 'en' : 'he';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Switch language"
    >
      <span className="text-lg">{i18n.language === 'he' ? '🇺🇸' : '🇮🇱'}</span>
      <span className="text-sm font-medium">{i18n.language === 'he' ? 'EN' : 'עב'}</span>
    </motion.button>
  );
};

export default LanguageSwitch;

