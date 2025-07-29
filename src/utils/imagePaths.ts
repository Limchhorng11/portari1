// Image paths for the portfolio
export const IMAGE_PATHS = {
  // Project images
  projects: {
    ecommerce: '/img/projects/ecommerce-platform.jpg',
    taskManager: '/img/projects/task-manager.jpg',
    portfolio: '/img/projects/portfolio-website.jpg',
    placeholder: '/img/projects/placeholder.jpg',
  },
  
  // Icons
  icons: {
    github: '/img/icons/github.svg',
    linkedin: '/img/icons/linkedin.svg',
    twitter: '/img/icons/twitter.svg',
    externalLink: '/img/icons/external-link.svg',
    email: '/img/icons/email.svg',
    location: '/img/icons/location.svg',
    work: '/img/icons/work.svg',
  },
  
  // Backgrounds
  backgrounds: {
    hero: '/img/backgrounds/hero-bg.jpg',
    pattern: '/img/backgrounds/pattern.svg',
  },
  
  // Profile images
  profile: {
    avatar: '/img/avatars/profile.jpg',
  },
};

// Helper function to get project image
export const getProjectImage = (projectId: string): string => {
  const projectImages: Record<string, string> = {
    '1': IMAGE_PATHS.projects.ecommerce,
    '2': IMAGE_PATHS.projects.taskManager,
    '3': IMAGE_PATHS.projects.portfolio,
  };
  
  return projectImages[projectId] || IMAGE_PATHS.projects.placeholder;
}; 