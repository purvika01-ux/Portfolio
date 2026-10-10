import React, { useState, useEffect } from 'react'
import { ThemeContext } from './theme-context'

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'light' || saved === 'dark') return saved
      if (window.matchMedia('(prefers-color-scheme: light)').matches) return 'light'
    }
    return 'dark'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
      root.classList.remove('dark')
      root.setAttribute('data-theme', 'light')
    } else {
      root.classList.add('dark')
      root.classList.remove('light')
      root.setAttribute('data-theme', 'dark')
    }
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
