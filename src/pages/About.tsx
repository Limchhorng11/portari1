import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Me</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Who I Am</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a passionate full-stack developer with a love for creating beautiful, 
              functional, and user-friendly web applications. With expertise in modern 
              technologies like React, TypeScript, and Node.js, I bring ideas to life 
              through clean code and intuitive design.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with the 
              developer community.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">My Journey</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold">2023 - Present</h3>
                <p className="text-gray-600">Senior Full-Stack Developer</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="font-semibold">2021 - 2023</h3>
                <p className="text-gray-600">Frontend Developer</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-semibold">2020 - 2021</h3>
                <p className="text-gray-600">Junior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>React & React Native</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Next.js</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 