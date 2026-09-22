import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  /** Small monospace eyebrow shown above the rule. */
  label: string;
  children: ReactNode;
  /** Optional one-line note rendered opposite the label. */
  note?: string;
}

/**
 * Every top-level section uses the same header treatment: a hairline rule with
 * a monospace label. No cards, no shadows, no decoration.
 */
const Section = ({ id, label, children, note }: SectionProps) => (
  <section id={id} className="scroll-mt-20 border-t border-line py-14 sm:py-20">
    <div className="mx-auto w-full max-w-page px-5 sm:px-8">
      <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h2 className="eyebrow">{label}</h2>
        {note && <p className="font-mono text-2xs text-faint">{note}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default Section;
