import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

const App = () => {
  useReveal()

  return (
    <ThemeProvider>
      <div className="relative min-h-screen flex flex-col">
        {/* Ambient background */}
        <div className="site-bg" aria-hidden="true" />

        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-1100 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-bg-dark"
        >
          Skip to content
        </a>

        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
