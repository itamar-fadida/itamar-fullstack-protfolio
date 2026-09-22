import { ReactNode } from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-page">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-page"
    >
      Skip to content
    </a>
    

    <Navigation />

    <main id="main" className="pt-14">
      {children}
    </main>

    <Contact />
    <Footer />
  </div>
);

export default Layout;
