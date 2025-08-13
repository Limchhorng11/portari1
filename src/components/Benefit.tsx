import React from 'react'
import { benefits } from '../utils/constants'

const Benefit = () => {
  return (
    <>
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
    </>
  )
}

export default Benefit