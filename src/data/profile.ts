/**
 * Single source of truth for the portfolio AND the resume.
 *
 * Editing rules (important — keep the site honest):
 *  - `experience` / `work` describe things that were actually built and shipped.
 *  - `learning` describes subjects being studied. Never promote an item from
 *    `learning` into `experience`.
 *  - Never add a metric here unless it is a real, verifiable number.
 *    Placeholders are tracked as TODO comments, not as invented values.
 */

export type Bilingual = { en: string; he: string };

export interface Role {
  id: string;
  /** Job title — what I did, not what the org is. */
  role: Bilingual;
  org: Bilingual;
  /** Short qualifier shown next to the org (e.g. scope / employment type). */
  context?: Bilingual;
  period: Bilingual;
  summary: Bilingual;
  bullets: Bilingual[];
  stack: string[];
  /**
   * Verified, real numbers only. Empty is fine — an empty impact list is far
   * better than a fabricated one.
   */
  impact?: Bilingual[];
}

/* ------------------------------------------------------------------ */
/* Identity                                                            */
/* ------------------------------------------------------------------ */

export const identity = {
  name: { en: 'Itamar Fadida', he: 'איתמר פדידה' } as Bilingual,
  title: {
    en: 'Software Engineer — Backend & Infrastructure',
    he: 'מהנדס תוכנה — Backend ותשתיות',
  } as Bilingual,
  /** Four high-signal facts, shown as a single line under the title. */
  signals: ['IDF Unit 81', 'Python', 'TypeScript', 'Kubernetes', 'FastAPI'],
  intro: {
    en: 'Software Engineer at IDF Unit 81, building backend services, multi-step data-processing workflows on Kubernetes, and internal production web systems — from schema and API design through containerisation, CI/CD and deployment.',
    he: 'מהנדס תוכנה ביחידה 81, בונה שירותי backend, workflows רב-שלביים לעיבוד מידע מעל Kubernetes ומערכות web פנימיות ב-production — מתכנון סכמות ו-APIs ועד קונטיינרים, CI/CD ופריסה.',
  } as Bilingual,
  location: { en: 'Tel Aviv District, Israel', he: 'מחוז תל אביב, ישראל' } as Bilingual,
};

/**
 * Used verbatim at the top of the resume — on the page and in the generated PDF.
 * Every claim here must be traceable to an entry in `experience` below.
 */
export const professionalSummary: Bilingual = {
  en: 'Software Engineer at IDF Unit 81 building backend services in Python and FastAPI, multi-step data-processing workflows on Kubernetes including GPU-accelerated stages, and internal production web systems. Comfortable across the full delivery path — data model and API design, implementation, containerisation, CI/CD and GitOps deployment. Separately architect and operate a production platform for a nonprofit as its sole engineer. Currently deepening distributed systems, operating systems, networking, message queues and system design fundamentals.',
  he: 'מהנדס תוכנה ביחידה 81: בונה שירותי backend ב-Python ו-FastAPI, workflows רב-שלביים לעיבוד מידע מעל Kubernetes כולל שלבים מואצי-GPU, ומערכות web פנימיות ב-production. עובד לאורך כל מסלול האספקה — תכנון מודל נתונים ו-API, מימוש, קונטיינרים, CI/CD ופריסה בגישת GitOps. במקביל מתכנן ומתפעל פלטפורמת production עבור עמותה כמהנדס יחיד. כרגע מעמיק במערכות מבוזרות, מערכות הפעלה, רשתות, תורי הודעות ותכנון מערכות.',
};

export const links = {
  email: 'itamar.fullstack@gmail.com',
  // Intentionally empty: the GitHub call-to-action stays hidden until there is a
  // profile worth sending a screener to. Set the URL here to re-enable it
  // everywhere (hero, contact, footer and the PDF header) at once.
  github: '',
  linkedin: 'https://www.linkedin.com/in/itamar-fadida-39b050342/',
  site: 'https://itamarfadida.com',
};

/* ------------------------------------------------------------------ */
/* Experience — ordered by professional weight, Unit 81 first          */
/* ------------------------------------------------------------------ */

