import React from 'react'
import { featuredProjects, profile } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import { Icon } from './Icons'
import medistechShot from '../assets/projects/medistech.webp'
import giftNestShot from '../assets/projects/gift-nest.webp'

// Screenshots of each live project, keyed by `preview` in data/portfolio.js
const previews = { clinic: medistechShot, shop: giftNestShot }

const ProjectLink = ({ href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-text-secondary hover:text-white transition-colors"
  >
    <Icon name={icon} size={16} />
    {children}
  </a>
)

const Projects = () => {
  return (
    <section id="projects" className="relative py-14 md:py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          index="04"
          eyebrow="Projects"
          title="Selected"
          highlight="work"
          description="Things I've designed, built and deployed — a team-built clinic platform and a live gift hamper storefront."
        />

        {/* Featured projects */}
        <div className="grid lg:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => {
            return (
              <article
                key={project.title}
                className="reveal group glass-card card-hover overflow-hidden flex flex-col"
                style={{ '--reveal-delay': `${i * 100}ms` }}
              >
                {/* Browser-framed screenshot */}
                <div className="relative m-3 mb-0 rounded-[14px] border border-white/8 bg-linear-to-br from-[#121838] to-[#0b0f26] overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/6">
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="w-2 h-2 rounded-full bg-white/20" />
                    <span className="ml-2 h-4 flex-1 max-w-[200px] rounded-md bg-white/[0.05] px-2 font-mono text-[0.6rem] leading-4 text-text-muted truncate">
                      {project.live.replace('https://', '')}
                    </span>
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={previews[project.preview]}
                      alt={`Screenshot of the ${project.title} website`}
                      loading="lazy"
                      decoding="async"
                      className="block w-full h-auto transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-accent-soft">{project.meta}</p>
                  <h3 className="mt-2 font-heading text-[1.5rem] font-semibold text-text-primary">
                    {project.title}
                    <span className="block text-[1rem] font-normal text-text-secondary">{project.subtitle}</span>
                  </h3>
                  <p className="mt-4 text-[0.93rem] leading-relaxed text-text-secondary">{project.description}</p>
                  <ul className="mt-4 space-y-2 text-[0.87rem] leading-relaxed text-text-secondary">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-[0.55rem] w-1.5 h-1.5 shrink-0 rounded-full bg-accent-soft/70" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tags.map((tag) => (
                      <li key={tag} className="tag">{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>


        <div className="reveal mt-10 text-center">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Icon name="github" size={18} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
