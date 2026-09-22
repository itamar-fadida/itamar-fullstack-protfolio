# itamarfadida.com

Personal site for Itamar Fadida — Software Engineer, Backend & Infrastructure.

React + TypeScript + Vite, Tailwind for styling, deployed on Vercel with a single
serverless function for the contact form.

## Content model

All portfolio and resume copy lives in one file: [`src/data/profile.ts`](src/data/profile.ts).
The home page and the resume page both read from it, so the two can never drift
apart. Editing rules are documented at the top of that file — the important one:

- `experience` and `work` describe things that were actually built and shipped.
- `learning` describes subjects being studied, and never moves into `experience`.
- No metric goes in unless it is a real number. Gaps are marked with `TODO`.

## Commands

```bash
npm install
npm run dev        # local dev server
npm run lint       # eslint
npm run build      # tsc --noEmit + vite build
npm run preview    # serve the production build
```

## Structure

```
src/
  data/profile.ts     content: identity, experience, work, case study, skills
  lib/resumePdf.ts    single-page A4 CV generator (jsPDF, loaded on demand)
  components/         section components, one per home-page section
  pages/              Home, Resume
  i18n/               English (default) and Hebrew
api/contact.ts        Vercel function — contact form via Resend
```

## Environment

`RESEND_API_KEY` is required for the contact form. See `.env.example`.
