import { useState, FormEvent, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact = () => {
  const { t, i18n } = useTranslation();
  const isHebrew = i18n.language === 'he';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = isHebrew ? 'שם מלא הוא שדה חובה' : 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = isHebrew ? 'שם חייב להכיל לפחות 2 תווים' : 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = isHebrew ? 'אימייל הוא שדה חובה' : 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = isHebrew ? 'כתובת אימייל לא תקינה' : 'Invalid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = isHebrew ? 'הודעה היא שדה חובה' : 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = isHebrew ? 'הודעה חייבת להכיל לפחות 10 תווים' : 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || (isHebrew ? 'שגיאה בשליחת ההודעה' : 'Failed to send message'));
        
        // Reset error after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setErrorMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(isHebrew ? 'שגיאה בחיבור לשרת' : 'Failed to connect to server');
      
      // Reset error after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-50 to-dark-100 dark:from-dark-900 dark:to-dark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold font-display text-dark-800 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400">
            {t('contact.description')}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-8"
        >
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-dark-300 dark:border-dark-600 focus:ring-brand-500 dark:focus:ring-brand-400'
                } bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:ring-2 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === 'sending'}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-dark-300 dark:border-dark-600 focus:ring-brand-500 dark:focus:ring-brand-400'
                } bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:ring-2 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === 'sending'}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-dark-300 dark:border-dark-600 focus:ring-brand-500 dark:focus:ring-brand-400'
                } bg-white dark:bg-dark-900 text-dark-800 dark:text-white focus:ring-2 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-4 gradient-brand text-white rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {t('contact.send')}
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                {t('contact.success')}
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-lg text-center flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-5 h-5" />
                {errorMessage || t('contact.error')}
              </motion.div>
            )}
          </div>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <button
            onClick={() => {
              window.open(
                `https://mail.google.com/mail/?view=cm&to=itamar.fullstack@gmail.com&su=${encodeURIComponent(isHebrew ? 'יצירת קשר' : 'Contact Request')}`,
                "_blank"
              );
            }}
            className="bg-red-500 text-white px-8 py-4 rounded-full transition-all duration-300 border-2 border-red-600 flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
            <span className="font-semibold">itamar.fullstack@gmail.com</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
