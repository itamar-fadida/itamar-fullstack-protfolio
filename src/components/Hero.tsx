import { Link } from 'react-router-dom';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { identity, links } from '../data/profile';
import { useLang } from '../hooks/useLang';

const Hero = () => {
  const { t, pick } = useLang();

  const ctas = [
    { key: 'resume', to: '/resume', icon: FileText, primary: true },
    { key: 'email', href: `mailto:${links.email}`, icon: Mail },
    links.github ? { key: 'github', href: links.github, icon: Github, external: true } : null,
    links.linkedin ? { key: 'linkedin', href: links.linkedin, icon: Linkedin, external: true } : null,
  ].filter(Boolean) as Array<{
    key: string;
    to?: string;
    href?: string;
    icon: typeof Mail;
    primary?: boolean;
    external?: boolean;
  }>;

  const primary = 'btn-primary';
  const secondary = 'btn-secondary';

  return (
    <header className="mx-auto w-full max-w-page px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
      {/* Location is metadata, not a section label — kept neutral so the blue
          stays reserved for section headings and the primary action. */}
      <p className="mb-5 font-mono text-2xs uppercase tracking-[0.18em] text-faint">
        {pick(identity.location)}
      </p>

      <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
        {pick(identity.name)}
      </h1>

      <p className="mt-3 text-xl font-medium text-ink sm:text-2xl">{pick(identity.title)}</p>

      {/* The five facts a screener should absorb before reading a sentence. */}
      <ul className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs text-muted">
        {identity.signals.map((signal, i) => (
          <li key={signal} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden className="text-line">·</span>}
            <span className={i === 0 ? 'font-medium text-accent' : undefined}>{signal}</span>
          </li>
        ))}
      </ul>

      <p className="prose-body mt-7 max-w-content text-base">{pick(identity.intro)}</p>

      <nav aria-label="Primary links" className="mt-9 flex flex-wrap gap-3">
        {ctas.map(({ key, to, href, icon: Icon, primary: isPrimary, external }) => {
          const className = isPrimary ? primary : secondary;
          const content = (
            <>
              <Icon className="h-4 w-4" aria-hidden />
              {t(`hero.cta.${key}`)}
            </>
          );
          return to ? (
            <Link key={key} to={to} className={className}>
              {content}
            </Link>
          ) : (
            <a
              key={key}
              href={href}
              className={className}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {content}
            </a>
          );
        })}
      </nav>

      <a
        href="#experience"
        className="mt-12 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.18em] text-faint hover:text-accent"
      >
        <ArrowDown className="h-3.5 w-3.5" aria-hidden />
        {t('sections.experience')}
      </a>
    </header>
  );
};

export default Hero;
