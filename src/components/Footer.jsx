import React from 'react'
import { navLinks, profile } from '../data/portfolio'
import { Icon } from './Icons'

const socials = [
  { icon: 'github', label: 'GitHub', href: profile.github },
  { icon: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
  { icon: 'mail', label: 'Email', href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`, external: true },
]

const Footer = () => {
  return (
    <footer className="border-t border-border-glass bg-bg-dark/80">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <a href="#home" className="font-heading text-[1.05rem] font-semibold text-text-primary hover:text-black dark:hover:text-white transition-colors">
            Purvika <span className="text-accent-soft">Jain</span>
          </a>
          <p className="mt-1 text-[0.8rem] text-text-muted">
            &copy; {new Date().getFullYear()} {profile.name}. Designed &amp; built with React and Tailwind CSS.
          </p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-[0.85rem]">
          {navLinks.slice(1).map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="text-text-secondary hover:text-black dark:hover:text-white transition-colors">{label}</a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2.5">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                {...(s.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="w-10 h-10 rounded-xl border border-border-glass flex items-center justify-center text-text-secondary transition-all duration-200 hover:text-black dark:hover:text-white hover:border-border-glow hover:-translate-y-0.5"
              >
                <Icon name={s.icon} size={18} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
