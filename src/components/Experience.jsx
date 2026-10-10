import React from 'react'
import { experiences } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Icon } from './Icons'

const Experience = () => {
  return (
    <section id="experience" className="relative py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Industry"
          highlight="training"
          description="Hands-on training in React UI engineering and full-stack MERN development."
        />

        <ol className="relative max-w-[900px] border-l border-border-glass ml-3 sm:ml-4 space-y-10">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="reveal relative pl-8 sm:pl-12" style={{ '--reveal-delay': `${i * 100}ms` }}>
              {/* Timeline node */}
              <span className="absolute -left-[9px] top-7 w-[17px] h-[17px] rounded-full bg-bg-dark border-2 border-accent-violet shadow-[0_0_0_5px_rgba(139,92,246,0.12)]" aria-hidden="true" />

              <article className="glass-card card-hover p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-[1.3rem] sm:text-[1.45rem] font-semibold text-text-primary">{exp.company}</h3>
                    <p className="mt-1 text-[0.95rem] text-accent-soft">{exp.role}</p>
                  </div>
                  <div className="flex sm:flex-col sm:items-end gap-x-4 gap-y-1.5 text-[0.8rem] text-text-muted shrink-0">
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <Icon name="calendar" size={14} />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Icon name="pin" size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-[0.93rem] leading-relaxed text-text-secondary">
                  {exp.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[0.6rem] w-1.5 h-1.5 shrink-0 rounded-full bg-accent-soft/70" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {exp.stack.map((tech) => (
                    <li key={tech} className="tag">{tech}</li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
