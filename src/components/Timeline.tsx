import React from 'react'

const Timeline = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Milestones of My Career</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            A journey through the key moments that have shaped my professional growth and expertise in web design.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-500 h-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            {/* 2025 - Expanding Horizons (Right Side) */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm md:text-lg">★</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">Expanding Horizons</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    Embarking on a journey of growth and exploration, I immerse myself in cutting-edge technologies and innovative design trends.
                  </p>
                  <a href="#none" className="text-purple-600 hover:text-purple-800 font-medium mt-3 inline-block underline text-sm md:text-base">Read More</a>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full border-2 border-purple-600 shadow-lg z-10 relative"></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="flex flex-col items-start space-y-2">
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">2025</div>
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">Expanding Horizons</div>
                  <div className="hidden md:block w-8 h-0.5 bg-purple-500"></div>
                </div>
              </div>
            </div>

            {/* 2023 - An Entrepreneurial Pursuit (Left Side) */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">2023</div>
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">An Entrepreneurial Pursuit</div>
                  <div className="hidden md:block w-8 h-0.5 bg-yellow-500"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-yellow-500 rounded-full border-2 border-yellow-600 shadow-lg z-10 relative"></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm md:text-lg">★</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">An Entrepreneurial Pursuit</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    I'm delving into the world of entrepreneurship, driven by a passion for innovation and the opportunity to turn ideas into impactful solutions. I am committed to building a successful venture.
                  </p>
                  <a href="#none" className="text-yellow-600 hover:text-yellow-800 font-medium mt-3 inline-block underline text-sm md:text-base">Read More</a>
                </div>
              </div>
            </div>

            {/* 2022 - A Collaborative Partnership (Right Side) */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm md:text-lg">★</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">A Collaborative Partnership</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    I've formed a strategic partnership with a digital marketing agency, combining my web design expertise with their marketing prowess. This collaboration aims to deliver comprehensive solutions.
                  </p>
                  <a href="#none" className="text-green-600 hover:text-green-800 font-medium mt-3 inline-block underline text-sm md:text-base">Read More</a>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-green-600 shadow-lg z-10 relative"></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="flex flex-col items-start space-y-2">
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">2022</div>
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">A Collaborative Partnership</div>
                  <div className="hidden md:block w-8 h-0.5 bg-green-500"></div>
                </div>
              </div>
            </div>

            {/* 2020 - A Corporate Adventure (Left Side) */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">2020</div>
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">A Corporate Adventure</div>
                  <div className="hidden md:block w-8 h-0.5 bg-orange-500"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-orange-500 rounded-full border-2 border-orange-600 shadow-lg z-10 relative"></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm md:text-lg">★</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">A Corporate Adventure</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    I embarked on a corporate adventure, joining a leading technology company. This experience provided me with invaluable insights into large-scale projects and team collaboration.
                  </p>
                  <a href="#none" className="text-orange-600 hover:text-orange-800 font-medium mt-3 inline-block underline text-sm md:text-base">Read More</a>
                </div>
              </div>
            </div>

            {/* 2019 - Learning and Growing (Right Side) */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm md:text-lg">★</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">Learning and Growing</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    I'm working with an innovative design agency, where I'm constantly expanding my knowledge and refining my skills. This period is dedicated to continuous learning and professional development.
                  </p>
                  <a href="#none" className="text-pink-600 hover:text-pink-800 font-medium mt-3 inline-block underline text-sm md:text-base">Read More</a>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-pink-500 rounded-full border-2 border-pink-600 shadow-lg z-10 relative"></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="flex flex-col items-start space-y-2">
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">2019</div>
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">Learning and Growing</div>
                  <div className="hidden md:block w-8 h-0.5 bg-pink-500"></div>
                </div>
              </div>
            </div>

            {/* 2018 - A World of Possibilities (Left Side) */}
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="w-full md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                <div className="flex flex-col items-start md:items-end space-y-2">
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">2018</div>
                  <div className="bg-white px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm font-semibold text-gray-800">A World of Possibilities in 2018</div>
                  <div className="hidden md:block w-8 h-0.5 bg-blue-500"></div>
                </div>
              </div>
              <div className="hidden md:flex justify-center md:justify-start mb-4 md:mb-0">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-blue-500 rounded-full border-2 border-blue-600 shadow-lg z-10 relative"></div>
              </div>
              <div className="w-full md:w-1/2 md:pl-8">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white text-sm md:text-lg">★</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-800">A World of Possibilities in 2018</h3>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base">
                    I embarked on an exhilarating journey into the world of web design. Fueled by passion and creativity, I began exploring the endless possibilities of crafting engaging online experiences.
                  </p>
                  <a href="#none" className="text-blue-600 hover:text-blue-800 font-medium mt-3 inline-block underline text-sm md:text-base">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline

