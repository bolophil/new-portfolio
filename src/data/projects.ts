export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  tech: string[];
  tags: string[];
  responsibilities: string[];
}

export const projects: Project[] = [
  {
    id: 'design-system-nguyen',
    title: 'Nguyen Design System',
    role: 'UI/UX Engineer & Front-End Developer',
    summary:
      'A personal design system showcasing accessible components, design tokens, and reusable UI patterns.',
    tech: ['React', 'TypeScript', 'CSS Modules', 'Figma'],
    tags: ['UI/UX', 'Design System', 'Accessibility'],
    responsibilities: [
      'Designed and documented buttons, forms, cards, navigation, and interactive components.',
      'Implemented 508-compliant patterns including keyboard navigation, focus states, and ARIA support.',
      'Created design tokens for typography, spacing, color, and elevation to ensure consistency.'
    ]
  },
  {
    id: 'portfolio-cms',
    title: 'Personal Portfolio Content Manager',
    role: 'Full-Stack Developer (Front-End Focus)',
    summary:
      'A self-contained CMS for managing portfolio projects, metadata, screenshots, and case studies.',
    tech: ['React', 'TypeScript', 'Node.js (mock)', 'CSS'],
    tags: ['UI/UX', 'Internal Tools', 'Content Management'],
    responsibilities: [
      'Designed and developed an internal CMS for managing personal project entries and case studies.',
      'Built CRUD interfaces with form validation and a clean editorial workflow.',
      'Integrated live preview and project categorization to streamline portfolio updates.'
    ]
  },
  {
    id: 'skills-dashboard',
    title: 'Personal Skills Analytics Dashboard',
    role: 'Front-End Developer',
    summary:
      'A dashboard visualizing personal skill growth, tech usage frequency, and project distribution.',
    tech: ['React', 'TypeScript', 'Chart.js', 'Figma'],
    tags: ['Analytics', 'Data Visualization', 'UI/UX'],
    responsibilities: [
      'Designed visualizations to track personal skill development, learning time, and technology usage.',
      'Implemented interactive charts including radar, bar, and timeline views.',
      'Created custom filters and breakdowns to analyze skill trends over time.'
    ]
  }
];
