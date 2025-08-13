import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


import placeholderImage from '../assets/images/im_thaumnail01.png';

import { PROJECTS_DATA } from '../utils/constants';

const Portfolio: React.FC = () => {
  const navigate = useNavigate();

  // State for tracking selected thumbnails for each project
  const [selectedThumbs, setSelectedThumbs] = useState(() => {
    const initialState: Record<string, number> = {};
    PROJECTS_DATA.forEach(project => {
      initialState[project.id] = 1;
    });
    return initialState;
  });

  const handleThumbClick = (project: string, thumbIndex: number) => {
    setSelectedThumbs(prev => ({
      ...prev,
      [project]: thumbIndex
    }));
  };

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <>
          {/* My Works Portfolio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
                     <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-800 mb-4">My Works</h2>
             <p className="text-gray-600 text-lg">
               Explore my latest website design projects and creative solutions
             </p>
           </div>
          
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
             {PROJECTS_DATA.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ">
                 <h3 className="text-md font-semibold text-gray-800 mb-6">{project.title}</h3>
                                   <div className="relative mb-6">
                    <div 
                      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl h-64 flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => handleProjectClick(project.id)}
                    >
                      <div className="text-center w-full h-full relative object-contain">
                        <img 
                          src={project.thumbs.find(t => t.id === selectedThumbs[project.id])?.image || placeholderImage}
                          alt={project.thumbs.find(t => t.id === selectedThumbs[project.id])?.label || project.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <svg className="w-8 h-8 text-gray-600 bg-white rounded-full p-1 shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                <div className="flex gap-2">
                   {project.thumbs.slice(0, 4).map((thumb) => (
                     <div 
                       key={thumb.id}
                       className={`bg-gradient-to-br ${thumb.color} rounded-lg h-[80px] w-1/4 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 ${
                         selectedThumbs[project.id] === thumb.id ? 'scale-110 ring-2 ring-blue-500 shadow-lg' : ''
                       }`}
                       onClick={() => handleThumbClick(project.id, thumb.id)}
                     >
                       <img 
                         src={thumb.image} 
                         alt={thumb.label}
                         className="w-full h-full object-cover rounded-lg "
                         onError={(e) => {
                           // Fallback to text if image fails to load
                           const target = e.target as HTMLImageElement;
                           target.style.display = 'none';
                           const fallback = target.nextElementSibling as HTMLElement;
                           if (fallback) fallback.style.display = 'flex';
                         }}
                       />
                       <span 
                         className={`text-xs ${thumb.textColor} font-medium hidden`}
                         style={{ display: 'none' }}
                       >
                         {thumb.label}  
                       </span>
                     </div>
                   ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <button
              type="button"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg border-none cursor-pointer font-medium transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg"
              onClick={handleViewProjects}
            >
              <span>View All Projects →</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;