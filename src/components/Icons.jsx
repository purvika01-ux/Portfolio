import React from 'react'
import reactLogo from '../assets/tech/react.svg'
import jsLogo from '../assets/tech/js.svg'
import htmlLogo from '../assets/tech/html.svg'
import cssLogo from '../assets/tech/css.svg'
import tailwindLogo from '../assets/tech/tailwind.svg'
import javaLogo from '../assets/tech/java.svg'
import cLogo from '../assets/tech/c.svg'
import cppLogo from '../assets/tech/cpp.svg'
import gitLogo from '../assets/tech/git.svg'
import githubLogo from '../assets/tech/github.svg'

// Stroke-based UI icons (24x24 grid)
const uiPaths = {
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  download: <><path d="M12 4v11" /><path d="M7 10l5 5 5-5" /><path d="M5 20h14" /></>,
  github: <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  external: <><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6M10 14L21 3" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M18 6L6 18M6 6l12 12" />,
  send: <><path d="M22 2L11 13" /><path d="M22 2l-7 20-4-9-9-4 20-7z" /></>,
  cert: <><circle cx="12" cy="8" r="6" /><path d="M8.2 13.9L7 23l5-3 5 3-1.2-9.1" /></>,
  trophy: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.7V17c0 .6-.5 1-1 1.2C7.9 18.8 7 20.2 7 22M14 14.7V17c0 .6.5 1 1 1.2 1.1.6 2 2 2 3.8" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2z" /></>,
  award: <><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></>,
  spark: <path d="M12 3l2.4 6.1L21 12l-6.6 2.9L12 21l-2.4-6.1L3 12l6.6-2.9L12 3z" />,
  graduation: <><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /><path d="M22 10v6" /></>,
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  layers: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  puzzle: <path d="M19.4 13.6a2 2 0 1 0 0-3.2V7a1 1 0 0 0-1-1h-3.4a2 2 0 1 0-3.2 0H8.4a1 1 0 0 0-1 1v3.4a2 2 0 1 0 0 3.2V17a1 1 0 0 0 1 1h3.4a2 2 0 1 1 3.2 0h3.4a1 1 0 0 0 1-1v-3.4z" />,
  check: <path d="M20 6L9 17l-5-5" />,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </>
  ),
  moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />,
}

export const Icon = ({ name, size = 18, className = '', strokeWidth = 2 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {uiPaths[name]}
  </svg>
)

// Official technology logos (sources listed in src/assets/tech/SOURCES.md)
const techLogos = {
  react: reactLogo,
  js: jsLogo,
  html: htmlLogo,
  css: cssLogo,
  tailwind: tailwindLogo,
  java: javaLogo,
  c: cLogo,
  cpp: cppLogo,
  git: gitLogo,
  github: githubLogo,
}

// GitHub mark with theme-adaptive fill (black in light mode, white in dark mode)
const githubTechIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-text-primary">
    <path d="M10.226 17.284c-2.965-.36-5.054-2.493-5.054-5.256 0-1.123.404-2.336 1.078-3.144-.292-.741-.247-2.314.09-2.965.898-.112 2.111.36 2.83 1.01.853-.269 1.752-.404 2.853-.404 1.1 0 1.999.135 2.807.382.696-.629 1.932-1.1 2.83-.988.315.606.36 2.179.067 2.942.72.854 1.101 2 1.101 3.167 0 2.763-2.089 4.852-5.098 5.234.763.494 1.28 1.572 1.28 2.807v2.336c0 .674.561 1.056 1.235.786 4.066-1.55 7.255-5.615 7.255-10.646C23.5 6.188 18.334 1 11.978 1 5.62 1 .5 6.188.5 12.545c0 4.986 3.167 9.12 7.435 10.669.606.225 1.19-.18 1.19-.786V20.63a2.9 2.9 0 0 1-1.078.224c-1.483 0-2.359-.808-2.987-2.313-.247-.607-.517-.966-1.034-1.033-.27-.023-.359-.135-.359-.27 0-.27.45-.471.898-.471.652 0 1.213.404 1.797 1.235.45.651.921.943 1.483.943.561 0 .92-.202 1.437-.719.382-.381.674-.718.944-.943" />
  </svg>
)

// SQL has no official logo, so it uses a neutral database glyph
const sqlIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-full h-full text-accent-sky">
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
  </svg>
)

export const TechIcon = ({ name, className = 'w-5 h-5' }) => (
  <span className={`inline-flex shrink-0 items-center justify-center ${className}`} aria-hidden="true">
    {name === 'github' ? (
      githubTechIcon
    ) : name === 'sql' ? (
      sqlIcon
    ) : techLogos[name] ? (
      <img src={techLogos[name]} alt="" className="w-full h-full object-contain" />
    ) : (
      sqlIcon
    )}
  </span>
)
