export type Project = {
  id: string;
  title: string;
  role: string;
  summary: string;
  tech: string[];
  tags: string[];
  responsibilities: string[];
};

export const projects: Project[] = [
  {
    id: 'intranet-ux-refresh',
    title: 'Internal Communications Intranet UX Refresh',
    role: 'Lead UI/UX & Front-End Developer',
    summary:
      'Redesigned and rebuilt an internal portal to improve content discoverability and reduce time-to-task for 3,000+ employees.',
    tech: ['React', 'TypeScript', 'CSS', 'Figma'],
    tags: ['UI/UX', 'Wireframing', 'Accessibility', 'Analytics'],
    responsibilities: [
      'Gathered requirements from Communications team and stakeholders.',
      'Created annotated wireframes and interactive prototypes in Figma.',
      'Implemented responsive React components with accessible navigation.',
      'Instrumented page views and click events to evaluate content performance.'
    ]
  },
  {
    id: 'public-site-redesign',
    title: 'Public Website Redesign',
    role: 'Front-End Developer',
    summary:
      'Implemented a modular design system and updated public-facing pages for a security-focused organization.',
    tech: ['HTML5', 'CSS', 'JavaScript', 'Bootstrap'],
    tags: ['Branding', 'Design System', 'Responsive'],
    responsibilities: [
      'Translated brand style tiles into reusable CSS utility classes.',
      'Implemented high-contrast, 508-compliant templates across multiple page types.',
      'Collaborated with back-end team to integrate templates with CMS.'
    ]
  }
];
