// Single source of truth for portfolio content (sourced from Purvika's resume).

export const profile = {
  name: 'Purvika Jain',
  firstName: 'Purvika',
  role: 'Frontend Developer',
  tagline: 'I build responsive, user-focused web apps.',
  intro:
    'B.Tech Computer Science student at GNDEC, Ludhiana, with a strong foundation in Java, DSA, JavaScript and React — turning ideas into clean, intuitive interfaces.',
  status: 'Open to internships & SDE opportunities',
  location: 'Agra, Uttar Pradesh',
  email: 'jainpurvika35@gmail.com',
  phone: '+91 95575 08649',
  phoneHref: 'tel:+919557508649',
  github: 'https://github.com/purvika01-ux',
  githubHandle: 'purvika01-ux',
  linkedin: 'https://www.linkedin.com/in/purvika-jain-a73817281/',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const highlights = [
  { value: '8.76', label: 'CGPA in B.Tech CSE' },
  { value: '2', label: 'Industrial trainings' },
  { value: '2', label: 'Featured projects' },
  { value: '2', label: 'Certifications' },
]

export const focusAreas = [
  {
    title: 'Responsive interfaces',
    text: 'Layouts that work on every screen, built with React, Tailwind CSS, HTML and CSS.',
  },
  {
    title: 'Reusable components',
    text: 'Modular React components with Hooks, props and state management that keep codebases maintainable.',
  },
  {
    title: 'Problem solving',
    text: 'A solid grounding in Java, OOP and Data Structures & Algorithms behind every feature.',
  },
]

// `icon` keys map to entries in components/Icons.jsx -> TechIcon
export const skillGroups = [
  {
    title: 'Languages',
    note: 'Core programming',
    items: [
      { name: 'Java', icon: 'java' },
      { name: 'JavaScript', icon: 'js' },
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cpp' },
    ],
  },
  {
    title: 'Frontend',
    note: 'Primary focus',
    items: [
      { name: 'React.js', icon: 'react' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
    ],
  },
  {
    title: 'Tools & Data',
    note: 'Workflow & databases',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'GitHub', icon: 'github' },
      { name: 'SQL (basics)', icon: 'sql' },
    ],
  },
]

export const fundamentals = ['Data Structures & Algorithms', 'Object-Oriented Programming']

export const softSkills = ['Problem Solving', 'Teamwork', 'Leadership', 'Communication', 'Adaptability', 'Self-learning']

export const experiences = [
  {
    company: 'DigiBoulevards',
    location: 'Mohali',
    role: 'Industrial Training — MERN Stack Development',
    period: 'July 2026',
    points: [
      'Gained exposure to MongoDB, Express.js, React.js and Node.js through MERN stack development.',
      'Developed a foundational understanding of full-stack web development and backend technologies.',
    ],
    stack: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  },
  {
    company: 'Hankernest Technologies Pvt. Ltd.',
    location: 'Agra',
    role: 'Industrial Training — Frontend Development',
    period: 'July 2025',
    points: [
      'Built responsive user interfaces using React.js, HTML, CSS and JavaScript.',
      'Gained practical knowledge of React components, Hooks, state management, props and API integration.',
    ],
    stack: ['React.js', 'JavaScript', 'HTML', 'CSS'],
  },
]

export const featuredProjects = [
  {
    title: 'MedisTech',
    subtitle: 'Smart Clinic Management System',
    meta: 'Team project · Frontend Developer',
    description:
      'A clinic management platform with dedicated dashboards for patients and doctors.',
    points: [
      'Developed responsive patient & doctor dashboards with appointment booking, doctor availability, patient history and prescription workflows.',
      'Contributed authentication flows, landing page, blog/contact modules and UI animations using reusable React components.',
      'Collaborated with team members to implement the overall application workflow.',
    ],
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/purvika01-ux/Smart-Clinic-Management-System',
    live: 'https://smart-clinic-management-system-pink.vercel.app',
    preview: 'clinic',
  },
  {
    title: 'The Gift Nest',
    subtitle: 'Custom Gift Hamper Website',
    meta: 'Frontend · E-commerce website',
    description:
      'A responsive website for browsing custom gift hampers and ordering them directly.',
    points: [
      'Developed and deployed a responsive gift hamper website using React.js, Vite and Tailwind CSS.',
      'Built reusable product-focused components with responsive layouts and Framer Motion animations.',
      'Implemented WhatsApp-based ordering for direct customer inquiries and orders.',
    ],
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript', 'Framer Motion'],
    github: 'https://github.com/purvika01-ux/The-Gift-Nest',
    live: 'https://the-gift-nest.vercel.app',
    preview: 'shop',
  },
]

export const education = [
  {
    degree: 'B.Tech, Computer Science Engineering',
    school: 'Guru Nanak Dev Engineering College, Ludhiana, Punjab',
    period: '2023 – 2027',
    score: '8.76',
    scoreLabel: 'CGPA',
  },
  {
    degree: 'Intermediate',
    school: 'AVMD Institute, Agra, Uttar Pradesh',
    period: '2022 – 2023',
    score: '91%',
    scoreLabel: 'Score',
  },
]

export const achievements = [
  {
    kind: 'Certification',
    title: 'NPTEL — Problem Solving Through Programming in C',
    issuer: 'NPTEL',
    icon: 'cert',
  },
  {
    kind: 'Certification',
    title: 'Python Foundation Certification',
    issuer: 'Infosys Springboard',
    icon: 'cert',
  },
  {
    kind: 'Hackathon',
    title: 'Think-a-Thon 2026',
    issuer: 'Inter-college level hackathon',
    icon: 'trophy',
  },
  {
    kind: 'Technical event',
    title: 'Luminex 2025 — DesignCraft',
    issuer: 'Technical event',
    icon: 'spark',
  },
]
