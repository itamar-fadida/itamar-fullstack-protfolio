import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Resume from './pages/Resume';
import './i18n/config';

const TITLES: Record<string, string> = {
  '/': 'Itamar Fadida — Software Engineer, Backend & Infrastructure',
  '/resume': 'Resume — Itamar Fadida, Software Engineer',
};

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = TITLES[pathname] ?? TITLES['/'];
    // Do not fight an in-page anchor when one was requested.
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <RouteEffects />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
