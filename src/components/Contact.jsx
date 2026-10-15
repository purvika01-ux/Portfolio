import React, { useState } from 'react'
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Icon } from './Icons'

const channels = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: 'linkedin', label: 'LinkedIn', value: 'purvika-jain', href: profile.linkedin, external: true },
  { icon: 'github', label: 'GitHub', value: profile.githubHandle, href: profile.github, external: true },
]

const inputClass =
  'w-full rounded-xl border border-border-glass bg-white/[0.03] px-4 py-3 text-[0.95rem] text-white placeholder:text-text-muted outline-none transition-colors focus:border-accent-violet/70 focus:bg-white/[0.05]'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear the previous success or error message
    setStatus('')
    setStatusType('')
  }

  // No backend: compose the message in the visitor's email client instead of faking a send

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSending(true);
    setStatus('');
    setStatusType('');

    const form = event.currentTarget;
    const payload = new FormData(form);

    payload.append(
      'access_key',
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    payload.append(
      'subject',
      'New message from my portfolio website'
    );

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          body: payload,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        setStatusType('success');
        setStatus('Message sent successfully! Thank you for reaching out.');

        setFormData({
          name: '',
          email: '',
          message: '',
        });

        form.reset();
      } else {
        setStatusType('error');
        setStatus(
          result.message || 'Unable to send your message. Please try again.'
        );
      }
    } catch {
      setStatusType('error');
      setStatus('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="reveal relative glass-card overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="absolute -top-48 -right-40 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.22),transparent_65%)] pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-48 -left-40 w-[28rem] h-[28rem] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.16),transparent_65%)] pointer-events-none" aria-hidden="true" />

          <div className="relative grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14">
            <div>
              <SectionHeading
                index="06"
                eyebrow="Contact"
                title="Have an opportunity in mind?"
                highlight="Let's talk."
                description="I'm actively looking for software development internships and am always happy to discuss projects, ideas or collaborations."
              />

              <ul className="grid sm:grid-cols-2 gap-3 -mt-4">
                {channels.map((c) => (
                  <li key={c.label} className={c.label === 'Email' ? 'sm:col-span-2' : ''}>
                    <a
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center gap-3.5 rounded-2xl border border-border-glass bg-white/[0.02] p-3.5 transition-all duration-200 hover:border-border-glow hover:bg-white/[0.05]"
                    >
                      <span className="w-10 h-10 shrink-0 rounded-xl bg-accent-violet/12 text-accent-soft flex items-center justify-center transition-colors group-hover:bg-accent-violet/25">
                        <Icon name={c.icon} size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.72rem] text-text-muted">{c.label}</span>
                        <span className="block text-[0.86rem] text-text-primary truncate">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:pt-2">
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="block mb-2 text-[0.82rem] text-text-secondary">Your name</span>
                  <input type="text" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Jane Doe" />
                </label>
                <label className="block">
                  <span className="block mb-2 text-[0.82rem] text-text-secondary">Email address</span>
                  <input type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="jane@company.com" />
                </label>
              </div>
              <label className="block">
                <span className="block mb-2 text-[0.82rem] text-text-secondary">Message</span>
                <textarea name="message" rows="5" required value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell me about the role or project…" />
              </label>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary self-start disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? 'Sending...' : 'Send message'}
                {!sending && <Icon name="send" size={16} />}
              </button>
              <p
                className="text-[0.78rem] text-text-muted"
                aria-live="polite"
                role="status"
              >

                {status && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm transition-colors ${statusType === 'success'
                      ? 'border-green-500/30 bg-green-500/10 text-green-6j00 dark:text-green-400'
                      : 'border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400'
                      }`}
                  >
                    <Icon
                      name={statusType === 'success' ? 'check-circle' : 'alert-circle'}
                      size={18}
                    />
                    <span>{status}</span>
                  </div>
                )}

              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
