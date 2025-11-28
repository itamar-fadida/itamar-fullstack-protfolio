import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from './Navigation';
import Contact from './Contact';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;

