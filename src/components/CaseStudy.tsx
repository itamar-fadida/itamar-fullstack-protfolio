import { ChevronRight, FlaskConical } from 'lucide-react';
import Section from './Section';
import { caseStudy } from '../data/profile';
import { useLang } from '../hooks/useLang';

/**
 * Request-path diagram. Deliberately plain CSS boxes rather than a decorative
 * illustration: it has to stay readable at 360px and in both themes.
 */
const FlowDiagram = () => {
  const { t, pick, isHebrew } = useLang();

  return (
    <figure className="my-8">
      <figcaption className="eyebrow mb-3">{t('labels.architecture')}</figcaption>

      <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
        {caseStudy.flow.map((node, i) => (
          <div key={node.stage.en} className="flex items-center gap-2 lg:flex-1">
            {i > 0 && (
              <ChevronRight
                aria-hidden
                className={`hidden h-4 w-4 shrink-0 text-faint lg:block ${
                  isHebrew ? 'rotate-180' : ''
                }`}
              />
            )}

            <div className="min-w-0 flex-1 rounded-md border border-line bg-surface px-3 py-2.5">
              <p className="font-mono text-2xs text-faint">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-0.5 truncate text-sm font-medium text-ink">{pick(node.stage)}</p>
              <p className="mt-0.5 text-xs leading-snug text-muted">{pick(node.detail)}</p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
};

const CaseStudy = () => {
  const { t, pick } = useLang();

  return (
    <Section id="case-study" label={t('sections.caseStudy')} note={caseStudy.project}>
      <h3 className="max-w-content text-2xl font-semibold sm:text-3xl">{pick(caseStudy.title)}</h3>
      <p className="prose-body mt-4 max-w-content text-base">{pick(caseStudy.lead)}</p>

      <FlowDiagram />

      <div className="divide-y divide-line border-t border-line">
        {caseStudy.sections.map((section) => {
          const isAnalysis = section.kind === 'analysis';
          return (
            <div key={section.key} className="grid gap-x-10 gap-y-3 py-7 md:grid-cols-[10rem_1fr]">
              <div className="md:pt-0.5">
                <h4 className="text-sm font-semibold text-ink">{pick(section.heading)}</h4>
                {isAnalysis && (
                  <p className="mt-2 inline-flex items-start gap-1.5 rounded border border-amber-500/40 bg-amber-500/10 px-2 py-1 font-mono text-2xs leading-snug text-amber-700 dark:text-amber-400">
                    <FlaskConical className="mt-px h-3 w-3 shrink-0" aria-hidden />
                    {t('labels.analysisBadge')}
                  </p>
                )}
              </div>

              <div className="min-w-0 max-w-content space-y-3">
                {isAnalysis ? (
                  <ul className="space-y-2">
                    {section.body.map((paragraph, i) => (
                      <li key={i} className="prose-body flex gap-3">
                        <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line" />
                        <span>{pick(paragraph)}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.body.map((paragraph, i) => (
                    <p key={i} className="prose-body">
                      {pick(paragraph)}
                    </p>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default CaseStudy;
