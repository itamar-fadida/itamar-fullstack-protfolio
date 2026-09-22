import Section from './Section';
import { education } from '../data/profile';
import { useLang } from '../hooks/useLang';

const Education = () => {
  const { t, pick } = useLang();

  return (
    <Section id="education" label={t('sections.education')}>
      <div className="divide-y divide-line">
        {education.map((entry) => (
          <div key={entry.id} className="grid gap-x-10 gap-y-2 pb-6 md:grid-cols-[10rem_1fr]">
            <p className="font-mono text-xs text-faint md:pt-1">{pick(entry.period)}</p>
            <div>
              <h3 className="text-base font-semibold">{pick(entry.degree)}</h3>
              <p className="mt-1 text-sm text-accent">{pick(entry.institution)}</p>
              <p className="prose-body mt-2 max-w-content text-sm">{pick(entry.focus)}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;
