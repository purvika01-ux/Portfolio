import React from 'react'
import { focusAreas, highlights, profile } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Icon } from './Icons'

const focusIcons = ['layers', 'code', 'puzzle']

const About = () => {
  return (
    <section id="about" className="relative pt-8 pb-12 sm:pt-14 sm:pb-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading index="01" eyebrow="About me" title="Curious builder," highlight="detail-driven developer" />

        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Story */}
          <div className="reveal space-y-5 text-[1rem] leading-[1.8] text-text-secondary">
            <p>
              I&apos;m <strong className="text-text-primary font-semibold">{profile.name}</strong>, a Computer Science &amp; Engineering
              student at <strong className="text-text-primary font-semibold">Guru Nanak Dev Engineering College, Ludhiana</strong> (2023 – 2027).
              I enjoy taking an idea from a rough sketch to a responsive, polished web app that people actually like using.
            </p>
            <p>
              Through industrial training at <span className="text-text-primary font-medium">Hankernest Technologies</span> and{' '}
              <span className="text-text-primary font-medium">DigiBoulevards</span>, I&apos;ve built React interfaces and gained exposure to the MERN stack —
              and I&apos;ve applied those skills to projects like <span className="text-text-primary font-medium">MedisTech</span>, a clinic management
              system, and <span className="text-text-primary font-medium">The Gift Nest</span>, a deployed e-commerce storefront.
            </p>
            <p>
              I&apos;m currently looking for internship opportunities where I can learn from experienced engineers and contribute to real products.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9rem]">
              <span className="inline-flex items-center gap-2 text-text-secondary">
                <Icon name="pin" size={16} className="text-accent-soft" />
                {profile.location}
              </span>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-text-secondary hover:text-black dark:hover:text-white transition-colors">
                <Icon name="mail" size={16} className="text-accent-soft" />
                {profile.email}
              </a>
            </div>
          </div>

          {/* Stats + focus */}
          <div className="space-y-5">
            <dl className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className="reveal glass-card card-hover p-5 sm:p-6"
                  style={{ '--reveal-delay': `${i * 80}ms` }}
                >
                  <dt className="sr-only">{item.label}</dt>
                  <dd className="font-heading text-[2rem] sm:text-[2.3rem] font-bold leading-none text-gradient">{item.value}</dd>
                  <dd className="mt-2 text-[0.82rem] text-text-secondary">{item.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="reveal glass-card p-2">
              {focusAreas.map((area, i) => (
                <li key={area.title} className="flex gap-4 p-4 rounded-2xl transition-colors hover:bg-white/[0.03]">
                  <span className="mt-0.5 w-10 h-10 shrink-0 rounded-xl bg-accent-violet/12 border border-accent-violet/25 text-accent-soft flex items-center justify-center">
                    <Icon name={focusIcons[i]} size={18} />
                  </span>
                  <span>
                    <span className="block font-heading text-[1rem] font-semibold text-text-primary">{area.title}</span>
                    <span className="block mt-1 text-[0.86rem] leading-relaxed text-text-secondary">{area.text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
