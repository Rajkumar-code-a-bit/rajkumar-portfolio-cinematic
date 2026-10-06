// Single source of truth for portfolio content. Do not add claims here that
// are not backed by Rajkumar's real experience.

export type NavItem = { label: string; id: SectionId }
export type SectionId = 'home' | 'about' | 'work' | 'stack' | 'experience' | 'contact'

export const profile = {
  name: 'Rajkumar Devadoss',
  role: 'Senior Frontend Engineer',
  subtitle: 'Frontend-heavy Full Stack Developer',
  email: 'rajkumardevadoss97@gmail.com',
  linkedin: 'https://linkedin.com/in/rajkumar-d-74b09a192',
  statement: 'Building digital experiences with clarity, performance, and purpose.',
}

// Order matches the order sections appear on the page.
export const navigation: NavItem[] = [
  { label: 'About', id: 'about' },
  { label: 'Work', id: 'work' },
  { label: 'Stack', id: 'stack' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
]

export const heroMedia = {
  video: '/assets/hero-walk.mp4',
  videoWebm: '/assets/hero-walk.webm',
  // First frame: shown while the video loads.
  poster: '/assets/hero-poster.jpg',
  // Last frame: the resting pose, used when motion is reduced or data saving is on.
  still: '/assets/hero-final.jpg',
}

export const portrait = {
  src: '/assets/rajkumar-portrait.jpg',
  alt: 'Rajkumar Devadoss in a black suit and white shirt, walking through a dark studio under a single spotlight.',
}

export type Metric = { value: string; label: string }
export const metrics: Metric[] = [
  { value: '5+', label: 'Years in product engineering' },
  { value: '50K+', label: 'Active users served' },
  { value: '8K+', label: 'Lines migrated to TypeScript' },
  { value: '99.5%', label: 'Deployment success rate' },
]

export type Project = {
  number: string
  name: string
  type: string
  summary: string
  tags: string[]
  featured: boolean
  highlight?: Metric
}
export const projects: Project[] = [
  { number: '01', name: 'Enterprise UI Platform', type: 'React + TypeScript · 2025', summary: 'A reusable, responsive interface system delivered across 12+ product modules, built with consistency, accessibility, and speed in mind.', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Material UI'], featured: true, highlight: { value: '12+', label: 'Product modules' } },
  { number: '02', name: 'Component Library', type: 'Design System', summary: 'A modular React component library adopted by three product squads, helping teams move faster without losing visual consistency.', tags: ['React', 'Redux Toolkit', 'WCAG 2.1'], featured: false, highlight: { value: '3', label: 'Product squads adopted it' } },
  { number: '03', name: 'Performance Initiative', type: 'Web Performance', summary: 'A focused optimisation programme using lazy loading, memoization, and code splitting to reduce bundle size and improve load time.', tags: ['Webpack', 'React', 'Core Web Vitals'], featured: false },
  { number: '04', name: 'Full-Stack Integration', type: 'API Delivery', summary: 'End-to-end product features shaped around reliable REST API integration, error handling, client-side validation, and clear contracts.', tags: ['Node.js', 'NestJS', 'MongoDB'], featured: false },
]

export type Principle = { number: string; title: string; description: string }
export const engineering: Principle[] = [
  { number: '01', title: 'UI systems', description: 'Reusable components and accessible interfaces that keep product teams moving.' },
  { number: '02', title: 'Frontend architecture', description: 'Composable patterns that let products evolve without unnecessary friction.' },
  { number: '03', title: 'Performance', description: 'Focused improvements to loading, rendering, and Core Web Vitals.' },
  { number: '04', title: 'TypeScript', description: 'Clear contracts and safer codebases that support confident delivery.' },
  { number: '05', title: 'API integration', description: 'Reliable REST and GraphQL experiences, from error states to production debugging.' },
  { number: '06', title: 'Product experience', description: 'Careful implementation that makes technical quality visible to users.' },
  { number: '07', title: 'Accessibility', description: 'Semantic markup, keyboard support, and WCAG 2.1 practices built in from the first component.' },
  { number: '08', title: 'Testing', description: 'Confidence through Jest, React Testing Library, and Cypress end-to-end coverage.' },
]

export type StackGroup = { name: string; items: string[] }
export const stack: StackGroup[] = [
  { name: 'Frontend', items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Redux Toolkit', 'React Query'] },
  { name: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Python', 'FastAPI', 'MongoDB', 'SQL', 'REST API', 'GraphQL'] },
  { name: 'Engineering', items: ['Jest', 'React Testing Library', 'Cypress', 'Docker', 'CI/CD', 'AWS', 'Webpack', 'WCAG 2.1'] },
]

export type Job = { period: string; years: string; role: string; company: string; text: string }
export const experience: Job[] = [
  { period: 'JAN 2025 — PRESENT', years: '2025 — Now', role: 'Senior Frontend Developer (Consultant)', company: 'Thalsoft · Remote', text: 'Building reusable React + TypeScript interfaces across 12+ modules, while improving load time, release flow, and cross-team UI consistency.' },
  { period: 'APR 2024 — DEC 2024', years: '2024', role: 'Independent Consulting & Upskilling', company: 'Frontend consulting', text: 'Deepened hands-on practice in GraphQL, Cypress end-to-end testing, and AWS workflows alongside independent frontend consulting.' },
  { period: 'JUL 2020 — MAR 2024', years: '2020 — 2024', role: 'Tech Lead — Frontend', company: 'Cognizant Technology Solutions · Chennai', text: 'Delivered scalable React applications for 50,000+ active users, partnered on microservices, and mentored junior developers through production releases.' },
]
