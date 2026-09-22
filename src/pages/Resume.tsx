import { Download, Printer } from 'lucide-react';
import {
  education,
  experience,
  identity,
  learning,
  links,
  professionalSummary,
  skills,
} from '../data/profile';
import { downloadResumePdf } from '../lib/resumePdf';
import { useLang } from '../hooks/useLang';

const Resume = () => {
  const { t, pick } = useLang();

  const contactLine = [
    { label: links.email, href: `mailto:${links.email}` },
    links.linkedin ? { label: 'LinkedIn', href: links.linkedin } : null,
    links.github ? { label: 'GitHub', href: links.github } : null,
    { label: links.site.replace(/^https?:\/\//, ''), href: links.site },
  ].filter(Boolean) as Array<{ label: string; href: string }>;

  return (
    <div className="mx-auto w-full max-w-content px-5 py-12 sm:px-8 sm:py-16">
      {/* Controls — excluded from print output. Navigation back to the
          portfolio already lives in the fixed header, so there is no second
          "back" control here. */}
      <div className="no-print mb-10 flex flex-wrap items-center gap-2">
        <div className="flex gap-2">
          <button
            type="button"
            onClick={downloadResumePdf}
            className="btn-primary"
          >
            <Download className="h-4 w-4" aria-hidden />
            {t('resume.download')}
          </button>
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-secondary"
          >
            <Printer className="h-4 w-4" aria-hidden />
            {t('resume.print')}
          </button>
        </div>
      </div>

      <article className="print-tight">
        {/* Header */}
        <header className="border-b border-line pb-5">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {pick(identity.name)}
          </h1>
          <p className="mt-1.5 text-lg text-muted">{pick(identity.title)}</p>

          <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            {contactLine.map((item, i) => (
              <li key={item.href} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="text-line">
                    |
                  </span>
                )}
                <a
                  href={item.href}
                  {...(item.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span aria-hidden className="text-line">
                |
              </span>
              <span>{pick(identity.location)}</span>
            </li>
          </ul>
        </header>

        {/* Summary */}
        <section className="pt-6">
          <h2 className="eyebrow mb-2.5">{t('resume.summary')}</h2>
          <p className="prose-body">{pick(professionalSummary)}</p>
        </section>

        {/* Experience */}
        <section className="pt-8">
          <h2 className="eyebrow mb-4">{t('resume.experience')}</h2>

          <div className="space-y-6">
            {experience.map((role) => (
              <div key={role.id} className="break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-base font-semibold">{pick(role.role)}</h3>
                  <span className="font-mono text-xs text-faint">{pick(role.period)}</span>
                </div>

                <p className="mt-0.5 text-sm text-muted">
                  <span className="font-medium text-accent">{pick(role.org)}</span>
                  {role.context && (
                    <>
                      <span aria-hidden className="mx-2 text-line">
                        ·
                      </span>
                      {pick(role.context)}
                    </>
                  )}
                </p>

                <ul className="mt-2.5 space-y-1.5">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="prose-body flex gap-2.5 text-sm">
                      <span aria-hidden className="mt-2 h-px w-2.5 shrink-0 bg-line" />
                      <span>{pick(bullet)}</span>
                    </li>
                  ))}
                </ul>

                {role.impact && role.impact.length > 0 && (
                  <p className="mt-2 font-mono text-2xs text-accent">
                    {role.impact.map((i) => pick(i)).join(' · ')}
                  </p>
                )}

                <p className="mt-2 font-mono text-2xs text-faint">{role.stack.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="pt-8">
          <h2 className="eyebrow mb-4">{t('resume.education')}</h2>
          {education.map((entry) => (
            <div key={entry.id}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-base font-semibold">{pick(entry.degree)}</h3>
                <span className="font-mono text-xs text-faint">{pick(entry.period)}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted">
                <span className="font-medium text-accent">{pick(entry.institution)}</span>
                <span aria-hidden className="mx-2 text-line">
                  ·
                </span>
                {pick(entry.focus)}
              </p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="pt-8">
          <h2 className="eyebrow mb-4">{t('resume.skills')}</h2>

          <dl className="space-y-2">
            {skills.map((group) => (
              <div key={group.label.en} className="grid gap-x-6 gap-y-0.5 sm:grid-cols-[9rem_1fr]">
                <dt className="text-sm font-semibold">{pick(group.label)}</dt>
                <dd className="text-sm text-muted">{group.items.join(' · ')}</dd>
              </div>
            ))}

            <div className="grid gap-x-6 gap-y-0.5 pt-1 sm:grid-cols-[9rem_1fr]">
              <dt className="text-sm font-semibold text-faint">{t('labels.learning')}</dt>
              <dd className="text-sm italic text-faint">{pick(learning)}</dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  );
};

export default Resume;
