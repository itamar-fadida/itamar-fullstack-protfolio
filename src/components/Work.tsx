import { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from './Section';
import { work, type WorkItem } from '../data/profile';
import { useLang } from '../hooks/useLang';

const statusKey = {
  production: 'labels.production',
  internal: 'labels.internal',
  prototype: 'labels.prototype',
} as const;

const Shots = ({ item, alt }: { item: WorkItem; alt: string }) => {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  // A listed screenshot that 404s is dropped rather than rendered as a broken
  // image, so adding filenames before the files exist degrades quietly.
  const [sources, setSources] = useState(item.images);

  const total = sources.length;
  const current = Math.min(index, Math.max(total - 1, 0));
  const step = (delta: number) => setIndex((i) => (i + delta + total) % total);

  const dropCurrent = (src: string) =>
    setSources((prev) => prev.filter((candidate) => candidate !== src));

  if (total === 0) {
    return null;
  }

  return (
    <div className="relative border-b border-line bg-surface">
      {/* Screenshots are dense; open the full-resolution file in a new tab. */}
      <a href={sources[current]} target="_blank" rel="noopener noreferrer" title={t('labels.openFull')}>
        <img
          src={sources[current]}
          alt={`${alt} — ${t('labels.screenshot')} ${current + 1}/${total}`}
          loading="lazy"
          decoding="async"
          onError={() => dropCurrent(sources[current])}
          className="aspect-[16/10] w-full object-contain"
        />
      </a>

      {total > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label={t('labels.previous')}
            className="rounded border border-line bg-page/90 p-1.5 text-muted hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
          </button>

          <span className="rounded bg-page/90 px-2 py-1 font-mono text-2xs text-faint">
            {current + 1} / {total}
          </span>

          <button
            type="button"
            onClick={() => step(1)}
            aria-label={t('labels.next')}
            className="rounded border border-line bg-page/90 p-1.5 text-muted hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      )}
    </div>
  );
};

const Work = () => {
  const { t, pick, isHebrew } = useLang();

  return (
    <Section id="work" label={t('sections.work')}>
      <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
        {work.map((item) => {
          const name = isHebrew ? item.nameHe : item.name;
          return (
            <article key={item.id} className="flex flex-col bg-page">
              {item.images.length > 0 && <Shots item={item} alt={name} />}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-base font-semibold">{name}</h3>
                  <span
                    className={`font-mono text-2xs uppercase tracking-wider ${
                      item.status === 'production' ? 'text-emerald-600 dark:text-emerald-400' : 'text-faint'
                    }`}
                  >
                    {t(statusKey[item.status])}
                  </span>
                </div>

                <p className="prose-body mt-2 text-sm">{pick(item.summary)}</p>

                <ul className="mt-3 space-y-1.5">
                  {item.engineering.map((line, i) => (
                    <li key={i} className="prose-body flex gap-2.5 text-sm">
                      <span aria-hidden className="mt-2 h-px w-2.5 shrink-0 bg-line" />
                      <span>{pick(line)}</span>
                    </li>
                  ))}
                </ul>

                {item.flow && (
                  <ol className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-1 font-mono text-2xs text-faint">
                    {item.flow.map((stage, i) => (
                      <li key={stage} className="flex items-center gap-1.5">
                        {i > 0 && (
                          <span aria-hidden className="text-line">
                            &rarr;
                          </span>
                        )}
                        <span className="rounded border border-line px-1.5 py-0.5">{stage}</span>
                      </li>
                    ))}
                  </ol>
                )}

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>

                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-medium text-accent hover:underline"
                  >
                    {t('labels.visit')}
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-6 font-mono text-2xs text-faint">{t('labels.moreWork')}</p>
    </Section>
  );
};

export default Work;
