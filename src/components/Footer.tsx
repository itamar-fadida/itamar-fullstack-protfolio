import { identity, links } from '../data/profile';
import { useLang } from '../hooks/useLang';

const Footer = () => {
  const { t, pick } = useLang();
  const year = new Date().getFullYear();

  const items = [
    { label: links.email, href: `mailto:${links.email}` },
    links.github ? { label: 'GitHub', href: links.github } : null,
    links.linkedin ? { label: 'LinkedIn', href: links.linkedin } : null,
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-page flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          <span className="font-medium text-ink">{pick(identity.name)}</span>
          <span className="mx-2 text-line" aria-hidden>
            ·
          </span>
          {pick(identity.title)}
        </p>

        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                {...(item.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="text-sm text-muted hover:text-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <p className="mx-auto mt-6 max-w-page px-5 font-mono text-2xs text-faint sm:px-8">
        © {year} {pick(identity.name)}. {t('footer.rights')}.
      </p>
    </footer>
  );
};

export default Footer;
