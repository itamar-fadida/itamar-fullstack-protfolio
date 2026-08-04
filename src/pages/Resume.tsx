import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const experience = [
    {
      id: 2,
      title: 'Omdim Lenatzach — AI-Powered Memorial Platform',
      titleHe: 'עומדים לנצח — מערכת הנצחה מבוססת AI',
      company: 'CTO & Software Developer',
      companyHe: 'CTO ומפתח התוכנה',
      period: '2024 – Present',
      periodHe: '2024 – היום',
      description: 'Production system for a non-profit organization, with over 100 memorial boards created for fallen soldiers. Served as CTO, owning architecture, product delivery, and AI generation pipelines.',
      descriptionHe: 'מערכת ב-production עבור ארגון ללא מטרות רווח, עם מעל 100 לוחות זיכרון והנצחות לחיילים. עבדתי כ-CTO — אחריות על הארכיטקטורה, הפיתוח והשקת המערכת.',
      achievements: [
        'AI memorial boards: generation and live preview of boards before delivery to the requester',
        'Memorial video creation (Remotion) from user input — images, clips, and background music selection',
        'AI podcast narration: end-to-end voice generation pipeline with ElevenLabs',
        'Event-driven backend: Firebase Functions with Python processing pipelines for generation workflows',
        'Live in production: actively used by the organization for memorial creation'
      ],
      achievementsHe: [
        'יצירת לוחות זיכרון ב-AI והדמיה חיה שלהם לפני שהם מגיעים למבקש ההנצחה',
        'יצירת סרטוני הנצחה (Remotion) לפי קלט משתמש — תמונות, סרטונים ובחירת מוזיקת רקע',
        'הפקת פודקאסטים: pipeline קריינות מקצה לקצה באמצעות ElevenLabs',
        'Backend מונחה אירועים: Firebase Functions עם pipelines ב-Python לתהליכי יצירה',
        'מערכת חיה ב-production, בשימוש פעיל של הארגון'
      ]
    },
    {
      id: 1,
      title: 'Freelance',
      titleHe: 'Freelance',
      company: 'Independent Contractor',
      companyHe: 'עצמאי',
      period: '2023 – Present',
      periodHe: '2023 – היום',
      description: 'Building advanced production applications combining cloud infrastructure, AI models, automation logic, and scalable web systems.',
      descriptionHe: 'בניית אפליקציות ייצור מתקדמות המשלבות תשתית ענן, מודלים של AI, לוגיקת אוטומציה ומערכות web סקיילביליות.',
      achievements: [
        'Designed and built full AI-based applications with real users and revenue',
        'Developed highly modular architectures for web + backend + AI layers',
        'Delivered production-ready CI/CD workflows and cloud pipelines',
        'Supported clients end-to-end: UX, architecture, backend APIs, AI logic, deployment, and maintenance'
      ],
      achievementsHe: [
        'תכננתי ובניתי אפליקציות מבוססות AI עם משתמשים אמיתיים והכנסות',
        'פיתחתי ארכיטקטורות מודולריות ל-web + backend + שכבות AI',
        'הקמתי תהליכי CI/CD ו-pipelines ענן מוכנים לייצור',
        'תמכתי בלקוחות מקצה לקצה: UX, ארכיטקטורה, APIs backend, לוגיקת AI, השקה ותחזוקה'
      ]
    },
    {
      id: 3,
      title: 'AppsFlyer — Special-Needs Children Monitoring App',
      titleHe: 'AppsFlyer — מערכת לניטור ילדים עם צרכים מיוחדים',
      company: 'Development Team Lead & Lead Backend Developer',
      companyHe: 'ראש צוות פיתוח ומפתח Backend ראשי',
      period: '2024 (2 months)',
      periodHe: '2024 (חודשיים)',
      description: 'Hands-on industry experience during Practical Engineering studies: led a volunteer production project for AppsFlyer — a React Native monitoring app backed by a TypeScript Lambda backend.',
      descriptionHe: 'צבירת ניסיון במהלך לימודי ההנדסאי: עבודה בחברה על פרויקט התנדבותי ב-production — אפליקציית ניטור ב-React Native עם backend ב-TypeScript על AWS Lambda.',
      achievements: [
        'Led a team of 6 developers delivering a volunteer production project for AppsFlyer',
        'Built the mobile client with React Native, Expo, and TypeScript',
        'Owned the TypeScript Lambda backend — SMS delivery and Amazon Location Service for GPS tracking',
        'Integrated Google Calendar sync for caregiver scheduling and alerts'
      ],
      achievementsHe: [
        'הובלתי צוות של 6 מפתחים בפרויקט התנדבותי ב-production עבור AppsFlyer, כחלק מצבירת ניסיון בלימודי ההנדסאי',
        'פיתחתי את האפליקציה ב-React Native עם Expo ו-TypeScript',
        'בניתי את ה-backend ב-TypeScript על AWS Lambda — שליחת SMS ושימוש ב-Amazon Location Service לניטור מיקום',
        'שילבתי סנכרון ל-Google Calendar לתזמון והתראות למטפלים'
      ]
    }
  ];

  const idfExperience = {
    id: 4,
    title: 'Software Engineer',
    titleHe: 'מהנדס תוכנה',
    company: 'IDF — Intelligence & Technology Division, Unit 81',
    companyHe: 'צה"ל — אגף המודיעין והטכנולוגיה, יחידה 81',
    period: '2024 - Present',
    periodHe: '2024 – היום',
    description: 'Developed web systems and automations, along with data-processing pipelines on Argo Workflows.',
    descriptionHe: 'פיתחתי מערכות web ואוטומציות, יחד עם pipelines לעיבוד מידע ב-Argo Workflows.',
    achievements: [
      'Built full-stack interfaces with React, Vite, Redux, and Zustand, organized into reusable modular components',
      'Implemented backend microservices with Python, FastAPI, MongoDB, PostgreSQL, and secure APIs',
      'Designed automation workflows and internal tooling pipelines using Argo Workflows, ArgoCD, OpenShift, and CI/CD'
    ],
    achievementsHe: [
      'בניתי ממשקים ב-React ו-Vite עם Redux ו-Zustand לניהול state, ומבנה רכיבים מודולרי לשימוש חוזר',
      'יישמתי micro-services ב-Python ו-FastAPI עם MongoDB ו-PostgreSQL, וממשקי API מאובטחים',
      'תכננתי תהליכי אוטומציה ו-pipelines פנימיים עם Argo Workflows, ArgoCD, OpenShift ו-CI/CD'
    ]
  };

  const education = [
    {
      id: 1,
      degree: 'Practical Software Engineer',
      degreeHe: 'הנדסאי תוכנה',
      institution: 'ORT Singalovsky College',
      institutionHe: 'מכללת אורט סינגאלובסקי',
      period: '2024',
      focus: 'Full-Stack Development, Cloud Infrastructure, Database Design, and Applied AI Systems',
      focusHe: 'פיתוח Full-Stack, תשתית ענן, עיצוב מסדי נתונים ומערכות AI יישומיות'
    }
  ];

  const skills = {
    'Frontend': {
      name: 'Frontend',
      nameHe: 'פיתוח חזית',
      items: ['React Vite', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN', 'Redux', 'Zustand', 'React Native', 'Expo'],
    },
    'Backend': {
      name: 'Backend',
      nameHe: 'פיתוח שרת',
      items: ['AWS (Cognito, S3, Lambda, DynamoDB, CloudFront, Amplify, CDK)', 'Firebase (Auth, Firestore, Cloud Functions)', 'Supabase (SQL, Storage)', 'MongoDB', 'FastAPI', 'Serverless Architecture'],
    },
    'DevOps': {
      name: 'DevOps',
      nameHe: 'DevOps',
      items: ['Docker', 'Kubernetes (K8s)', 'GitHub Actions CI/CD', 'GitLab CI/CD', 'Cloudflare (Workers, Pages, R2)', 'OpenShift', 'ArgoCD', 'Argo Workflows', 'AWS Step Functions + Lambda Pipelines', 'AWS CDK', 'Terraform'],
    },
    'AI': {
      name: 'AI Automations & Integrations',
      nameHe: 'אוטומציות עם אינטגרציה ל-AI',
      items: ['TTS', 'Gemini API', 'Google Cloud Vision', 'Google Search', 'Playwright Automation Pipelines', 'AI Data Processing Pipelines'],
    },
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text('ITAMAR FADIDA', 105, 20, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text('Full-Stack Engineer & AI Systems Developer', 105, 30, { align: 'center' });
    
    doc.setFontSize(11);
    doc.text('Email: itamar.fullstack@gmail.com', 105, 38, { align: 'center' });
    
    // Professional Summary
    doc.setFontSize(14);
    doc.text('PROFESSIONAL SUMMARY', 20, 50);
    doc.setFontSize(10);
    const summary = "I'm a Full-Stack engineer specializing in building Web systems and the core of complex AI systems. My strengths include designing stable architecture, developing advanced user interfaces, building Serverless Backend processes, and creating AI software that integrates GPT, Gemini, and ElevenLabs into real end products. I approach every project with Precision Engineering: accurate specification, division into clear development units, building scalable infrastructure, and Production-Ready launch.";
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.text(summaryLines, 20, 58);
    
    let yPos = 58 + (summaryLines.length * 5) + 10;
    
    // Experience
    doc.setFontSize(14);
    doc.text('PROFESSIONAL EXPERIENCE', 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    const allExperience = [idfExperience, ...experience];
    allExperience.forEach((job) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(job.title, 20, yPos);
      doc.setFont('helvetica', 'normal');
      yPos += 5;
      doc.text(`${job.company} | ${job.period}`, 20, yPos);
      yPos += 5;
      const descLines = doc.splitTextToSize(job.description, 170);
      doc.text(descLines, 20, yPos);
      yPos += (descLines.length * 5);
      
      if (job.achievements) {
        job.achievements.forEach((achievement) => {
          if (yPos > 270) {
            doc.addPage();
            yPos = 20;
          }
          yPos += 4;
          const achLines = doc.splitTextToSize(`- ${achievement}`, 165);
          doc.text(achLines, 25, yPos);
          yPos += (achLines.length * 4);
        });
      }
      yPos += 5;
    });
    
    // Education
    yPos += 5;
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(14);
    doc.text('EDUCATION', 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    education.forEach((edu) => {
      if (yPos > 270) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(edu.degree, 20, yPos);
      doc.setFont('helvetica', 'normal');
      yPos += 5;
      doc.text(`${edu.institution} | ${edu.period}`, 20, yPos);
      yPos += 5;
      const focusText = `Focus: ${edu.focus}`;
      const focusLines = doc.splitTextToSize(focusText, 170);
      doc.text(focusLines, 20, yPos);
      yPos += (focusLines.length * 5) + 8;
    });
    
    // Skills
    yPos += 5;
    if (yPos > 200) {
      doc.addPage();
      yPos = 20;
    }
    doc.setFontSize(14);
    doc.text('SKILLS', 20, yPos);
    yPos += 8;
    
    doc.setFontSize(10);
    Object.values(skills).forEach((category) => {
      if (yPos > 260) {
        doc.addPage();
        yPos = 20;
      }
      doc.setFont('helvetica', 'bold');
      doc.text(`${category.name}:`, 20, yPos);
      doc.setFont('helvetica', 'normal');
      yPos += 5;
      const skillsText = category.items.join(', ');
      const skillLines = doc.splitTextToSize(skillsText, 170);
      doc.text(skillLines, 20, yPos);
      yPos += (skillLines.length * 5) + 3;
    });
    
    // Save
    doc.save('Itamar_Fadida_Resume.pdf');
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-dark-800 dark:text-white mb-4">
            {t('resume.title')}
          </h1>
          <p className="text-lg text-dark-600 dark:text-dark-400 mb-6">
            itamar.fullstack@gmail.com
          </p>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse px-6 py-3 gradient-brand text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{t('resume.download')}</span>
          </button>
        </motion.div>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-6 h-6 text-brand-500 dark:text-brand-400" />
            <h2 className="text-3xl font-bold font-display text-dark-800 dark:text-white">
              {t('resume.experience')}
            </h2>
          </div>
          <div className="space-y-6">
            {[idfExperience, ...experience].map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold font-display text-dark-800 dark:text-white">
                    {isHebrew ? job.titleHe : job.title}
                  </h3>
                  <span className="text-sm text-dark-500 dark:text-dark-400 mt-1 sm:mt-0">
                    {isHebrew ? job.periodHe : job.period}
                  </span>
                </div>
                <p className="text-brand-500 dark:text-brand-400 font-medium mb-2">
                  {isHebrew ? job.companyHe : job.company}
                </p>
                <p className="text-dark-600 dark:text-dark-300 mb-3">
                  {isHebrew ? job.descriptionHe : job.description}
                </p>
                {job.achievements && (
                  <ul className="space-y-1 mt-3">
                    {(isHebrew ? job.achievementsHe : job.achievements)?.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-dark-600 dark:text-dark-400 flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-6 h-6 text-brand-500 dark:text-brand-400" />
            <h2 className="text-3xl font-bold font-display text-dark-800 dark:text-white">
              {t('resume.education')}
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold font-display text-dark-800 dark:text-white">
                    {isHebrew ? edu.degreeHe : edu.degree}
                  </h3>
                  <span className="text-sm text-dark-500 dark:text-dark-400 mt-1 sm:mt-0">
                    {edu.period}
                  </span>
                </div>
                <p className="text-brand-500 dark:text-brand-400 font-medium mb-2">
                  {isHebrew ? edu.institutionHe : edu.institution}
                </p>
                <p className="text-dark-600 dark:text-dark-300">
                  <span className="font-semibold">{isHebrew ? 'התמחות' : 'Focus'}:</span> {isHebrew ? edu.focusHe : edu.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Code className="w-6 h-6 text-brand-500 dark:text-brand-400" />
            <h2 className="text-3xl font-bold font-display text-dark-800 dark:text-white">
              {t('resume.skills')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.values(skills).map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold font-display text-dark-800 dark:text-white mb-4">
                  {isHebrew ? category.nameHe : category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-sm font-medium bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-300 rounded-lg border border-brand-200 dark:border-brand-800"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Resume;
