import { title } from 'process';
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


// Add this above your component:
export const SkillbySect = [
  {
    title: "Web Design Principles",
    description: "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
    icon: "ic_cs01",
  },
  {
    title: "User Interface - UI Design",
    description: "Ability to create visually appealing and intuitive user interfaces that enhance user experience and engagement.",
    icon: "ic_cs02",
  },
  {
    title: "User Experience - UX Design",
    description: "Understanding of user behavior and psychology to design seamless and enjoyable user experiences that meet user needs and goals.",
    icon: "ic_cs03",
  },
  {
    title: "Responsive Web Design",
    description: "Knowledge of designing websites that adapt and function seamlessly across various devices and screen sizes.",
    icon: "ic_cs04",
  },
  {
    title: "Wireframing and Prototyping",
    description: "Ability to create wireframes and interactive prototypes to visualize and test website layouts and functionality.",
    icon: "ic_cs05",
  },
  {
    title: "Mobile-Friendly Optimization",
    description: "Proficiency in the fundamental principles of design, such as layout, color theory, typography, and visual hierarchy.",
    icon: "ic_cs06",
  },
];

export const benefits = [
  {
    title: "Customized Designs Tailored to Your Brand",
    description:
      "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand’s personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.",
  },
  {
    title: "Creative Excellence that Captivates Visitors",
    description:
      "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand’s credibility and professionalism.",
  },
  {
    title: "User-Centric Approach for Optimal Experience",
    description:
      "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.",
  },
  {
    title: "Mobile-Friendly Designs for Broad Accessibility",
    description:
      "In today’s mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.",
  },
  {
    title: "Expertise in Cutting-Edge Technologies",
    description:
      "With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.",
  },
  {
    title: "Expertise in Cutting-Edge Technologies",
    description:
      "With a strong command of HTML, CSS, JavaScript, and other front-end technologies, I possess the technical skills to bring your design concepts to life. From seamless animations to interactive elements, I leverage the latest web technologies to enhance user engagement and create a dynamic user experience.",
  },
];


