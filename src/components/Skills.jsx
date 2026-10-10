import React from 'react'
import { fundamentals, skillGroups, softSkills } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Icon, TechIcon } from './Icons'

const Skills = () => {
  return (
    <section id="skills" className="relative py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="02"
          eyebrow="Skills"
          title="The toolkit I"
          highlight="build with"
          description="Grouped by how I use them — from the languages I solve problems in to the tools that ship the final product."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <article
              key={group.title}
              className="reveal glass-card card-hover p-6 flex flex-col"
              style={{ '--reveal-delay': `${i * 80}ms` }}
            >
              <header className="flex items-baseline justify-between gap-3 mb-5">
                <h3 className="font-heading text-[1.1rem] font-semibold text-text-primary">{group.title}</h3>
                <span className="font-mono text-[0.65rem] text-text-muted">0{i + 1}</span>
              </header>
              <ul className="space-y-2.5 flex-1">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 bg-white/[0.025] border border-transparent transition-colors duration-200 hover:border-border-glass hover:bg-white/[0.05]"
                  >
                    <TechIcon name={item.icon} className="w-5 h-5" />
                    <span className="text-[0.9rem] text-text-primary">{item.name}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 pt-4 border-t border-border-glass text-[0.75rem] text-text-muted">{group.note}</p>
            </article>
          ))}
        </div>

        {/* Fundamentals + soft skills */}
        <div className="reveal mt-5 grid md:grid-cols-2 gap-5">
          <div className="glass-card p-6">
            <h3 className="font-heading text-[1rem] font-semibold text-text-primary mb-4">CS Fundamentals</h3>
            <ul className="flex flex-wrap gap-2.5">
              {fundamentals.map((item) => (
                <li key={item} className="inline-flex items-center gap-2 rounded-xl border border-accent-violet/25 bg-accent-violet/8 px-3.5 py-2 text-[0.85rem] text-text-secondary">
                  <Icon name="check" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6">
            <h3 className="font-heading text-[1rem] font-semibold text-text-primary mb-4">Soft Skills</h3>
            <ul className="flex flex-wrap gap-2.5">
              {softSkills.map((item) => (
                <li key={item} className="rounded-xl border border-border-glass bg-white/[0.03] px-3.5 py-2 text-[0.85rem] text-text-secondary">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