export const experience: Role[] = [
  {
    id: 'unit81',
    role: { en: 'Software Engineer', he: 'מהנדס תוכנה' },
    org: {
      en: 'IDF — Intelligence & Technology Division, Unit 81',
      he: 'צה"ל — אגף המודיעין והטכנולוגיה, יחידה 81',
    },
    period: { en: '2024 — Present', he: '2024 — היום' },
    summary: {
      en: 'Backend services, data-processing workflows and internal web systems used operationally by other teams. Work spans the whole delivery path: API and data model design, implementation, containerisation, CI/CD and GitOps deployment across environments.',
      he: 'שירותי backend, workflows לעיבוד מידע ומערכות web פנימיות בשימוש תפעולי של צוותים אחרים. העבודה מכסה את כל מסלול האספקה: תכנון API ומודל נתונים, מימוש, קונטיינרים, CI/CD ופריסה בגישת GitOps בין סביבות.',
    },
    bullets: [
      {
        en: 'Build and maintain backend microservices in Python and FastAPI over PostgreSQL and MongoDB, exposing authenticated internal APIs over HTTP, WebSocket and Server-Sent Events so clients can follow long-running work as it progresses instead of polling for a result.',
        he: 'בונה ומתחזק micro-services ב-Python ו-FastAPI מעל PostgreSQL ו-MongoDB, עם APIs פנימיים מאובטחים מעל HTTP, WebSocket ו-Server-Sent Events, כך שלקוחות עוקבים אחרי עבודה ארוכה תוך כדי ריצתה במקום לתשאל אותה שוב ושוב.',
      },
      {
        en: 'Design data-processing pipelines as multi-step Argo Workflows on OpenShift — each stage a separate containerised step with explicit inputs and outputs, so stages can be re-run, replaced or scheduled independently.',
        he: 'מתכנן pipelines לעיבוד מידע כ-Argo Workflows רב-שלביים מעל OpenShift — כל שלב הוא step נפרד בקונטיינר עם קלט ופלט מפורשים, כך שניתן להריץ מחדש, להחליף או לתזמן כל שלב בנפרד.',
      },
      // TODO(itamar): sharpen this once you can say what the GPU stages actually do
      // (model inference? media/signal processing? training?) and roughly how much
      // they process. "GPU" alone is a keyword; "GPU-accelerated <X> over <N> items
      // per run" is an engineering claim — and this is a strong differentiator for
      // infrastructure roles, so it is worth the detail.
      {
        en: 'Build and run GPU-accelerated processing stages inside those workflows, scheduling GPU workloads on the cluster alongside ordinary CPU steps.',
        he: 'בונה ומריץ שלבי עיבוד מואצי-GPU בתוך אותם workflows, ומתזמן עומסי GPU בקלאסטר לצד שלבי CPU רגילים.',
      },
      {
        en: 'Own the deployment lifecycle of the services I build: container images, CI/CD pipelines and declarative GitOps delivery with ArgoCD across multiple environments.',
        he: 'אחראי על מחזור הפריסה של השירותים שאני בונה: image-ים, pipelines של CI/CD ופריסה דקלרטיבית ב-GitOps עם ArgoCD בין מספר סביבות.',
      },
      {
        en: 'Replace recurring manual operational processes with automated workflows, turning ad-hoc human steps into repeatable, triggerable jobs.',
        he: 'מחליף תהליכים תפעוליים ידניים חוזרים ב-workflows אוטומטיים, והופך שלבים אנושיים אד-הוק ל-jobs חוזרים וניתנים להפעלה.',
      },
      {
        en: 'Deliver features end to end — where a system needs an operator-facing interface I also build it in React, TypeScript and Vite (Redux / Zustand), so a change ships from data model to UI without a handoff.',
        he: 'מספק פיצ\'רים מקצה לקצה — כשמערכת דורשת ממשק למשתמש התפעולי אני בונה גם אותו ב-React, TypeScript ו-Vite (Redux / Zustand), כך שפיצ\'ר עובר ממודל הנתונים ועד ה-UI ללא העברה בין אנשים.',
      },
    ],
    stack: [
      'Python',
      'FastAPI',
      'PostgreSQL',
      'MongoDB',
      'WebSockets',
      'SSE',
      'GPU workloads',
      'Argo Workflows',
      'ArgoCD',
      'OpenShift',
      'Kubernetes',
      'CI/CD',
      'React',
      'TypeScript',
    ],
    // TODO(itamar): add real, non-sensitive numbers here when you can share them.
    // The highest-value ones, in order:
    //   1. how many services / workflows you personally own
    //   2. data volume or job count processed per run / per day
    //   3. a before/after processing-time or reliability figure for a workflow you rebuilt
    //   4. how many environments you deploy to and how often you deploy
    //   5. number of internal teams or users depending on what you built
    // Format: { en: 'Own N backend services and M production workflows', he: '...' }
    impact: [],
  },
  {
    id: 'omdim',
    role: { en: 'CTO & Software Engineer', he: 'CTO ומהנדס תוכנה' },
    org: { en: 'Omdim Lenatzach (nonprofit)', he: 'עומדים לנצח (עמותה)' },
    context: {
      en: 'Production platform — sole technical owner',
      he: 'פלטפורמה ב-production — אחריות טכנית מלאה',
    },
    period: { en: '2024 — Present', he: '2024 — היום' },
    summary: {
      en: 'Architected, built and operate a production platform that produces memorial materials for families of fallen soldiers. Sole technical owner: system design, backend, frontend, infrastructure and live operation. Over 100 memorial boards have been produced through the system.',
      he: 'תכננתי, בניתי ומתפעל פלטפורמה ב-production שמייצרת חומרי הנצחה עבור משפחות של חללים. אחריות טכנית בלעדית: ארכיטקטורה, backend, frontend, תשתית ותפעול חי. מעל 100 לוחות זיכרון הופקו דרך המערכת.',
    },
    bullets: [
      {
        en: 'Designed the system around asynchronous, event-driven processing: a request is accepted and persisted by the web layer, then picked up by background workers, so minutes-long media generation never blocks a user request.',
        he: 'תכננתי את המערכת סביב עיבוד אסינכרוני מונחה אירועים: בקשה נקלטת ונשמרת בשכבת ה-web ואז נאספת על ידי workers ברקע, כך שיצירת מדיה שאורכת דקות לא חוסמת בקשת משתמש.',
      },
      {
        en: 'Built the generation pipeline as discrete stages — text, narration audio and rendered video — each with its own inputs, stored artefacts and persisted state, so a stage can be inspected or re-run without repeating the whole job.',
        he: 'בניתי את ה-pipeline כשלבים נפרדים — טקסט, קריינות ווידאו — כשלכל שלב קלט משלו, artefacts שנשמרים ומצב מתמיד, כך שניתן לבדוק או להריץ מחדש שלב בלי לחזור על כל העבודה.',
      },
      {
        en: 'Implemented the backend on Firebase Functions with Python processing workers, and the media stages with Remotion (programmatic video), ElevenLabs (narration) and Gemini (text) behind a single internal interface per stage.',
        he: 'מימשתי את ה-backend מעל Firebase Functions עם workers ב-Python, ואת שלבי המדיה עם Remotion (וידאו פרוגרמטי), ElevenLabs (קריינות) ו-Gemini (טקסט) מאחורי ממשק פנימי אחיד לכל שלב.',
      },
      {
        en: 'Run it in production: deployment, configuration and third-party quota management, plus diagnosing and fixing issues that surface in live use.',
        he: 'מתפעל אותה ב-production: פריסה, קונפיגורציה וניהול מכסות של ספקים חיצוניים, לצד איתור ותיקון תקלות שעולות בשימוש חי.',
      },
    ],
    stack: [
      'Python',
      'Firebase Functions',
      'Firestore',
      'Google Cloud',
      'Remotion',
      'ElevenLabs',
      'Gemini',
      'React',
    ],
    impact: [
      { en: '100+ memorial boards produced in production', he: 'מעל 100 לוחות זיכרון הופקו ב-production' },
    ],
  },
  {
    id: 'freelance',
    role: { en: 'Software Engineer', he: 'מהנדס תוכנה' },
    org: { en: 'Independent', he: 'עצמאי' },
    context: { en: 'Client projects', he: 'פרויקטים ללקוחות' },
    period: { en: '2023 — Present', he: '2023 — היום' },
    summary: {
      en: 'Delivered production web systems for clients end to end — data model and API, processing jobs, frontend, deployment and ongoing maintenance.',
      he: 'סיפקתי מערכות web ב-production ללקוחות מקצה לקצה — מודל נתונים ו-API, תהליכי עיבוד, frontend, פריסה ותחזוקה שוטפת.',
    },
    bullets: [
      {
        en: 'Built and shipped live systems on Firebase/Firestore, Supabase and Cloudflare Workers, with Python jobs for content ingestion, transcription and enrichment.',
        he: 'בניתי והשקתי מערכות חיות מעל Firebase/Firestore, Supabase ו-Cloudflare Workers, עם jobs ב-Python לאיסוף תוכן, תמלול והעשרה.',
      },
      {
        en: 'Owned authentication, per-user access control, storage and deployment for each system, and kept them running after launch.',
        he: 'אחראי על אימות, הרשאות ברמת משתמש, אחסון ופריסה בכל מערכת, והמשכתי לתחזק אותן לאחר ההשקה.',
      },
    ],
    stack: ['Python', 'TypeScript', 'Firebase', 'Supabase', 'Cloudflare Workers', 'Vercel'],
  },
  {
    id: 'appsflyer',
    role: { en: 'Team Lead & Backend Developer', he: 'ראש צוות ומפתח Backend' },
    org: { en: 'AppsFlyer', he: 'AppsFlyer' },
    context: {
      en: 'Two-month volunteer industry project during studies — not an employee',
      he: 'פרויקט תעשייה התנדבותי בן חודשיים במהלך הלימודים — לא כעובד החברה',
    },
    period: { en: '2024 · 2 months', he: '2024 · חודשיים' },
    summary: {
      en: 'Volunteer industry project run with AppsFlyer as part of Practical Engineering studies: a monitoring application for caregivers of children with special needs.',
      he: 'פרויקט תעשייה התנדבותי עם AppsFlyer במסגרת לימודי הנדסאי תוכנה: אפליקציית ניטור עבור מטפלים בילדים עם צרכים מיוחדים.',
    },
    bullets: [
      {
        en: 'Led a team of 6 developers through delivery of the application, splitting the work into client and backend tracks and integrating them.',
        he: 'הובלתי צוות של 6 מפתחים לאורך אספקת האפליקציה, חילקתי את העבודה למסלולי client ו-backend ושילבתי ביניהם.',
      },
      {
        en: 'Owned the TypeScript backend on AWS Lambda — SMS alerting, Amazon Location Service for location tracking and Google Calendar integration — against a React Native client.',
        he: 'אחראי על ה-backend ב-TypeScript מעל AWS Lambda — התראות SMS, Amazon Location Service לניטור מיקום ואינטגרציה ל-Google Calendar — מול client ב-React Native.',
      },
    ],
    stack: ['TypeScript', 'AWS Lambda', 'Amazon Location Service', 'React Native'],
  },
];

