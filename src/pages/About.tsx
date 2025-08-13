import React from 'react';

import ShowSkill from '../components/Showskill';
import Timeline from '../components/Timeline';

import imSectionTop from '../assets/images/im_top_sect.png';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className=" py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left - Portrait */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src={imSectionTop} 
                  alt="Jeffery Cannon - Web Designer" 
                  className="w-full max-w-md rounded-2xl shadow-lg"
                />
              </div>
              
            </div>
            
            {/* Right - Content */}
            <div className="space-y-6">
              {/* Welcome Badge */}
              <div className="inline-block bg-gray-50 px-4 py-2 rounded-lg">
                <span className="text-gray-700 text-sm font-medium">
                  Welcome to the world of captivating web design!
                </span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-blue-600 bg-clip-text text-transparent">
                I'm Limchhorng.
              </h1>
              
              {/* Description */}
              <p className="leading-relaxed text-lg ">
                A skilled web designer with a passion for creating visually stunning and user-friendly websites. 
                With a keen eye for detail and a commitment to excellence, I specialize in crafting online 
                experiences that leave a lasting impression. From concept to launch, I collaborate closely 
                with clients to bring their visions to life and ensure their digital presence stands out 
                from the crowd. With my expertise and dedication, I am here to help you elevate your online 
                presence and make a powerful impact in the digital landscape.
              </p>
              
              {/* Statistics */}
              <div className="pt-6">
                <div className=" border-t border-purple-200"></div>
                <div className="grid grid-cols-3 gap-8 mt-3">
                  <div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
                    <div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
                      55<span className="text-blue-600 text-xl lg:text-2xl">+</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      Completed Projects
                    </div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
                    <div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
                      20<span className="text-blue-600 text-xl lg:text-2xl">+</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      Happy Customers
                    </div>
                  </div>
                  <div className="text-center transition-all duration-300 hover:-translate-y-1 flex-1">
                    <div className="text-2xl lg:text-3xl font-bold text-black mb-1 flex items-center justify-center gap-1">
                      08<span className="text-blue-600 text-xl lg:text-2xl">+</span>
                    </div>
                    <div className="text-xs lg:text-sm text-gray-600">
                      Years of Experience
                    </div>
                  </div>
                </div>
                <div className="mt-6 border-t border-purple-200"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Timeline/>
      <ShowSkill/>
    </div>
  );
};

export default About; 