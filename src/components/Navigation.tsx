import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitch from './LanguageSwitch';
import ThemeToggle from './ThemeToggle';
import { identity } from '../data/profile';
import { useLang } from '../hooks/useLang';

const Navigation = () => {
  const { t, pick } = useLang();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const onHome = pathname === '/';

  // Section anchors only make sense on the home page; from /resume they are
  // rendered as links back into it.
  const sections = [
    { hash: 'experience', label: t('nav.experience') },
    { hash: 'work', label: t('nav.work') },
    // { hash: 'case-study', label: t('nav.caseStudy') }, // re-enable with <CaseStudy /> in Home.tsx
    { hash: 'skills', label: t('nav.skills') },
    { hash: 'contact', label: t('nav.contact') },
  ];

  const linkClass = 'text-sm text-muted transition-colors hover:text-ink';

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-page/85 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
        <Link to="/" className="text-sm font-semibold tracking-tight text-ink">
          {pick(identity.name)}
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map((item) => (
            <a key={item.hash} href={onHome ? `#${item.hash}` : `/#${item.hash}`} className={linkClass}>
              {item.label}
            </a>
          ))}

          <Link
            to="/resume"
            className={
              pathname === '/resume'
                ? 'text-sm font-medium text-accent'
                : 'text-sm font-medium text-ink hover:text-accent'
            }
          >
            {t('nav.resume')}
          </Link>

          <span aria-hidden className="h-4 w-px bg-line" />
          <LanguageSwitch />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            className="rounded-md border border-line p-1.5 text-muted hover:text-ink"
          >
            {isOpen ? <X className="h-4 w-4" aria-hidden /> : <Menu className="h-4 w-4" aria-hidden />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-line bg-page px-5 py-3 md:hidden">
          <ul className="space-y-1">
            {sections.map((item) => (
              <li key={item.hash}>
                <a
                  href={onHome ? `#${item.hash}` : `/#${item.hash}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-1.5 text-sm text-muted hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-sm font-medium text-ink"
              >
                {t('nav.resume')}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
