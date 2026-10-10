import React from 'react'
import { achievements, education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Icon } from './Icons'

const Education = () => {
  return (
    <section id="education" className="relative py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Education & achievements"
          title="Learning, certified &"
          highlight="recognised"
        />

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6">
          {/* Education */}
          <div className="reveal glass-card p-6 sm:p-8">
            <h3 className="flex items-center gap-2.5 font-heading text-[1.15rem] font-semibold text-text-primary">
              <Icon name="graduation" size={20} className="text-accent-soft" />
              Education
            </h3>
            <ol className="mt-6 space-y-4">
              {education.map((item, i) => (
                <li
                  key={item.degree}
                  className={`flex items-center gap-5 rounded-2xl p-4 sm:p-5 border transition-colors ${
                    i === 0 ? 'border-accent-violet/30 bg-accent-violet/[0.07]' : 'border-border-glass bg-white/[0.02]'
                  }`}
                >
                  <div className="w-[76px] shrink-0 text-center">
                    <span className={`block font-heading font-bold leading-none ${i === 0 ? 'text-[1.9rem] text-gradient' : 'text-[1.5rem] text-text-primary'}`}>
                      {item.score}
                    </span>
                    <span className="block mt-1 font-mono text-[0.62rem] uppercase tracking-wider text-text-muted">{item.scoreLabel}</span>
                  </div>
                  <div className="min-w-0 border-l border-border-glass pl-5">
                    <p className="font-heading text-[0.98rem] font-semibold text-text-primary leading-snug">{item.degree}</p>
                    <p className="mt-1 text-[0.85rem] text-text-secondary">{item.school}</p>
                    <p className="mt-1 font-mono text-[0.72rem] text-text-muted">{item.period}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Achievements */}
          <div className="flex flex-col gap-6">
            <ul className="grid sm:grid-cols-2 gap-4">
              {achievements.map((item, i) => (
                <li
                  key={item.title}
                  className="reveal glass-card card-hover p-5 flex gap-4"
                  style={{ '--reveal-delay': `${i * 70}ms` }}
                >
                  <span className="w-10 h-10 shrink-0 rounded-xl bg-accent-indigo/15 border border-accent-indigo/25 text-accent-soft flex items-center justify-center">
                    <Icon name={item.icon} size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-mono text-[0.65rem] uppercase tracking-[0.12em] text-accent-soft/80">{item.kind}</span>
                    <span className="block mt-1 font-heading text-[0.98rem] font-semibold text-text-primary leading-snug">{item.title}</span>
                    <span className="block mt-1 text-[0.8rem] text-text-muted">{item.issuer}</span>
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

export default Education