/* ------------------------------------------------------------------ */
/* Engineering case study                                              */
/* ------------------------------------------------------------------ */

export interface CaseSection {
  key: string;
  heading: Bilingual;
  /** 'built' = shipped and verifiable. 'analysis' = engineering reasoning only. */
  kind: 'built' | 'analysis';
  body: Bilingual[];
}

export const caseStudy = {
  project: 'Omdim Lenatzach',
  title: {
    en: 'Engineering case study — an asynchronous media generation platform',
    he: 'Case study הנדסי — פלטפורמת יצירת מדיה אסינכרונית',
  } as Bilingual,
  lead: {
    en: 'A production system for a nonprofit that turns a short web form into a finished memorial package — a board, a narrated audio piece and a rendered video. The interesting engineering problem is not the generation itself; it is that every step is slow, external and failure-prone, while the user is sitting in front of a browser.',
    he: 'מערכת production עבור עמותה שהופכת טופס web קצר לחבילת הנצחה מוגמרת — לוח זיכרון, קטע קריינות וסרטון. האתגר ההנדסי אינו היצירה עצמה, אלא שכל שלב איטי, חיצוני ונוטה לכשלים — בזמן שהמשתמש ממתין מול הדפדפן.',
  } as Bilingual,
  /** Rendered as the architecture diagram. */
  flow: [
    {
      stage: { en: 'React client', he: 'Client ב-React' },
      detail: { en: 'Form submit, then observes job state', he: 'שליחת טופס ומעקב אחר מצב ה-job' },
    },
    {
      stage: { en: 'Firestore', he: 'Firestore' },
      detail: { en: 'Request + per-stage state', he: 'בקשה ומצב לכל שלב' },
    },
    {
      stage: { en: 'Firebase Functions', he: 'Firebase Functions' },
      detail: { en: 'Event-triggered orchestration', he: 'תזמור מונחה אירועים' },
    },
    {
      stage: { en: 'Python workers', he: 'Workers ב-Python' },
      detail: { en: 'Text · narration · video stages', he: 'שלבי טקסט · קריינות · וידאו' },
    },
    {
      stage: { en: 'Cloud Storage', he: 'Cloud Storage' },
      detail: { en: 'Rendered artefacts', he: 'Artefacts מוגמרים' },
    },
  ],
  sections: [
    {
      key: 'problem',
      kind: 'built',
      heading: { en: 'Problem', he: 'הבעיה' },
      body: [
        {
          en: 'Volunteers were assembling memorial materials by hand — writing the text, recording narration and editing a video per family. The work was slow, inconsistent between volunteers, and did not scale with demand.',
          he: 'מתנדבים הרכיבו חומרי הנצחה ידנית — כתיבת הטקסט, הקלטת קריינות ועריכת סרטון לכל משפחה. התהליך היה איטי, לא אחיד בין מתנדבים ולא התרחב עם הביקוש.',
        },
      ],
    },
    {
      key: 'requirements',
      kind: 'built',
      heading: { en: 'Requirements', he: 'דרישות' },
      body: [
        {
          en: 'A non-technical requester submits a short form and receives a complete package. The requester must be able to preview the result before it is delivered. Generation takes minutes, so it cannot happen inside an HTTP request. A nonprofit budget rules out always-on infrastructure.',
          he: 'מבקש לא-טכני ממלא טופס קצר ומקבל חבילה שלמה. המבקש צריך לראות הדמיה לפני המסירה. היצירה אורכת דקות ולכן אינה יכולה להתרחש בתוך בקשת HTTP. תקציב של עמותה שולל תשתית שרצה תמיד.',
        },
      ],
    },
    {
      key: 'architecture',
      kind: 'built',
      heading: { en: 'Architecture', he: 'ארכיטקטורה' },
      body: [
        {
          en: 'The web layer only accepts and persists work; it never performs it. A submitted request becomes a document in Firestore, which is both the queue and the state store. Firebase Functions react to writes on that document and dispatch the generation stages to Python workers. Finished artefacts land in Cloud Storage and their references are written back to the request document.',
          he: 'שכבת ה-web רק קולטת ושומרת עבודה, ולעולם לא מבצעת אותה. בקשה שנשלחת הופכת למסמך ב-Firestore, שמשמש גם כתור וגם כמאגר המצב. Firebase Functions מגיבים לכתיבות על המסמך ומפעילים את שלבי היצירה ב-workers של Python. התוצרים נשמרים ב-Cloud Storage וההפניות אליהם נכתבות בחזרה למסמך הבקשה.',
        },
        {
          en: 'Each generation stage is an independent unit with a narrow contract: it reads the request document, produces one artefact, and records its own outcome. Stages do not call each other directly.',
          he: 'כל שלב יצירה הוא יחידה עצמאית עם חוזה צר: הוא קורא את מסמך הבקשה, מייצר artefact אחד ורושם את התוצאה שלו. השלבים אינם קוראים זה לזה ישירות.',
        },
      ],
    },
    {
      key: 'dataflow',
      kind: 'built',
      heading: { en: 'Data flow', he: 'זרימת נתונים' },
      body: [
        {
          en: 'Form submission → request document written to Firestore → function triggered on write → text stage (Gemini) → narration stage (ElevenLabs) → video render stage (Remotion) → artefacts written to Cloud Storage → references and status written back to the request document → client renders a live preview from that document.',
          he: 'שליחת טופס ← כתיבת מסמך בקשה ב-Firestore ← הפעלת function על הכתיבה ← שלב טקסט (Gemini) ← שלב קריינות (ElevenLabs) ← שלב רינדור וידאו (Remotion) ← כתיבת התוצרים ל-Cloud Storage ← כתיבת הפניות וסטטוס חזרה למסמך ← ה-client מציג הדמיה חיה מתוך אותו מסמך.',
        },
      ],
    },
    {
      key: 'backend',
      kind: 'built',
      heading: { en: 'Backend design', he: 'תכנון ה-Backend' },
      body: [
        {
          en: 'Firebase Functions are thin: they validate, decide which stage runs next and invoke it. The substantial work lives in Python processing code that is deliberately kept independent of the Functions runtime, so a stage can be run directly during development or debugging without going through the cloud trigger.',
          he: 'ה-Functions דקים: הם מוודאים תקינות, מחליטים איזה שלב רץ הבא ומפעילים אותו. העבודה המהותית נמצאת בקוד Python שנשמר במכוון עצמאי מסביבת ה-Functions, כך שניתן להריץ שלב ישירות בפיתוח או בדיבאג בלי לעבור דרך ה-trigger הענני.',
        },
        {
          en: 'Third-party model and media providers sit behind one internal interface per stage. That boundary is what made it possible to change providers and prompts without touching orchestration.',
          he: 'ספקי המודלים והמדיה החיצוניים יושבים מאחורי ממשק פנימי אחד לכל שלב. הגבול הזה הוא שאיפשר להחליף ספקים ו-prompts בלי לגעת בתזמור.',
        },
      ],
    },
    {
      key: 'async',
      kind: 'built',
      heading: { en: 'Asynchronous processing', he: 'עיבוד אסינכרוני' },
      body: [
        {
          en: 'Nothing about the generation path is synchronous. The client gets an immediate response containing a request id, then subscribes to the request document and renders progress and previews as stages complete. This is what lets a multi-minute render sit behind an ordinary web form.',
          he: 'שום חלק במסלול היצירה אינו סינכרוני. ה-client מקבל תשובה מיידית עם מזהה בקשה, נרשם למסמך הבקשה ומציג התקדמות והדמיות ככל שהשלבים מסתיימים. זה מה שמאפשר לרינדור של כמה דקות לשבת מאחורי טופס web רגיל.',
        },
      ],
    },
    {
      key: 'infra',
      kind: 'built',
      heading: { en: 'Infrastructure', he: 'תשתית' },
      body: [
        {
          en: 'Fully managed and scale-to-zero: Firebase Functions for compute, Firestore for state, Cloud Storage for artefacts, static hosting for the client. There are no servers to keep alive between requests, which is the right shape for bursty, low-volume, budget-constrained usage.',
          he: 'מנוהלת לחלוטין ומתכווצת לאפס: Firebase Functions לחישוב, Firestore למצב, Cloud Storage לתוצרים ואחסון סטטי ל-client. אין שרתים שצריך להשאיר חיים בין בקשות, וזו הצורה הנכונה לשימוש מתפרץ, בנפח נמוך ובתקציב מוגבל.',
        },
      ],
    },
    {
      key: 'failure',
      kind: 'built',
      heading: { en: 'Failure handling', he: 'טיפול בכשלים' },
      body: [
        {
          en: 'Every stage depends on an external provider that can be slow, rate-limited or simply down. Because state is persisted per stage rather than held in memory, a failed stage is visible as state rather than lost silently, and a request can be resumed from the stage that failed instead of from the beginning.',
          he: 'כל שלב תלוי בספק חיצוני שעלול להיות איטי, מוגבל בקצב או פשוט מושבת. מכיוון שהמצב נשמר לכל שלב בנפרד ולא מוחזק בזיכרון, שלב שנכשל נראה כמצב ולא נעלם בשקט, וניתן להמשיך בקשה מהשלב שנכשל במקום מההתחלה.',
        },
        {
          en: 'The preview step is also a correctness mechanism, not only a product feature: a generated result is reviewed before it reaches a family, so a bad output is caught by a human rather than delivered.',
          he: 'שלב ההדמיה הוא גם מנגנון נכונות ולא רק פיצ\'ר מוצר: תוצאה שנוצרה נבדקת לפני שהיא מגיעה למשפחה, כך שפלט שגוי נתפס על ידי אדם ולא נמסר.',
        },
      ],
    },
    {
      key: 'deployment',
      kind: 'built',
      heading: { en: 'Deployment', he: 'פריסה' },
      body: [
        {
          en: 'Functions and client are deployed from the repository; configuration and provider credentials are held outside the code as environment configuration. I run the deployments and the provider quota management myself — the organisation has no other engineer.',
          he: 'ה-Functions וה-client נפרסים מתוך המאגר; קונפיגורציה ומפתחות ספקים מוחזקים מחוץ לקוד כהגדרות סביבה. אני מבצע את הפריסות ואת ניהול המכסות של הספקים בעצמי — לעמותה אין מהנדס נוסף.',
        },
      ],
    },
    {
      key: 'tradeoffs',
      kind: 'built',
      heading: { en: 'Trade-offs', he: 'Trade-offs' },
      body: [
        {
          en: 'Using Firestore as both queue and state store is the central trade-off. It removed an entire component from a system with one engineer, and document subscriptions gave live progress in the client for free. The cost is ordering and fan-out guarantees far weaker than a real queue, and coupling to a single managed provider.',
          he: 'השימוש ב-Firestore גם כתור וגם כמאגר מצב הוא ה-trade-off המרכזי. הוא חסך רכיב שלם במערכת עם מהנדס אחד, והמנוי על מסמכים סיפק התקדמות חיה ב-client ללא עלות. המחיר הוא הבטחות סדר ופיזור חלשות בהרבה מתור אמיתי, ותלות בספק מנוהל יחיד.',
        },
        {
          en: 'Serverless compute was chosen for cost, not for throughput: it is close to free when idle, but it caps how long a single stage may run and makes cold starts visible on the first request of a quiet day.',
          he: 'חישוב serverless נבחר בשל עלות ולא בשל תפוקה: הוא כמעט חינמי במצב סרק, אך מגביל את משך הריצה של שלב בודד וגורם ל-cold start מורגש בבקשה הראשונה של יום שקט.',
        },
      ],
    },
  ] as CaseSection[],
};

