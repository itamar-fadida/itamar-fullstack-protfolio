import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, ImageIcon, Mic, Cloud, Bot, CreditCard, Flame, FileText, Palette, Database, Edit, LayoutDashboard, AlertCircle } from 'lucide-react';

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
  const isHebrew = i18n.language === 'he';
  
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: 'Omdim Lenatzach',
      titleHe: 'עומדים לנצח',
      description: 'AI-Based Memorial Creation System — A commercial production product with real paying users.',
      descriptionHe: 'מערכת הנצחה מבוססת AI — מוצר מסחרי פעיל עם משתמשים אמיתיים משלמים.',
      images: ['/fes1.png', '/fes2.png', '/fes3.png', '/fes4.png', '/fes5.png', '/fes6.png'],
      technologies: ['React', 'Firebase', 'Google Cloud', 'Python', 'ElevenLabs', 'GPT-4', 'Gemini', 'PayPal'],
      liveUrl: 'https://omdimlanetzach.co.il/',
      isProduction: true,
      features: [
        { icon: Video, text: 'AI Video Generation — Transform images into memorial videos with music', textHe: 'יצירת סרטון AI מלא — תמונות הופכות לסרטון הנצחה עם מוזיקה' },
        { icon: ImageIcon, text: 'Automated AI Poster Creation', textHe: 'יצירת פוסטרים אוטומטית עם AI' },
        { icon: Mic, text: 'Memorial Podcast Generation with ElevenLabs', textHe: 'יצירת פודקאסט הנצחה עם ElevenLabs' },
        { icon: Cloud, text: 'Full Cloud Workflow: Upload → Process → Generate', textHe: 'תהליך מלא בענן: העלאה → עיבוד → יצירה' },
        { icon: Bot, text: 'AI-Powered Text Generation (GPT/Gemini)', textHe: 'טקסטים מבוססי GPT/Gemini' },
        { icon: CreditCard, text: 'PayPal Payment Integration', textHe: 'אינטגרציית תשלומים עם PayPal' },
        { icon: Flame, text: 'Real production product with paying customers', textHe: 'מוצר אמיתי בייצור עם לקוחות משלמים' },
      ],
    },
    {
      id: 2,
      title: 'GovMind',
      titleHe: 'GovMind',
      description: 'Jasper-Style AI Content Generator — A prototype system currently in development.',
      descriptionHe: 'מערכת יצירת תוכן AI בסגנון Jasper — פרוטוטייפ בתהליך פיתוח.',
      images: ['/govmind1.png', '/govmind2.png', '/govmind3.png', 'govmind4.png', 'govmind5.png'],
      technologies: ['Next.js', 'React', 'TailwindCSS', 'MongoDB', 'Clerk Auth', 'TipTap', 'GPT-4o'],
      liveUrl: 'https://gov-mind.vercel.app/',
      isPrototype: true,
      features: [
        { icon: FileText, text: 'Experimental AI Content Generation System', textHe: 'מערכת ניסיונית ליצירת תוכן AI' },
        { icon: Palette, text: 'Marketing Templates', textHe: 'טמפלטים שיווקיים' },
        { icon: Database, text: 'MongoDB Data Storage', textHe: 'שמירה ב-MongoDB' },
        { icon: Edit, text: 'TipTap Rich Text Editor', textHe: 'עורך טקסט TipTap' },
        { icon: LayoutDashboard, text: 'Basic Project Dashboard', textHe: 'דשבורד פרויקטים בסיסי' },
        { icon: AlertCircle, text: 'Prototype — Not a finished product', textHe: 'פרוטוטייפ — לא מוצר מוגמר' },
      ],
    },
  ];

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % totalImages,
    }));
  };

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + totalImages) % totalImages,
    }));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 h-full flex flex-col">
                {/* Image Carousel - BIGGER */}
                <div className="relative h-80 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex[project.id] || 0}
                      src={project.images[currentImageIndex[project.id] || 0]}
                      alt={isHebrew ? project.titleHe : project.title}
                      className="w-full h-full object-contain bg-gray-100 dark:bg-gray-950"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Carousel Controls */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.id, project.images.length)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={() => nextImage(project.id, project.images.length)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-2 rounded-full">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: idx }))}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === (currentImageIndex[project.id] || 0)
                                ? 'bg-white w-4'
                                : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 rtl:left-4 rtl:right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {isHebrew ? project.titleHe : project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
                    {isHebrew ? project.descriptionHe : project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      {isHebrew ? 'תכונות עיקריות' : 'Key Features'}
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 4).map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                          <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <Icon className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span>{isHebrew ? feature.textHe : feature.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                      {isHebrew ? 'טכנולוגיות' : 'Tech Stack'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800"
                        >
                          {tech}
                        </span>
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
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all text-sm font-semibold shadow-lg hover:shadow-xl"
                      >
                        {isHebrew ? 'בקר באתר' : 'Visit Site'}
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
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-center gap-2 mb-2">
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {isHebrew ? 'פרויקטים נוספים' : 'Additional Projects'}
              </p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {isHebrew 
                ? 'קיימים פרויקטים פנימיים וסודיים נוספים שאינם זמינים לציבור. חלקם משמשים בסביבות ייצור פרטיות ולא ניתן לשתף אותם.'
                : 'Additional internal and classified projects exist but are not publicly available. Some are used in private production environments and cannot be shared.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
