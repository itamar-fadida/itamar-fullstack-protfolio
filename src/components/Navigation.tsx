import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isRTL = i18n.language === 'he';

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/resume', label: t('nav.resume') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-dark-900/80 backdrop-blur-md z-50 border-b border-dark-200 dark:border-dark-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Icon - Always on start side */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-brand p-0.5 shadow-lg">
              <div className="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="/favicon.png" 
                  alt="Itamar Fadida" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Always on end side */}
          <div className={`hidden md:flex items-center space-x-8 ${isRTL ? 'space-x-reverse' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-brand-500 dark:text-brand-400'
                    : 'text-dark-600 dark:text-dark-300 hover:text-brand-500 dark:hover:text-brand-400'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-400 to-brand-500"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="#contact"
              className="text-dark-600 dark:text-dark-300 hover:text-brand-500 dark:hover:text-brand-400 text-sm font-medium"
            >
              {t('nav.contact')}
            </a>
            <LanguageSwitch />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className={`md:hidden flex items-center space-x-4 ${isRTL ? 'space-x-reverse' : ''}`}>
            <LanguageSwitch />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-600 dark:text-dark-300 hover:text-brand-500 dark:hover:text-brand-400"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 space-y-2"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.path)
                    ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-500 dark:text-brand-400'
                    : 'text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800"
            >
              {t('nav.contact')}
            </a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
