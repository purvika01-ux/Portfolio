import React, { useState, useEffect } from 'react'
import { navLinks, profile } from '../data/portfolio'
import useActiveSection from '../hooks/useActiveSection'
import { Icon } from './Icons'
import ThemeToggle from './ThemeToggle'

const sectionIds = navLinks.map((link) => link.id)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close the mobile menu on Escape and lock background scroll while it is open
  useEffect(() => {
    if (!mobileMenuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // The scroll lock blocks the native anchor jump, so release it before scrolling to the section
  const handleMobileNav = (e, id) => {
    e.preventDefault()
    document.body.style.overflow = ''
    setMobileMenuOpen(false)
    document.getElementById(id)?.scrollIntoView()
    history.replaceState(null, '', `#${id}`)
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-1000 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-bg-dark/80 backdrop-blur-xl border-b border-border-glass'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="max-w-[1200px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between" aria-label="Main">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group" onClick={(e) => mobileMenuOpen && handleMobileNav(e, 'home')}>
          <span className="w-9 h-9 rounded-xl bg-linear-to-br from-accent-violet to-accent-blue flex items-center justify-center font-mono text-[0.8rem] font-bold text-white shadow-[0_6px_20px_-6px_rgba(139,92,246,0.8)] transition-transform duration-300 group-hover:rotate-[-6deg]">
            PJ
          </span>
          <span className="font-heading text-[1.1rem] font-semibold tracking-tight text-text-primary">
            Purvika <span className="text-accent-soft">Jain</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`relative px-3.5 py-2 rounded-lg text-[0.88rem] font-medium transition-colors duration-200 ${
                  active === id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {label}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 -bottom-0.5 h-[3px] rounded-full bg-linear-to-r from-accent-violet to-accent-blue transition-all duration-300 ${
                    active === id ? 'w-5 opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Controls (Theme + CTA) */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a href="#contact" className="btn-primary py-2.5! px-5! text-[0.85rem]!">
            Let&apos;s Talk
            <Icon name="arrowUpRight" size={16} />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="w-11 h-11 -mr-2 flex items-center justify-center rounded-xl text-text-primary hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] bg-bg-dark/95 backdrop-blur-2xl transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <ul className="flex flex-col px-5 sm:px-8 pt-4 pb-8 gap-1">
          {navLinks.map(({ id, label }, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleMobileNav(e, id)}
                tabIndex={mobileMenuOpen ? 0 : -1}
                className={`flex items-center justify-between py-4 border-b border-border-glass font-heading text-[1.35rem] font-medium transition-colors ${
                  active === id ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <span>
                  <span className="font-mono text-xs text-accent-soft/70 mr-3">0{i + 1}</span>
                  {label}
                </span>
                <Icon name="arrowRight" size={18} className="opacity-50" />
              </a>
            </li>
          ))}
          <li className="pt-4 flex items-center justify-between py-3 border-b border-border-glass">
            <span className="text-sm font-medium text-text-secondary">Theme</span>
            <ThemeToggle showLabel />
          </li>
          <li className="pt-6">
            <a href={`mailto:${profile.email}`} tabIndex={mobileMenuOpen ? 0 : -1} className="btn-primary w-full">
              Email Me
              <Icon name="mail" size={18} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
