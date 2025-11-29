import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FolderKanban, Mail, FileText, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background with brand gradient */}
      <motion.div 
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute inset-0 bg-gradient-to-br from-white via-brand-50 to-brand-100 dark:from-dark-900 dark:via-dark-800 dark:to-brand-900/20"
        style={{ backgroundSize: '200% 200%' }}
      >
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </motion.div>

      {/* Floating Elements with brand colors */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-brand-400/20 dark:bg-brand-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-brand-500/20 dark:bg-brand-400/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
          rotate: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/4 w-24 h-24 bg-brand-300/15 dark:bg-brand-600/25 rounded-full blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-brand-200/20 dark:bg-brand-700/30 rounded-full blur-2xl"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Profile Image with enhanced animations */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-36 h-36 cursor-pointer"
          >
            <motion.div 
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 opacity-75 blur-md"
            />
            <div className="relative w-full h-full rounded-full gradient-brand p-1 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/favicon.png" 
                  alt="Itamar Fadida" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Title with animated gradient */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-4"
        >
          <motion.span 
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ backgroundSize: '200% auto' }}
            className="bg-gradient-to-r from-brand-400 via-brand-500 to-brand-400 bg-clip-text text-transparent"
          >
            {t('hero.title')}
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-display text-dark-700 dark:text-dark-200 mb-6"
        >
          {t('hero.subtitle')}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-dark-600 dark:text-dark-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        {/* CTA Buttons - All with gradient background */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center justify-center hover:-translate-y-1"
          >
            <FolderKanban className="w-5 h-5" />
            {t('hero.cta.projects')}
          </a>

          <Link to="/resume" className="w-full sm:w-auto">
            <button
              className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full hover:-translate-y-1"
            >
              <FileText className="w-5 h-5" />
              {t('hero.cta.resume')}
            </button>
          </Link>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 gradient-brand text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto text-center justify-center hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            {t('hero.cta.contact')}
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block cursor-pointer"
          >
            <div className="p-2 rounded-full bg-brand-100 dark:bg-brand-900/30 hover:scale-110 transition-transform">
              <ChevronDown className="w-6 h-6 text-brand-500 dark:text-brand-400" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
