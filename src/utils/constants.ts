import { NavItem, ThumbnailData, ProjectData, FAQItem} from '../types';


// Import different images for thumbnails
import thumbnail1 from '../assets/images/im_thaumnail01.png';
import thumbnail2 from '../assets/images/im_thaumnail02.png';
import thumbnail3 from '../assets/images/im_thaumnail03.png';


// Centralized thumbnail configuration
export const THUMBNAIL_CONFIG = {
  images: {
    thumbnail1,
    thumbnail2, 
    thumbnail3
  }
};

// Function to generate thumbnails with consistent pattern
export const generateThumbnails = (
  count: number, 
  images: string[]
): ThumbnailData[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    color: index % 2 === 0 
      ? 'from-purple-200 to-pink-200' 
      : 'from-purple-300 to-pink-300',
    textColor: index % 2 === 0 
      ? 'text-purple-600' 
      : 'text-purple-700',
    image: images[index % images.length],
    label: `Page ${index + 1}`
  }));
};

// Project-specific thumbnail data
export const perfumeThumbs = generateThumbnails(
  6,
  [THUMBNAIL_CONFIG.images.thumbnail1, THUMBNAIL_CONFIG.images.thumbnail2,THUMBNAIL_CONFIG.images.thumbnail3]
);

export const charityThumbs = generateThumbnails(
  6,
  [THUMBNAIL_CONFIG.images.thumbnail1, THUMBNAIL_CONFIG.images.thumbnail2,THUMBNAIL_CONFIG.images.thumbnail3]
);

export const skillbridgeThumbs = generateThumbnails(
  6,
  [THUMBNAIL_CONFIG.images.thumbnail3, THUMBNAIL_CONFIG.images.thumbnail2,THUMBNAIL_CONFIG.images.thumbnail1]
);

// Global projects data
export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'perfume',
    title: 'Z - Aura Perfume Website Design',
    
    thumbs: perfumeThumbs
  },
  {
    id: 'charity',
    title: 'Forhelp Charity Website Design',
   
    thumbs: charityThumbs
  },
  {
    id: 'skillbridge',
    title: 'Skill Bridge Website Design',
    
    thumbs: skillbridgeThumbs
  }
];

// Utility function to get project by ID
export const getProjectById = (id: string): ProjectData | undefined => {
  return PROJECTS_DATA.find(project => project.id === id);
};

// Utility function to get all project IDs
export const getAllProjectIds = (): string[] => {
  return PROJECTS_DATA.map(project => project.id);
};

// Utility function to add new project
export const addNewProject = (projectData: Omit<ProjectData, 'id'>): ProjectData => {
  const newProject: ProjectData = {
    ...projectData,
    id: `project-${Date.now()}` // Generate unique ID
  };
  PROJECTS_DATA.push(newProject);
  return newProject;
};







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
      "I understand the importance of creating a unique and memorable brand identity. By collaborating closely with you, I ensure that your website reflects your brand's personality, values, and objectives. The result is a customized design that sets you apart from the competition and resonates with your target audience.",
  },
  {
    title: "Creative Excellence that Captivates Visitors",
    description:
      "With a keen eye for aesthetics and a passion for creativity, I excel in designing visually stunning and engaging websites. By combining beautiful visuals, captivating typography, and strategic use of color, I create an immersive and impactful user experience. Your website will leave a lasting impression on visitors, enhancing your brand's credibility and professionalism.",
  },
  {
    title: "User-Centric Approach for Optimal Experience",
    description:
      "I prioritize user experience (UX) design, placing your visitors at the center of the design process. By conducting in-depth research and employing user testing techniques, I ensure that your website is intuitive, easy to navigate, and seamlessly guides users towards their goals. The result is a satisfying user journey that increases engagement and conversions.",
  },
  {
    title: "Mobile-Friendly Designs for Broad Accessibility",
    description:
      "In today's mobile-dominated landscape, having a responsive website is crucial. I specialize in creating mobile-friendly designs that adapt flawlessly across different devices and screen sizes. Your website will look and perform beautifully, whether accessed from a desktop, smartphone, or tablet, ensuring that you reach and engage your audience effectively.",
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

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Sarah Thompson",
    company: "produce-ui.com",
    rating: 5,
    testimonial: "Jeffery Cannon is a talented web designer with unmatched attention to detail and creative flair. He transformed my website and provided expert guidance throughout the process. I highly recommend him.",
    socialLinks: {
      linkedin: "#none",
      facebook: "#none",
      twitter: "#none"
    }
  },
  {
    id: 2,
    name: "Emily Roberts",
    company: "produce-ui.com",
    rating: 5,
    testimonial: "I'm thrilled with the website Jeffery Cannon designed for me. He created a visually stunning and user-friendly site. His expertise, responsiveness, and professionalism are outstanding. Highly recommend!",
    socialLinks: {
      linkedin: "#none",
      facebook: "#none",
      twitter: "#none"
    }
  },
  {
    id: 3,
    name: "Laura Adams",
    company: "produce-ui.com",
    rating: 5,
    testimonial: "Working with Jeffery Cannon on our web design project was excellent. His creativity, technical expertise, and understanding of user experience design significantly impacted our website's performance and engagement.",
    socialLinks: {
      linkedin: "#none",
      facebook: "#none",
      twitter: "#none"
    }
  },
  {
    id: 4,
    name: "Michael Chen",
    company: "produce-ui.com",
    rating: 3,
    testimonial: "Working with Jeffery Cannon on our web design project was excellent. His creativity, technical expertise, and understanding of user experience design significantly impacted our website's performance and engagement.",
    socialLinks: {
      linkedin: "#none",
      facebook: "#none",
      twitter: "#none"
    }
  }
];


export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "Can you work with clients remotely?",
    answer: "Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location."
  },
  {
    id: 2,
    question: "How long does it typically take to complete a web design project?",
    answer: "The timeline varies depending on the project's complexity and scope. A simple website typically takes 2-4 weeks, while more complex projects can take 6-8 weeks. I'll provide a detailed timeline during our initial consultation."
  },
  {
    id: 3,
    question: "Do you offer website maintenance services?",
    answer: "Yes, I offer comprehensive website maintenance services including regular updates, security monitoring, performance optimization, and content updates to keep your website running smoothly and securely."
  },
  {
    id: 4,
    question: "Can you optimize my website for search engines?",
    answer: "Absolutely! I implement SEO best practices including proper meta tags, structured data, mobile optimization, fast loading times, and clean code structure to help improve your website's search engine rankings."
  },
  {
    id: 5,
    question: "Can you integrate third-party tools or platforms into my website?",
    answer: "Yes, I can integrate various third-party tools and platforms such as payment gateways, CRM systems, email marketing tools, analytics platforms, and social media integrations to enhance your website's functionality."
  }
];

// Re-export types for use in admin components
export type { FAQItem, ProjectData };