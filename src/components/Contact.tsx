import { useState, FormEvent, ChangeEvent } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle, Github, Linkedin, Loader2, Mail } from 'lucide-react';
import { links } from '../data/profile';
import { useLang } from '../hooks/useLang';

interface FormData {
  name: string;
  email: string;
  message: string;
}
type FormErrors = Partial<Record<keyof FormData, string>>;

const Contact = () => {
  const { t, isHebrew } = useLang();

  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!formData.name.trim()) {
      next.name = isHebrew ? 'שדה חובה' : 'Required';
    } else if (formData.name.trim().length < 2) {
      next.name = isHebrew ? 'לפחות 2 תווים' : 'At least 2 characters';
    }

    if (!formData.email.trim()) {
      next.email = isHebrew ? 'שדה חובה' : 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = isHebrew ? 'כתובת לא תקינה' : 'Invalid email address';
    }

    if (!formData.message.trim()) {
      next.message = isHebrew ? 'שדה חובה' : 'Required';
    } else if (formData.message.trim().length < 10) {
      next.message = isHebrew ? 'לפחות 10 תווים' : 'At least 10 characters';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatus('error');
        setErrorMessage(data.error || t('contact.error'));
      }
    } catch {
      setStatus('error');
      setErrorMessage(t('contact.error'));
    } finally {
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const field =
    'w-full rounded-md border border-line bg-page px-3 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent disabled:opacity-60';
  const fieldError = 'border-red-500 focus:border-red-500';

  const directLinks = [
    { key: 'email', label: links.email, href: `mailto:${links.email}`, icon: Mail },
    links.github ? { key: 'github', label: 'GitHub', href: links.github, icon: Github } : null,
    links.linkedin
      ? { key: 'linkedin', label: 'LinkedIn', href: links.linkedin, icon: Linkedin }
      : null,
  ].filter(Boolean) as Array<{ key: string; label: string; href: string; icon: typeof Mail }>;

  return (
    <section id="contact" className="scroll-mt-20 border-t border-line py-14 sm:py-20">
      <div className="mx-auto w-full max-w-page px-5 sm:px-8">
        <h2 className="eyebrow mb-8">{t('sections.contact')}</h2>

        <div className="grid gap-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16">
          <div>
            <ul className="space-y-3">
              {directLinks.map(({ key, label, href, icon: Icon }) => (
                <li key={key}>
                  <a
                    href={href}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent"
                  >
                    <Icon className="h-4 w-4 text-faint" aria-hidden />
                    <span className="break-all">{label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-faint" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} noValidate className="max-w-xl space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  aria-invalid={!!errors.name}
                  className={`${field} ${errors.name ? fieldError : ''}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  aria-invalid={!!errors.email}
                  className={`${field} ${errors.email ? fieldError : ''}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                aria-invalid={!!errors.message}
                className={`${field} resize-y ${errors.message ? fieldError : ''}`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary disabled:opacity-60"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                  {t('contact.sending')}
                </>
              ) : (
                t('contact.send')
              )}
            </button>

            <p aria-live="polite" className="min-h-[1.25rem] text-sm">
              {status === 'success' && (
                <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="h-4 w-4" aria-hidden />
                  {t('contact.success')}
                </span>
              )}
              {status === 'error' && (
                <span className="inline-flex items-center gap-2 text-red-600">
                  <AlertCircle className="h-4 w-4" aria-hidden />
                  {errorMessage || t('contact.error')}
                </span>
              )}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
