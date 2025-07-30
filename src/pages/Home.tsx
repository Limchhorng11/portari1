import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import topSectionImage from '../assets/images/im_top_sect.png';
import { SkillbySect } from '../utils/constants';
import { benefits } from '../utils/constants';

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

  const handleViewProjects = () => {
    navigate('/projects');
  };

  const handleContactMe = () => {
    navigate('/contact');
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="hero_section">
        <div className="inner">
          <div className="hero_content">
            <div className="hero_left">
              <div className="hello_bubble">
                <span>Hello There 👋</span>
              </div>
              <h1 className="hero_title">Jeffery Cannon Welcome's You!</h1>
              <p className="hero_description">
                I am a passionate and experienced web designer, dedicated to creating 
                visually stunning and highly functional websites. Explore my portfolio 
                to see the power of effective design in action
              </p>
              <div className="hero_buttons">
  <button
    type="button"
    className="bt_book_call"
    onClick={handleContactMe}
  >
    <span>Book a Call</span>
  </button>
  <button
    type="button"
    className="bt_view_portfolio"
    onClick={handleViewProjects}
  >
    <span>View Portfolio →</span>
  </button>

  
</div>
              <div className="hero_stats">
                <div className="stat_item">
                  <div className="stat_number">55<span>+</span></div>
                  <div className="stat_label">Completed Projects</div>
                </div>
                <div className="stat_item">
                  <div className="stat_number">20<span>+</span></div>
                  <div className="stat_label">Happy Customers</div>
                </div>
                <div className="stat_item">
                  <div className="stat_number">08<span>+</span></div>
                  <div className="stat_label">Years of Experience</div>
                </div>
              </div>
            </div>
            <div className="hero_right">
              <div className="hero_image_wrapper">
                <img src={topSectionImage} alt="Jeffery Cannon" className="hero_image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Examples Section */}
      <section className='pt-12'>
      <div className='text-center mb-6'>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Creative Skills</h2>
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

      {/* Skills Preview */}
     <section className="py-16">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold mb-2">Benefits</h2>
      <p className="text-gray-600">
        By choosing my web design service, you'll enjoy the following benefits
      </p>
    </div>
    <div className="grid grid-cols-2 gap-6">
      {/* Column 1: 2 boxes stacked */}
      <div className="flex flex-col gap-6">
        {benefits.slice(0, 2).map((benefit, idx) => (
          <div
            key={idx}
            className="bg-[#F7F6F3] rounded-xl p-8 flex flex-col items-start text-left"
          >
            <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
            <p className="text-gray-500 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
      {/* Column 2: 3 boxes stacked */}
      <div className="flex flex-col gap-6">
        {benefits.slice(2, 5).map((benefit, idx) => (
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
  </div>
</section>
    </div>
  );
};

export default Home; 