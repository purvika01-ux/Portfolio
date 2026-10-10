import React from 'react'
import useTheme from '../hooks/useTheme'
import { Icon } from './Icons'

const ThemeToggle = ({ className = '', showLabel = false }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center gap-2.5 rounded-xl border border-border-glass bg-white/4 text-text-secondary transition-all duration-300 hover:text-text-primary hover:border-border-glow hover:bg-white/8 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft cursor-pointer ${
        showLabel ? 'px-3.5 py-2' : 'w-10 h-10 justify-center'
      } ${className}`}
    >
      <span className="relative flex items-center justify-center transition-transform duration-300">
        {isDark ? (
          <Icon
            name="sun"
            size={18}
            className="text-amber-300 drop-shadow-[0_0_8px_rgba(252,211,77,0.5)] transition-transform duration-300 rotate-0 hover:rotate-45"
          />
        ) : (
          <Icon
            name="moon"
            size={18}
            className="text-accent-indigo drop-shadow-[0_0_8px_rgba(99,102,241,0.4)] transition-transform duration-300 -rotate-12 hover:rotate-0"
          />
        )}
      </span>
      {showLabel && (
        <span className="font-heading text-sm font-medium text-text-primary">
          {isDark ? 'Light mode' : 'Dark mode'}
        </span>
      )}
      <span className="sr-only">Toggle light/dark theme</span>
    </button>
  )
}

export default ThemeToggle
