import React from 'react'
import { SkillbySect } from '../utils/constants'

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
const Showskill = () => {
  return (
    <>
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
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500 text-white text-3xl shadow-lg">
                  <img src={iconMap[skill.icon]} alt={skill.title} className="w-8 h-8" />
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
              <p className="text-gray-500 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Showskill