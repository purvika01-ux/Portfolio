import React from 'react'
import profileImg from '../assets/profile.png'
import { profile } from '../data/portfolio'
import { Icon, TechIcon } from './Icons'

const heroStack = [
  { name: 'React', icon: 'react' },
  { name: 'JavaScript', icon: 'js' },
  { name: 'Tailwind', icon: 'tailwind' },
  { name: 'Java', icon: 'java' },
  { name: 'C++', icon: 'cpp' },
  { name: 'Git', icon: 'git' },
]

// Small syntax-highlighted snippet shown on the floating code card
const CodeCard = () => (
  <div className="w-[220px] xs:w-[245px] sm:w-[300px] rounded-xl sm:rounded-2xl border border-white/10 bg-[#0b0e22]/90 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
    <div className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2.5 border-b border-white/6">
      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f57]" />
      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#febc2e]" />
      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28c840]" />
      <span className="ml-1.5 sm:ml-2 font-mono text-[0.62rem] sm:text-[0.68rem] text-text-muted">purvika.js</span>
    </div>
    <pre className="px-3.5 py-2.5 sm:px-4 sm:py-3.5 font-mono text-[0.65rem] sm:text-[0.72rem] leading-[1.65] sm:leading-[1.75] text-text-secondary overflow-hidden">
      <span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">purvika</span> = {'{'}
      {'\n'}  role: <span className="text-[#c3e88d]">'Frontend Dev'</span>,
      {'\n'}  stack: [<span className="text-[#c3e88d]">'React'</span>, <span className="text-[#c3e88d]">'Java'</span>],
      {'\n'}  cgpa: <span className="text-[#f78c6c]">8.76</span>,
      {'\n'}  openToWork: <span className="text-[#ff9cac]">true</span>
      {'\n'}{'}'}<span className="caret inline-block w-[6px] sm:w-[7px] h-[11px] sm:h-[13px] bg-accent-soft/80 align-middle ml-0.5" />
    </pre>
  </div>
)

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-[100px] pb-6 sm:pb-12 lg:pt-[96px] overflow-hidden">
      <div className="grid-pattern absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="relative w-full max-w-[1200px] mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">
        {/* Intro copy */}
        <div className="reveal">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-border-glass bg-white/[0.03] pl-2.5 pr-4 py-1.5 text-[0.8rem] text-text-secondary">
            <span className="status-dot w-2 h-2 rounded-full bg-emerald-400" />
            {profile.status}
          </div>

          <h1 className="mt-6 text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] leading-[1.05] font-bold text-text-primary">
            Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>
            <span className="block mt-2 text-[1.6rem] sm:text-[2.1rem] lg:text-[2.4rem] text-text-primary/90 font-semibold">
              {profile.tagline}
            </span>
          </h1>

          <p className="mt-6 max-w-135 text-[1.02rem] leading-relaxed text-text-secondary">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View My Work
              <Icon name="arrowUpRight" size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me
              <Icon name="mail" size={18} />
            </a>
          </div>

          <div className="mt-10">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-text-muted mb-3">Technologies I work with</p>
            <ul className="flex flex-wrap gap-2.5">
              {heroStack.map((tech) => (
                <li
                  key={tech.name}
                  title={tech.name}
                  className="w-11 h-11 rounded-xl border border-border-glass bg-white/[0.03] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:border-border-glow"
                >
                  <TechIcon name={tech.icon} className="w-[22px] h-[22px]" />
                  <span className="sr-only">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual */}
        <div className="reveal relative mx-auto w-full max-w-[340px] sm:max-w-110 mb-8 sm:mb-0" style={{ '--reveal-delay': '150ms' }}>
          {/* Orbit ring + glow */}
          <div className="absolute -inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.38)_0%,rgba(79,70,229,0.18)_40%,transparent_68%)]" aria-hidden="true" />
          <div className="absolute -inset-2 rounded-full border border-dashed border-accent-soft/20 animate-spin-slow" aria-hidden="true" />
          <div className="dot-pattern absolute -right-2 top-4 w-24 h-24 opacity-40" aria-hidden="true" />

          {/* Arched portrait */}
          <div className="relative mx-auto w-[78%] aspect-[4/5] rounded-t-full rounded-b-[2rem] p-[3px] bg-linear-to-b from-accent-soft/70 via-accent-indigo/40 to-transparent">
            <div className="relative w-full h-full rounded-t-full rounded-b-[1.85rem] overflow-hidden bg-[#141a3a]">
              <img
                src={profileImg}
                alt="Portrait of Purvika Jain"
                className="w-full h-full object-cover object-top"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#141a3a]/70 to-transparent pointer-events-none" aria-hidden="true" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="floating absolute -left-2 xs:-left-4 sm:-left-20 lg:-left-22 -bottom-7 sm:-bottom-7 z-10">
            <CodeCard />
          </div>
          <div className="floating-delayed absolute -right-2 xs:-right-4 sm:-right-12 lg:-right-16 top-[22%] sm:top-[16%] rounded-xl sm:rounded-2xl border border-border-glass bg-bg-elevated/90 backdrop-blur-xl px-2.5 py-1.5 sm:px-4 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.8)] z-10">
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-accent-violet/15 text-accent-soft flex items-center justify-center shrink-0">
              <Icon name="graduation" size={15} />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-[0.84rem] sm:text-[1.05rem] font-bold text-text-primary">8.76 CGPA</span>
              <span className="block text-[0.6rem] sm:text-[0.72rem] text-text-muted">B.Tech CSE<span className="hidden xs:inline"> · GNDEC</span></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