/* ------------------------------------------------------------------ */
/* Selected engineering work                                           */
/* ------------------------------------------------------------------ */

export interface WorkItem {
  id: number;
  name: string;
  nameHe: string;
  status: 'production' | 'internal' | 'prototype';
  /** One line: what the system is and what it does. */
  summary: Bilingual;
  /** Two to four lines on the engineering, not the feature list. */
  engineering: Bilingual[];
  /** Optional: the request/execution path, rendered as a compact chain. */
  flow?: string[];
  stack: string[];
  /** May be empty — the card renders without a screenshot strip. */
  images: string[];
  url?: string;
}

export const work: WorkItem[] = [
  {
    id: 1,
    name: 'Omdim Lenatzach',
    nameHe: 'עומדים לנצח',
    status: 'production',
    summary: {
      en: 'Production platform for a nonprofit that generates memorial boards, narrated audio and rendered video from a single request. 100+ boards produced.',
      he: 'פלטפורמת production לעמותה שמייצרת לוחות זיכרון, קריינות וסרטונים מבקשה אחת. מעל 100 לוחות הופקו.',
    },
    engineering: [
      {
        en: 'Event-driven backend: requests are persisted and processed by background workers, never inside the request path.',
        he: 'Backend מונחה אירועים: בקשות נשמרות ומעובדות על ידי workers ברקע, לעולם לא בתוך מסלול הבקשה.',
      },
      {
        en: 'Generation split into independent stages (text, narration, video) with per-stage state and stored artefacts.',
        he: 'היצירה מפוצלת לשלבים עצמאיים (טקסט, קריינות, וידאו) עם מצב לכל שלב ותוצרים שנשמרים.',
      },
      {
        en: 'Sole technical owner: architecture, backend, client, deployment and live operation.',
        he: 'אחריות טכנית בלעדית: ארכיטקטורה, backend, client, פריסה ותפעול חי.',
      },
    ],
    stack: ['Python', 'Firebase Functions', 'Firestore', 'Google Cloud', 'Remotion', 'ElevenLabs', 'Gemini', 'React'],
    images: ['/fes1.png', '/fes2.png', '/fes3.png', '/fes4.png', '/fes5.png', '/fes6.png'],
    url: 'https://omdimlanetzach.co.il/',
  },
  {
    id: 8,
    name: 'Blue Labratory — agent research platform',
    nameHe: 'Blue Labratory — פלטפורמת מחקר מבוססת סוכנים',
    status: 'internal',
    summary: {
      en: 'A research platform built around a review loop rather than a single model call: a gatekeeper turns a vague brief into a hard spec, a writer and a critic argue over the solution until the critic agrees, and an architect compiles the result into an executable step graph. Every agent prompt is editable from the UI. Runs end to end locally against a self-hosted Gemma model; not deployed.',
      he: 'פלטפורמת מחקר סביב לולאת ביקורת: סוכן כותב פתרון, סוכן שני מבקר, והם חוזרים עד אישור. הפתרון המאושר הופך לגרף שלבים שרץ אוטומטית. רצה מקומית מול Gemma; לא פרוסה.',
    },
    engineering: [
      {
        en: 'The quality mechanism is a loop, not a bigger model: the writer drafts a solution, the critic returns an explicit AGREE or DISAGREE with reasons, and the pair re-runs until the critic agrees or a round cap is reached — so a small local model still converges on something reviewable.',
        he: 'לולאה במקום מודל גדול: ה-writer כותב, ה-critic מאשר או דוחה עם נימוקים, וחוזר חלילה עד אישור או עד תקרת סבבים. כך גם מודל מקומי קטן מגיע לתוצאה ראויה.',
      },
      {
        en: 'A gatekeeper agent interviews the user one question at a time until the spec has concrete inputs, outputs and constraints, and recommends which reusable domain skills to attach — chosen from the skills actually registered in the database. It advises; the user decides; it never executes anything itself.',
        he: 'סוכן gatekeeper שואל שאלה אחת בכל פעם עד שהמפרט ברור, וממליץ אילו skills לצרף מתוך אלו שקיימים במסד הנתונים. ההחלטה נשארת אצל המשתמש.',
      },
      {
        en: 'Every agent prompt — gatekeeper, writer, critic, architect and the workers — is a database row edited from the UI and read fresh per request, with no fallback to a hard-coded default: changing agent behaviour needs no code change and no redeploy.',
        he: 'כל ה-prompts של הסוכנים שמורים במסד הנתונים ונערכים מה-UI — שינוי התנהגות בלי שינוי קוד ובלי פריסה מחדש.',
      },
      {
        en: 'The approved solution is compiled into a step graph executed in dependency order (cycles and dangling references fail the run rather than passing silently); each step runs a bounded edit → pytest → repair loop in a real git workspace and commits only once its tests pass.',
        he: 'הפתרון המאושר הופך לגרף שלבים שרץ לפי סדר התלויות; כל שלב רץ ב-workspace של git בלולאת כתיבה ← pytest ← תיקון, ומבצע commit רק כשהבדיקות עוברות.',
      },
    ],
    flow: [
      'Brief',
      'Gatekeeper spec + skill picks',
      'Writer',
      'Critic',
      'AGREE?',
      'Architect → step graph',
      'Runner: agent → pytest → commit',
    ],
    stack: [
      'Python',
      'FastAPI',
      'MongoDB',
      'Ollama / Gemma',
      'S3 / MinIO',
      'Docker',
      'GitLab API',
      'React',
      'TypeScript',
    ],
    // Ordered by evidence strength — the writer/critic loop and the executed
    // run lead, because they are the two that prove the system actually works.
    // bluelabratory3 (launch settings) is intentionally left out: it repeats
    // what the clarification shot already shows.
    images: [
      '/bluelabratory4.png', // writer/critic loop: DISAGREE -> DISAGREE -> AGREE
      '/bluelabratory5.png', // architect mission.json + executed run (pytest passed, real commit)
      '/bluelabratory2.png', // gatekeeper clarification + pipeline/critic panels
      '/bluelabratory6.png', // agent prompts edited from the UI
      '/bluelabratory7.png', // skills library the gatekeeper recommends from
      '/bluelabratory1.png', // mission intake
    ],
  },
  {
    id: 2,
    name: 'Torah Lishma — lesson catalogue',
    nameHe: 'תורה לשמה — קטלוג שיעורים',
    status: 'production',
    summary: {
      en: 'Public catalogue of 360+ recorded lesson series (10,000+ lessons) with search, filtering, streaming and download.',
      he: 'קטלוג ציבורי של מעל 360 סדרות שיעורים מוקלטות (מעל 10,000 שיעורים) עם חיפוש, סינון, האזנה והורדה.',
    },
    engineering: [
      {
        en: 'Edge backend on Cloudflare Workers in front of a Supabase relational model for series, speakers and topics.',
        he: 'Backend בקצה מעל Cloudflare Workers מול מודל רלציוני ב-Supabase לסדרות, רבנים ונושאים.',
      },
      {
        en: 'Playwright ingestion jobs collect and refresh series metadata rather than maintaining the catalogue by hand.',
        he: 'Jobs של Playwright אוספים ומרעננים מטא-דאטה של סדרות במקום תחזוקה ידנית של הקטלוג.',
      },
      {
        en: 'Media served from Google Drive instead of paid object storage — a deliberate cost trade-off for a free service.',
        he: 'המדיה מוגשת מ-Google Drive במקום אחסון אובייקטים בתשלום — trade-off עלות מכוון לשירות חינמי.',
      },
    ],
    stack: ['Cloudflare Workers', 'Supabase', 'Playwright', 'Google Drive API', 'React', 'Turnstile'],
    images: ['/torah1.png', '/torah2.png', '/torah3.png', '/torah4.png'],
    url: 'https://torah-series.torah-lishma-official.workers.dev/',
  },
  {
    id: 3,
    name: 'Daily Halacha Learning',
    nameHe: 'הלימוד היומי בהלכה',
    status: 'production',
    summary: {
      en: 'Bilingual study platform with per-user access control over paid book content and generated audio lessons.',
      he: 'פלטפורמת לימוד דו-לשונית עם הרשאות ברמת משתמש לתוכן ספרים ושיעורי שמע שנוצרים אוטומטית.',
    },
    engineering: [
      {
        en: 'Authorisation model that grants book-level access per user, enforced on the data layer rather than in the UI.',
        he: 'מודל הרשאות שמעניק גישה ברמת ספר לכל משתמש ונאכף בשכבת הנתונים ולא ב-UI.',
      },
      {
        en: 'Python transcription and ingestion pipelines convert source books into structured, day-indexed study content.',
        he: 'Pipelines ב-Python לתמלול וקליטה הופכים ספרי מקור לתוכן לימוד מובנה ומאונדקס לפי יום.',
      },
      {
        en: 'Batch text-to-speech generation produces audio for lessons ahead of time instead of on request.',
        he: 'יצירת TTS באצווה מייצרת שמע לשיעורים מראש במקום לפי בקשה.',
      },
    ],
    stack: ['Python', 'Firebase Auth', 'Firestore', 'Google TTS', 'React', 'i18n (HE/EN)'],
    images: ['/halacha1.png', '/halacha2.png', '/halacha3.png', '/halacha4.png'],
    url: 'https://limod-halacha-yomi.vercel.app/he',
  },
  {
    id: 4,
    name: 'Collection enrichment automation',
    nameHe: 'אוטומציית העשרת מידע לאוספים',
    status: 'internal',
    summary: {
      en: 'Private desktop automation that searches the web for matching catalogue items and scores candidates before a human reviews them.',
      he: 'אוטומציה מקומית פרטית שסורקת את הרשת אחר פריטים תואמים ומדרגת מועמדים לפני בדיקה אנושית.',
    },
    engineering: [
      {
        en: 'Multi-stage Python pipeline: scrape with Playwright, extract, score with Gemini and Cloud Vision, then present ranked candidates.',
        he: 'Pipeline רב-שלבי ב-Python: סריקה עם Playwright, חילוץ, דירוג עם Gemini ו-Cloud Vision והצגת מועמדים מדורגים.',
      },
      {
        en: 'Keeps a human in the loop by design — the pipeline ranks and explains, it does not decide.',
        he: 'משאיר אדם בתהליך במכוון — ה-pipeline מדרג ומנמק, אינו מכריע.',
      },
    ],
    stack: ['Python', 'Playwright', 'Gemini', 'Google Cloud Vision'],
    images: ['/automation1.png', '/automation2.png'],
  },
  {
    id: 5,
    name: 'English Vocabulary — offline mobile app',
    nameHe: 'אפליקציית אנגלית — Offline',
    status: 'production',
    summary: {
      en: 'React Native app for vocabulary practice that works entirely offline, with an optional enrichment call when a network is available.',
      he: 'אפליקציית React Native לתרגול אוצר מילים שעובדת לגמרי ללא רשת, עם העשרה אופציונלית כשיש חיבור.',
    },
    engineering: [
      {
        en: 'Local SQLite is the source of truth, so the app is fully usable with no connectivity.',
        he: 'SQLite מקומי הוא מקור האמת, כך שהאפליקציה שמישה לחלוטין גם ללא חיבור.',
      },
      {
        en: 'Network-dependent enrichment is an optional path, not a dependency of the core flow.',
        he: 'העשרה תלוית-רשת היא מסלול אופציונלי ולא תלות של הזרימה המרכזית.',
      },
    ],
    stack: ['TypeScript', 'React Native', 'Expo', 'SQLite', 'Gemini API'],
    images: ['/english1.png', '/english2.png', '/english3.png', '/english4.png'],
  },
  {
    id: 6,
    name: 'Le\'ovdecha Be\'emet — landing page',
    nameHe: 'לעבדך באמת — דף נחיתה',
    status: 'production',
    summary: {
      en: 'Statically rendered marketing site built for load performance and search visibility.',
      he: 'אתר תדמית סטטי שנבנה למהירות טעינה ולנראות בחיפוש.',
    },
    engineering: [
      {
        en: 'Astro static output on a CDN — no runtime rendering cost per visitor.',
        he: 'פלט סטטי של Astro מעל CDN — ללא עלות רינדור בזמן ריצה לכל מבקר.',
      },
    ],
    stack: ['Astro', 'Vercel'],
    images: ['/yeshiva1.png', '/yeshiva2.png', '/yeshiva3.png'],
    url: 'https://leovdeah-bemet.vercel.app/',
  },
  {
    id: 7,
    name: 'GovMind',
    nameHe: 'GovMind',
    status: 'prototype',
    summary: {
      en: 'Prototype content generation tool. Included for completeness — it is an unfinished experiment, not a production system.',
      he: 'כלי ניסיוני ליצירת תוכן. מופיע לשם שלמות — זהו ניסוי לא גמור ולא מערכת production.',
    },
    engineering: [
      {
        en: 'Next.js application over MongoDB with a rich-text editing surface; never taken past prototype stage.',
        he: 'אפליקציית Next.js מעל MongoDB עם עורך טקסט עשיר; מעולם לא עברה את שלב הפרוטוטייפ.',
      },
    ],
    stack: ['Next.js', 'MongoDB', 'Clerk', 'TipTap'],
    images: ['/govmind1.png', '/govmind2.png', '/govmind3.png', '/govmind4.png', '/govmind5.png'],
    url: 'https://gov-mind.vercel.app/',
  },
];

