import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  ImageIcon,
  Mic,
  Cloud,
  Bot,
  Flame,
  FileText,
  Palette,
  Database,
  Edit,
  LayoutDashboard,
  AlertCircle,
  BookOpen,
  Languages,
  Shield,
  Search,
  Eye,
  Lock,
  Library,
  HardDrive,
  MessageSquarePlus,
  GraduationCap,
  SearchCheck,
  Smartphone,
  WifiOff,
  Share2,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  titleHe: string;
  description: string;
  descriptionHe: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  isProduction?: boolean;
  isPrototype?: boolean;
  features: Array<{ icon: any; text: string; textHe: string }>;
}

const Projects = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === "he";

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "Omdim Lenatzach",
      titleHe: "עומדים לנצח",
      description:
        "AI-powered memorial platform in production for a non-profit — over 100 memorial boards created for fallen soldiers.",
      descriptionHe:
        "מערכת הנצחה מבוססת AI ב-production עבור ארגון ללא מטרות רווח — מעל 100 לוחות זיכרון לחיילים.",
      images: [
        "/fes1.png",
        "/fes2.png",
        "/fes3.png",
        "/fes4.png",
        "/fes5.png",
        "/fes6.png",
      ],
      technologies: [
        "React",
        "Firebase",
        "Google Cloud",
        "Python",
        "ElevenLabs",
        "Gemini",
        "Remotion",
      ],
      liveUrl: "https://omdimlanetzach.co.il/",
      isProduction: true,
      features: [
        {
          icon: ImageIcon,
          text: "AI memorial boards with live preview before delivery",
          textHe: "יצירת לוחות זיכרון ב-AI והדמיה חיה לפני שהם מגיעים למבקש ההנצחה",
        },
        {
          icon: Video,
          text: "Memorial videos with Remotion — images, clips, and background music",
          textHe: "סרטוני הנצחה עם Remotion — תמונות, סרטונים ומוזיקת רקע",
        },
        {
          icon: Mic,
          text: "AI podcast narration pipeline with ElevenLabs",
          textHe: "הפקת פודקאסטים: pipeline קריינות עם ElevenLabs",
        },
        {
          icon: Cloud,
          text: "Event-driven backend: Firebase Functions + Python pipelines",
          textHe: "Backend מונחה אירועים: Firebase Functions עם pipelines ב-Python",
        },
        {
          icon: Bot,
          text: "AI-powered text generation with Gemini",
          textHe: "יצירת טקסטים מבוססת Gemini",
        },
        {
          icon: Flame,
          text: "Live in production — used by the organization for memorial creation",
          textHe: "מערכת חיה ב-production בשימוש הארגון",
        },
      ],
    },
    {
      id: 3,
      title: "Daily Halacha Learning",
      titleHe: "הלימוד היומי בהלכה",
      description:
        "Production platform for daily Halacha study — bilingual HE/EN, book access control, Firebase content, and TTS audio lessons.",
      descriptionHe:
        "פלטפורמה ב-production ללימוד הלכה יומי — תמיכה בעברית ואנגלית, ניהול הרשאות לספרים, תוכן ב-Firebase, והקראה קולית (TTS).",
      images: ["/halacha1.png", "/halacha2.png", "/halacha3.png", "/halacha4.png"],
      technologies: [
        "React",
        "Firebase",
        "Firestore",
        "Python",
        "Google TTS",
        "i18n (HE/EN)",
        "Vercel",
      ],
      liveUrl: "https://limod-halacha-yomi.vercel.app/he",
      isProduction: true,
      features: [
        {
          icon: Languages,
          text: "Full Hebrew & English support with RTL/LTR",
          textHe: "תמיכה מלאה בעברית ואנגלית עם RTL/LTR",
        },
        {
          icon: BookOpen,
          text: "Daily learning flow by book and study day",
          textHe: "מסלול לימוד יומי לפי ספר ויום לימוד",
        },
        {
          icon: Mic,
          text: "Google TTS audio playback for daily lessons",
          textHe: "הקראה קולית של השיעורים עם Google TTS",
        },
        {
          icon: FileText,
          text: "Transcription pipelines for the rabbi's books (Python)",
          textHe: "תמלול ספרי הרב עם pipelines ב-Python",
        },
        {
          icon: Shield,
          text: "Admin panel to grant book permissions per user",
          textHe: "עמוד מנהלים לנתינת הרשאות לספרים לפי משתמשים",
        },
        {
          icon: Database,
          text: "Firebase Auth + Firestore for users, content, and access",
          textHe: "Firebase Auth + Firestore למשתמשים, תוכן והרשאות",
        },
      ],
    },
    {
      id: 4,
      title: "AI Collection Enrichment Automation",
      titleHe: "אוטומציית העשרת מידע לאוספים",
      description:
        "Local private automation that searches the web for matching items, scores candidates with Gemini + Cloud Vision, and presents reasoned match results.",
      descriptionHe:
        "תוכנת אוטומציה מקומית לשימוש פרטי — סורקת אתרים לפי חיפוש המשתמש, מאתרת התאמות עם Gemini ו-Cloud Vision, ומציגה מועמדים עם נימוקים.",
      images: ["/automation1.png", "/automation2.png"],
      technologies: [
        "Playwright",
        "Google Gemini",
        "Google Cloud Vision",
        "Google Search",
        "Python",
      ],
      isPrototype: false,
      features: [
        {
          icon: Search,
          text: "Automated web search against queried collection items",
          textHe: "חיפוש אוטומטי ברשת לפי פריטים שהמשתמש חיפש",
        },
        {
          icon: Eye,
          text: "Google Cloud Vision + Gemini for visual/text match analysis",
          textHe: "ניתוח התאמות עם Google Cloud Vision ו-Gemini",
        },
        {
          icon: Bot,
          text: "AI reasoning, confidence scores, and candidate review UI",
          textHe: "נימוקי AI, ציוני ביטחון וממשק לבחינת מועמדים",
        },
        {
          icon: Cloud,
          text: "Playwright scraping pipelines for source pages",
          textHe: "pipelines לסריקת אתרים עם Playwright",
        },
        {
          icon: Lock,
          text: "Local desktop tool for private / internal use",
          textHe: "תוכנה מקומית לשימוש פרטי",
        },
      ],
    },
    {
      id: 5,
      title: "Torah Lessons — Lishma",
      titleHe: "שיעורי תורה - לשמה",
      description:
        "Free open catalog of recorded Torah series for listening and download — organized by rabbi and topic, with Google Drive storage.",
      descriptionHe:
        "אוסף חופשי של סדרות שיעורי תורה מוקלטים להאזנה ולהורדה — מסודר לפי רב ונושא, עם אחסון ב-Google Drive.",
      images: ["/torah1.png", "/torah2.png", "/torah3.png", "/torah4.png"],
      technologies: [
        "React",
        "Cloudflare Workers",
        "Cloudflare Turnstile",
        "Supabase",
        "Playwright",
        "Google Drive API",
      ],
      liveUrl: "https://torah-series.torah-lishma-official.workers.dev/",
      isProduction: true,
      features: [
        {
          icon: Library,
          text: "360+ series / 10,000+ lessons catalog with search and filters",
          textHe: "קטלוג של מאות סדרות ואלפי שיעורים עם חיפוש וסינון",
        },
        {
          icon: HardDrive,
          text: "Lessons stored on Google Drive — stream or download offline",
          textHe: "שיעורים ב-Google Drive — האזנה ישירה או הורדה ללא אינטרנט",
        },
        {
          icon: Cloud,
          text: "Playwright scraping pipelines to collect and update lesson series",
          textHe: "pipelines עם Playwright לסריקה ועדכון סדרות שיעורים",
        },
        {
          icon: Database,
          text: "Supabase backend for series metadata, rabbis, and topics",
          textHe: "Backend ב-Supabase למטא-דאטה של סדרות, רבנים ונושאים",
        },
        {
          icon: MessageSquarePlus,
          text: "Request / report flow to add series or flag broken links",
          textHe: "עמוד בקשה ודיווח להוספת סדרה או דיווח על תקלה",
        },
        {
          icon: Flame,
          text: "Free and open for listening, download, and sharing",
          textHe: "פתוח לכולם, בחינם, וניתן להפצה",
        },
      ],
    },
    {
      id: 6,
      title: "Le'ovdecha Be'emet — Yeshiva Landing Page",
      titleHe: "לעבדך באמת — דף נחיתה לישיבה",
      description:
        "Marketing landing page for a new yeshiva — built with Astro on Vercel for fast load and strong SEO.",
      descriptionHe:
        "דף נחיתה לפרסום ישיבה חדשה — נבנה ב-Astro על Vercel לטעינה מהירה ו-SEO חזק.",
      images: ["/yeshiva1.png", "/yeshiva2.png", "/yeshiva3.png"],
      technologies: ["Astro", "Vercel", "SEO-focused UI"],
      liveUrl: "https://leovdeah-bemet.vercel.app/",
      isProduction: true,
      features: [
        {
          icon: GraduationCap,
          text: "Yeshiva marketing page — registration CTA, staff, lessons, and FAQ",
          textHe: "דף פרסום לישיבה — הרשמה, צוות, שיעורים ושאלות נפוצות",
        },
        {
          icon: SearchCheck,
          text: "Astro static UI optimized for SEO and Core Web Vitals",
          textHe: "ממשק Astro סטטי מותאם ל-SEO ולביצועי טעינה",
        },
        {
          icon: Cloud,
          text: "Deployed on Vercel for global CDN delivery",
          textHe: "פריסה ב-Vercel עם CDN גלובלי",
        },
        {
          icon: BookOpen,
          text: "Published books and content sections for the Rosh Yeshiva",
          textHe: "סקשנים לספרי ראש הישיבה ותכני הישיבה",
        },
      ],
    },
    {
      id: 7,
      title: "English Vocabulary — Offline Learning App",
      titleHe: "אפליקציית לימוד אנגלית — Offline",
      description:
        "Local Expo React Native app for learning English — SQLite offline storage, Gemini translations, spaced practice, and sharing word collections with friends.",
      descriptionHe:
        "אפליקציית Expo React Native ללימוד אנגלית — אחסון מקומי ב-SQLite, תרגום משפטים עם Gemini, תרגול מרווח, ושיתוף אוספי מילים עם חברים.",
      images: [
        "/english1.png",
        "/english2.png",
        "/english3.png",
        "/english4.png",
      ],
      technologies: [
        "Expo",
        "React Native",
        "SQLite",
        "Gemini API",
        "TypeScript",
      ],
      features: [
        {
          icon: Smartphone,
          text: "Flashcard creation from English words/phrases with Gemini enrichment",
          textHe: "יצירת כרטיסי מילים מביטויים באנגלית עם העשרה מ-Gemini",
        },
        {
          icon: Bot,
          text: "Sentence translation and learning assistance via Gemini API",
          textHe: "תרגום משפטים ועזרה בלימוד באמצעות Gemini API",
        },
        {
          icon: WifiOff,
          text: "Fully local SQLite storage — works offline",
          textHe: "אחסון מקומי ב-SQLite — עובד גם ללא אינטרנט",
        },
        {
          icon: Share2,
          text: "Share word collections with friends",
          textHe: "שיתוף אוספי מילים עם חברים",
        },
        {
          icon: LayoutDashboard,
          text: "Practice mode, mastery tracking, streaks, and progress analytics",
          textHe: "מצב תרגול, שליטה במילים, רצפים וניתוח התקדמות",
        },
      ],
    },
    {
      id: 2,
      title: "GovMind",
      titleHe: "GovMind",
      description:
        "Jasper-Style AI Content Generator — A prototype system currently in development.",
      descriptionHe:
        "מערכת יצירת תוכן AI בסגנון Jasper — פרוטוטייפ בתהליך פיתוח.",
      images: [
        "/govmind1.png",
        "/govmind2.png",
        "/govmind3.png",
        "/govmind4.png",
        "/govmind5.png",
      ],
      technologies: [
        "Next.js",
        "React",
        "TailwindCSS",
        "MongoDB",
        "Clerk Auth",
        "TipTap",
      ],
      liveUrl: "https://gov-mind.vercel.app/",
      isPrototype: true,
      features: [
        {
          icon: FileText,
          text: "Experimental AI Content Generation System",
          textHe: "מערכת ניסיונית ליצירת תוכן AI",
        },
        {
          icon: Palette,
          text: "Marketing Templates",
          textHe: "טמפלטים שיווקיים",
        },
        {
          icon: Database,
          text: "MongoDB Data Storage",
          textHe: "שמירה ב-MongoDB",
        },
        {
          icon: Edit,
          text: "TipTap Rich Text Editor",
          textHe: "עורך טקסט TipTap",
        },
        {
          icon: LayoutDashboard,
          text: "Basic Project Dashboard",
          textHe: "דשבורד פרויקטים בסיסי",
        },
        {
          icon: AlertCircle,
          text: "Prototype — Not a finished product",
          textHe: "פרוטוטייפ — לא מוצר מוגמר",
        },
      ],
    },
  ];

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-dark-800 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-dark-50 dark:from-dark-800 dark:to-dark-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-dark-200 dark:border-dark-700 h-full flex flex-col">
                {/* Image Carousel */}
                <div className="relative h-80 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex[project.id] || 0}
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={isHebrew ? project.titleHe : project.title}
                      className="w-full h-full object-contain bg-dark-100 dark:bg-dark-950"
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Carousel Controls */}
                  {project.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          prevImage(project.id, project.images.length)
                        }
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-500/80 text-white p-2 rounded-full transition-all"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                          />
                        </svg>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          nextImage(project.id, project.images.length)
                        }
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-brand-500/80 text-white p-2 rounded-full transition-all"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.button>
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full">
                        {project.images.map((_, idx) => (
                          <motion.button
                            key={idx}
                            whileHover={{ scale: 1.2 }}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [project.id]: idx,
                              }))
                            }
                            className={`h-2 rounded-full transition-all ${
                              idx === (currentImageIndex[project.id] || 0)
                                ? "bg-brand-400 w-4"
                                : "bg-white/50 w-2"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold font-display text-white mb-1">
                      {isHebrew ? project.titleHe : project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-dark-600 dark:text-dark-300 mb-4 text-base leading-relaxed">
                    {isHebrew ? project.descriptionHe : project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold font-display text-dark-800 dark:text-white mb-3 uppercase tracking-wide">
                      {isHebrew ? "תכונות עיקריות" : "Key Features"}
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="text-sm text-dark-600 dark:text-dark-400 flex items-start gap-2"
                          >
                            <Icon className="w-4 h-4 text-brand-500 mt-0.5 flex-shrink-0" />
                            <span>
                              {isHebrew ? feature.textHe : feature.text}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold font-display text-dark-800 dark:text-white mb-3 uppercase tracking-wide">
                      {isHebrew ? "טכנולוגיות" : "Tech Stack"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 text-xs font-medium bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 rounded-full border border-brand-200 dark:border-brand-800"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <div className="mt-auto">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full text-center px-6 py-3 gradient-brand text-white rounded-xl transition-all duration-300 text-sm font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                      >
                        {isHebrew ? "בקר באתר" : "Visit Site"}
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-dark-100 to-dark-50 dark:from-dark-800 dark:to-dark-900 rounded-xl p-6 border border-dark-200 dark:border-dark-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg
                className="w-5 h-5 text-dark-500 dark:text-dark-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <p className="text-sm font-semibold text-dark-700 dark:text-dark-300">
                {isHebrew ? "פרויקטים נוספים" : "Additional Projects"}
              </p>
            </div>
            <p className="text-sm text-dark-600 dark:text-dark-400 leading-relaxed">
              {isHebrew
                ? "קיימים פרויקטים פנימיים וסודיים נוספים שאינם זמינים לציבור. חלקם משמשים בסביבות ייצור פרטיות ולא ניתן לשתף אותם."
                : "Additional internal and classified projects exist but are not publicly available. Some are used in private production environments and cannot be shared."}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
