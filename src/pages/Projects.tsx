import React from 'react';
import { Project } from '../types';
import { SITE_CONFIG } from '../utils/constants';
import { IMAGE_PATHS } from '../utils/imagePaths';

// Using the Project interface to define our data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: '../assets/images/im_top_sect',
    githubUrl: 'https://github.com/john-doe/ecommerce',
    liveUrl: 'https://ecommerce-demo.com'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    image: '',
    githubUrl: 'https://github.com/john-doe/task-manager',
    liveUrl: 'https://task-manager-demo.com'
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern design principles.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '',
    githubUrl: 'https://github.com/john-doe/portfolio',
    liveUrl: 'https://your-portfolio.com'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">My Projects</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a unique 
          challenge and learning opportunity in my development journey.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* Project Image with fallback */}
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.currentTarget.src = IMAGE_PATHS.projects.placeholder;
                }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <img src={IMAGE_PATHS.icons.github} alt="GitHub" className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 font-medium flex items-center"
                  >
                    <img src={IMAGE_PATHS.icons.externalLink} alt="External Link" className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to See More?</h2>
        <p className="text-gray-600 mb-6">
          I'm constantly working on new projects and improving my skills. 
          Check out my GitHub for more of my work!
        </p>
        <a 
          href={SITE_CONFIG.github}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors inline-flex items-center"
        >
          <img src={IMAGE_PATHS.icons.github} alt="GitHub" className="w-5 h-5 mr-2" />
          <span>View GitHub Profile</span>
        </a>
      </section>
    </div>
  );
};

export default Projects; 