/* ------------------------------------------------------------------ */
/* Skills — used technologies only. Nothing aspirational in this list.  */
/* ------------------------------------------------------------------ */

export const skills: Array<{ label: Bilingual; items: string[] }> = [
  {
    label: { en: 'Languages', he: 'שפות' },
    items: ['Python', 'TypeScript / JavaScript', 'SQL', 'Java', 'C#', 'C'],
  },
  {
    label: { en: 'Backend & Data', he: 'Backend ונתונים' },
    items: ['FastAPI', 'PostgreSQL', 'MongoDB', 'Firestore', 'Supabase', 'SQLite', 'REST APIs'],
  },
  {
    label: { en: 'Infrastructure & Cloud', he: 'תשתיות וענן' },
    items: [
      'Kubernetes / OpenShift',
      'Argo Workflows',
      'ArgoCD',
      'Docker',
      'AWS (Lambda, S3, Cognito, DynamoDB, CDK)',
      'Google Cloud / Firebase',
      'Cloudflare Workers',
      'Terraform',
      'GitHub Actions / GitLab CI',
    ],
  },
  {
    label: { en: 'Frontend', he: 'Frontend' },
    items: ['React', 'Next.js', 'Vite', 'Redux', 'Zustand', 'Tailwind CSS', 'React Native / Expo'],
  },
  {
    label: { en: 'AI & Automation', he: 'AI ואוטומציה' },
    items: ['Gemini API', 'ElevenLabs', 'Google TTS', 'Google Cloud Vision', 'Playwright pipelines'],
  },
];

/**
 * Explicitly separated from `skills`. These are subjects being studied, and the
 * UI labels them as such. Do not merge this list into `skills`.
 */
export const learning: Bilingual = {
  en: 'Distributed systems · Operating systems · Networking · Message queues (Kafka, RabbitMQ) · Database internals · System design',
  he: 'מערכות מבוזרות · מערכות הפעלה · רשתות · תורי הודעות (Kafka, RabbitMQ) · פנימיות מסדי נתונים · תכנון מערכות',
};

/* ------------------------------------------------------------------ */
/* Education                                                           */
/* ------------------------------------------------------------------ */

export const education = [
  {
    id: 'ort',
    degree: { en: 'Practical Software Engineer (Handesai)', he: 'הנדסאי תוכנה' },
    institution: { en: 'ORT Singalovsky College', he: 'מכללת אורט סינגלובסקי' },
    period: { en: '2024', he: '2024' },
    focus: {
      en: 'Software engineering, databases, cloud infrastructure and full-stack development.',
      he: 'הנדסת תוכנה, מסדי נתונים, תשתיות ענן ופיתוח full-stack.',
    },
  },
];
