import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.';
  if (!values.message.trim()) {
    errors.message = 'Please write a message.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Wire this up to your email service, form backend, or API route.
    setStatus('submitting');
    setTimeout(() => {
      setStatus('sent');
      setValues(initialState);
    }, 900);
  };

  const fieldClasses = (field: keyof FormState) =>
    `w-full rounded-xl border bg-base-surface/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 focus:outline-none focus:border-violet-soft/60 ${
      errors[field] ? 'border-red-400/50' : 'border-line'
    }`;

  if (status === 'sent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="card-surface flex flex-col items-center gap-3 p-10 text-center"
      >
        <CheckCircle2 className="text-signal" size={36} />
        <h3 className="font-display text-xl font-semibold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm text-ink-muted">
          Thanks for reaching out — replace this handler with your form backend or email service
          to actually deliver messages.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-2 text-sm font-medium text-violet-soft hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface flex flex-col gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium text-ink-muted">
            Name
          </label>
          <input
            id="name"
            value={values.name}
            onChange={handleChange('name')}
            placeholder="Your name"
            className={fieldClasses('name')}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle size={12} /> {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium text-ink-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
            placeholder="you@example.com"
            className={fieldClasses('email')}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-xs font-medium text-ink-muted">
          Subject
        </label>
        <input
          id="subject"
          value={values.subject}
          onChange={handleChange('subject')}
          placeholder="What's this about?"
          className={fieldClasses('subject')}
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? 'subject-error' : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
            <AlertCircle size={12} /> {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={handleChange('message')}
          placeholder="Tell me a bit about the project or opportunity..."
          className={`${fieldClasses('message')} resize-none`}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 flex items-center gap-1 text-xs text-red-400">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={status === 'submitting'}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-text-gradient px-6 py-3.5 text-sm font-semibold text-base shadow-glow-sm transition-shadow hover:shadow-glow disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
        {status !== 'submitting' && <Send size={15} />}
      </motion.button>
    </form>
  );
}
