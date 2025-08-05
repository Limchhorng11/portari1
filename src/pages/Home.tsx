import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import topSectionImage from '../assets/images/im_top_sect.png';
import placeholderImage from '../assets/images/im_thaumnail.png';

import { SkillbySect } from '../utils/constants';
import { benefits } from '../utils/constants';
import { PROJECTS_DATA } from '../utils/constants';

// Import all PNGs
import ic_cs01 from '../assets/icons/ic_cs01.png';
import ic_cs02 from '../assets/icons/ic_cs02.png';
import ic_cs03 from '../assets/icons/ic_cs03.png';
import ic_cs04 from '../assets/icons/ic_cs04.png';
import ic_cs05 from '../assets/icons/ic_cs05.png';
import ic_cs06 from '../assets/icons/ic_cs06.png';

// Map icon string to imported image
const iconMap: Record<string, string> = {
  ic_cs01,
  ic_cs02,
  ic_cs03,
  ic_cs04,
  ic_cs05,
  ic_cs06,
};

const Home: React.FC = () => {
  const navigate = useNavigate();
  
  // State for tracking selected thumbnails for each project
  const [selectedThumbs, setSelectedThumbs] = useState(() => {
    const initialState: Record<string, number> = {};
    PROJECTS_DATA.forEach(project => {
      initialState[project.id] = 1;
    });
    return initialState;
  });

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  const handleThumbClick = (project: string, thumbIndex: number) => {
    setSelectedThumbs(prev => ({
      ...prev,
      [project]: thumbIndex
    }));
  };

  return (
    <div className="p-5">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-15 items-center">
            <div className="order-2 lg:order-1 pr-0 lg:pr-10">
              <div className="inline-block bg-white rounded-2xl px-4 py-2 mb-5 text-sm text-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span>Hello There 👋</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-5 leading-tight bg-gradient-to-r from-black to-purple-600 bg-clip-text text-transparent">
                Jeffery Cannon Welcome's You!
              </h1>
              <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8">
                I am a passionate and experienced web designer, dedicated to creating 
                visually stunning and highly functional websites. Explore my portfolio 
                to see the power of effective design in action
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-10">
                <button
                  type="button"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg border-none cursor-pointer font-medium transition-all duration-300 relative overflow-hidden hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
                  onClick={handleContactMe}
                >
                  <span>Book a Call</span>
                </button>
                <button
                  type="button"
                  className="text-purple-600 border-none bg-transparent cursor-pointer font-medium transition-all duration-300 relative hover:text-purple-700 hover:translate-x-1 w-full sm:w-auto text-center"
                  onClick={handleViewProjects}
                >
                  <span>View Portfolio →</span>
                </button>
              </div>
              <div className="flex justify-between gap-4 sm:gap-8 bg-white rounded-xl p-4 shadow-lg">
                <div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
                    55<span className="text-purple-600 text-xl lg:text-2xl">+</span>
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    Completed Projects
                  </div>
                </div>
                <div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
                    20<span className="text-purple-600 text-xl lg:text-2xl">+</span>
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    Happy Customers
                  </div>
                </div>
                <div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
                  <div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
                    08<span className="text-purple-600 text-xl lg:text-2xl">+</span>
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600">
                    Years of Experience
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative bg-gray-900 rounded-xl overflow-hidden h-80 lg:h-screen">
              <div className="absolute top-0 right-0 w-full h-full bg-gray-900 overflow-hidden">
                <img 
                  src={topSectionImage} 
                  alt="Jeffery Cannon" 
                  className="w-full h-full object-cover relative z-10 transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Examples Section */}
      <section className='pt-32'>
        <div className='text-center mb-6'>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Creative Skills</h2>
          <p className="text-gray-600 mb-4">
            As a web designer, I possess a diverse set of skills and expertise to bring your web design visions to life
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {SkillbySect.map((skill, idx) => (
            <div key={idx} className="bg-[#F7F6F3] rounded-xl p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 text-white text-3xl shadow-lg">
                  <img src={iconMap[skill.icon]} alt={skill.title} className="w-8 h-8" />
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-gray-500 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className=" py-16">
          <div className="max-w-7xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Benefits</h2>
              <p className="text-gray-600">
                By choosing my web design service, you'll enjoy the following benefits
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-[#F7F6F3] rounded-xl p-8 flex flex-col items-start text-left"
                >
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-500 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      {/* My Works Portfolio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">My Works</h2>
            <p className="text-gray-600 text-lg">
              Here's what some of my satisfied clients have to say about my work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {PROJECTS_DATA.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <div className="relative mb-4">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl h-48 flex items-center justify-center overflow-hidden">
                    <div className="text-center w-full h-full relative">
                      <img 
                        src={project.thumbs.find(t => t.id === selectedThumbs[project.id])?.image || placeholderImage}
                        alt={project.thumbs.find(t => t.id === selectedThumbs[project.id])?.label || project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                    </svg>
                  </div>
                </div>
                <div className="thumbnail-swiper-container">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={8}
                    slidesPerView={4}
                    navigation={false}
                    pagination={{ clickable: true }}
                    className="thumbnail-swiper"
                  >
                    {project.thumbs.map((thumb) => (
                      <SwiperSlide key={thumb.id}>
                        <div 
                          className={`bg-gradient-to-br ${thumb.color} rounded-lg h-16 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                            selectedThumbs[project.id] === thumb.id ? 'scale-105' : ''
                          }`}
                          onClick={() => handleThumbClick(project.id, thumb.id)}
                        >
                          <img 
                            src={thumb.image} 
                            alt={thumb.label}
                            className="w-full h-full object-cover rounded-lg"
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
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center">
            <button
              type="button"
              className="bg-purple-600 text-white px-8 py-4 rounded-lg border-none cursor-pointer font-medium transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 hover:shadow-lg"
              onClick={handleViewProjects}
            >
              <span>View All Projects →</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 