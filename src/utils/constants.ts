import { NavItem } from '../types';

export const SITE_CONFIG = {
  name: 'John Doe',
  title: 'Portfolio',
  description: 'Full-stack developer portfolio',
  email: 'john.doe@example.com',
  github: 'https://github.com/john-doe',
  linkedin: 'https://linkedin.com/in/john-doe',
  twitter: 'https://twitter.com/john-doe',
};

export const NAVIGATION: NavItem[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' },
];

export const SKILLS = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  backend: ['Node.js', 'Express.js', 'Python', 'Django', 'FastAPI'],
  database: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
  tools: ['Git', 'Docker', 'AWS', 'Figma', 'Jest'],
}; 