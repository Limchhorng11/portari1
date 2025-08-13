import { title } from "process";

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'database';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavItem {
  path: string;
  label: string;
} 

export interface SkillbySect {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface benefits{
  title: string;
  description: string;
}

// Global thumbnail data structure (use in constants.ts Line 11-93 and Home.tsx Line 115-125)
export interface ThumbnailData {
  id: number;
  color: string;
  textColor: string;
  image: string;
  label: string;
}

export interface ProjectData {
  id: string;
  title: string;
  thumbs: ThumbnailData[];
}

// FAQ Item (use in constants.ts Line 248-273 and FAQ.tsx Line 10-17)
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
