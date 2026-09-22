import Section from './Section';
import { experience } from '../data/profile';
import { useLang } from '../hooks/useLang';

const Experience = () => {
  const { t, pick } = useLang();

  return (
    <Section id="experience" label={t('sections.experience')}>
      <div className="divide-y divide-line">
        {experience.map((role, index) => (
          <article key={role.id} className={index === 0 ? 'pb-10' : 'py-10 last:pb-0'}>
            <div className="grid gap-x-10 gap-y-3 md:grid-cols-[10rem_1fr]">
              {/* Period rail — keeps the timeline scannable without ornament. */}
              <p className="font-mono text-xs text-faint md:pt-1">{pick(role.period)}</p>

              <div className="min-w-0">
                <h3
                  className={
                    index === 0
                      ? 'text-xl font-semibold sm:text-2xl'
                      : 'text-lg font-semibold sm:text-xl'
                  }
                >
                  {pick(role.role)}
                </h3>

                <p className="mt-1 text-sm font-medium text-accent">{pick(role.org)}</p>

                {role.context && (
                  <p className="mt-1 text-sm text-faint">{pick(role.context)}</p>
                )}

                <p className="prose-body mt-3 max-w-content">{pick(role.summary)}</p>

                <ul className="mt-4 max-w-content space-y-2">
                  {role.bullets.map((bullet, i) => (
                    <li key={i} className="prose-body flex gap-3">
                      <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-line" />
                      <span>{pick(bullet)}</span>
                    </li>
                  ))}
                </ul>

                {role.impact && role.impact.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {role.impact.map((item, i) => (
                      <li
                        key={i}
                        className="rounded border border-accent/30 bg-accent/5 px-2.5 py-1 font-mono text-2xs text-accent"
                      >
                        {pick(item)}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {role.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
