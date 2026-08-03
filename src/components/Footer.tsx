import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white py-12 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute top-10 left-10 w-20 h-20 bg-brand-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-brand-400/10 rounded-full blur-xl"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold font-display mb-4 bg-gradient-to-r from-brand-400 to-brand-500 bg-clip-text text-transparent">
            Itamar Fadida
          </h3>
          <p className="text-dark-400 text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            {isHebrew 
              ? 'בוגר יחידות 81 ו-8200. מהנדס Full-Stack ומפתח מערכות AI — מוצרים ב-production מקצה לקצה, כולל תשתיות DevOps.'
              : 'Alumni of IDF Units 81 & 8200. Full-Stack Engineer & AI Systems Developer — production products end-to-end, including DevOps.'}
          </p>
          <p className="text-dark-500 text-sm">
            {isHebrew 
              ? `© ${currentYear} איתמר פדידה. כל הזכויות שמורות.`
              : `© ${currentYear} Itamar Fadida. All rights reserved.`}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
