import type jsPDFType from 'jspdf';
import {
  education,
  experience,
  identity,
  learning,
  links,
  professionalSummary,
  skills,
} from '../data/profile';

/**
 * Generates the downloadable CV.
 *
 * English only and deliberately so: jsPDF's built-in fonts are Latin-1, and the
 * document is aimed at engineering recruiters who read English. The layout is
 * tuned to land on a single A4 page — if content grows, trim bullets rather
 * than letting it spill onto a second page.
 */
export async function buildResumePdf(): Promise<jsPDFType> {
  // Loaded on demand: jsPDF and its optional dependencies are large and only
  // ever needed when someone actually clicks download.
  const { default: JsPDF } = await import('jspdf');
  const doc = new JsPDF({ unit: 'mm', format: 'a4' });

  const PAGE_W = 210;
  const M = 15; // margin
  const W = PAGE_W - M * 2; // usable width
  const INK = 20;
  const MUTED = 95;

  let y = M + 2;

  const text = (
    value: string,
    x: number,
    size: number,
    style: 'normal' | 'bold' | 'italic',
    gray = INK,
    maxWidth = W,
  ) => {
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    doc.setTextColor(gray);
    const lines = doc.splitTextToSize(value, maxWidth) as string[];
    doc.text(lines, x, y);
    y += lines.length * (size * 0.3528 * 1.25);
    return lines.length;
  };

  const rule = (gap = 1.6) => {
    y += gap;
    doc.setDrawColor(205);
    doc.setLineWidth(0.2);
    doc.line(M, y, M + W, y);
    y += 3.4;
  };

  const heading = (label: string) => {
    y += 2.2;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(INK);
    doc.text(label.toUpperCase(), M, y);
    y += 1.2;
    doc.setDrawColor(150);
    doc.setLineWidth(0.3);
    doc.line(M, y, M + W, y);
    y += 3.4;
  };

  /* ---------------- header ---------------- */

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(19);
  doc.setTextColor(INK);
  doc.text(identity.name.en.toUpperCase(), M, y);
  y += 6.5;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(60);
  doc.text(identity.title.en, M, y);
  y += 5.2;

  const contact = [
    links.email,
    links.linkedin ? links.linkedin.replace(/^https?:\/\//, '') : null,
    links.github ? links.github.replace(/^https?:\/\//, '') : null,
    links.site.replace(/^https?:\/\//, ''),
    identity.location.en,
  ].filter(Boolean) as string[];

  doc.setFontSize(8.5);
  doc.setTextColor(MUTED);
  doc.text(contact.join('  |  '), M, y);
  y += 1;

  rule(2.2);

  /* ---------------- summary ---------------- */

  heading('Professional summary');
  text(professionalSummary.en, M, 9, 'normal', 55);

  /* ---------------- experience ---------------- */

  heading('Experience');

  experience.forEach((role, index) => {
    if (index > 0) y += 2.0;

    // Title row: role on the left, period right-aligned.
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(INK);
    doc.text(role.role.en, M, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(MUTED);
    doc.text(role.period.en, M + W, y, { align: 'right' });
    y += 4.2;

    const orgLine = role.context ? `${role.org.en} — ${role.context.en}` : role.org.en;
    text(orgLine, M, 9, 'italic', 70);
    y += 0.6;

    role.bullets.forEach((bullet) => {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.6);
      doc.setTextColor(55);
      const lines = doc.splitTextToSize(bullet.en, W - 4) as string[];
      doc.text('•', M, y);
      doc.text(lines, M + 3.6, y);
      y += lines.length * 3.5 + 0.4;
    });

    if (role.impact?.length) {
      const impact = role.impact.map((i) => i.en).join(' · ');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.4);
      doc.setTextColor(INK);
      const lines = doc.splitTextToSize(impact, W - 4) as string[];
      doc.text(lines, M + 3.6, y);
      y += lines.length * 3.5 + 0.7;
    }

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(120);
    const stack = doc.splitTextToSize(role.stack.join(' · '), W - 4) as string[];
    doc.text(stack, M + 3.6, y);
    y += stack.length * 3.2;
  });

  /* ---------------- education ---------------- */

  heading('Education');

  education.forEach((entry) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(INK);
    doc.text(entry.degree.en, M, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(MUTED);
    doc.text(entry.period.en, M + W, y, { align: 'right' });
    y += 4;

    text(`${entry.institution.en} — ${entry.focus.en}`, M, 8.6, 'normal', 70);
  });

  /* ---------------- skills ---------------- */

  heading('Technical skills');

  const labelW = 34;
  skills.forEach((group) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.6);
    doc.setTextColor(INK);
    doc.text(group.label.en, M, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(60);
    const lines = doc.splitTextToSize(group.items.join(' · '), W - labelW) as string[];
    doc.text(lines, M + labelW, y);
    y += lines.length * 3.6 + 0.6;
  });

  y += 1.4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.6);
  doc.setTextColor(110);
  doc.text('Currently studying', M, y);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(110);
  const study = doc.splitTextToSize(learning.en, W - labelW) as string[];
  doc.text(study, M + labelW, y);
  y += study.length * 3.6;

  return doc;
}

export async function downloadResumePdf() {
  const doc = await buildResumePdf();
  doc.save('Itamar_Fadida_Software_Engineer_CV.pdf');
}
