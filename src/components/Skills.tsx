import Section from './Section';
import { learning, skills } from '../data/profile';
import { useLang } from '../hooks/useLang';

const Skills = () => {
  const { t, pick } = useLang();

  return (
    <Section id="skills" label={t('sections.skills')}>
      <dl className="divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div key={group.label.en} className="grid gap-x-10 gap-y-2 py-5 md:grid-cols-[10rem_1fr]">
            <dt className="text-sm font-semibold text-ink">{pick(group.label)}</dt>
            <dd className="text-sm leading-relaxed text-muted">{group.items.join(' · ')}</dd>
          </div>
        ))}
      </dl>

      {/* Studied, not practised. Kept visually and semantically apart from the list above. */}
      <div className="mt-6 rounded-md border border-dashed border-line p-5">
        <div className="grid gap-x-10 gap-y-2 md:grid-cols-[10rem_1fr]">
          <p className="text-sm font-semibold text-faint">{t('labels.learning')}</p>
          <p className="text-sm leading-relaxed text-muted">{pick(learning)}</p>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
