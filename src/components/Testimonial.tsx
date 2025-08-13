import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { SwiperRef } from 'swiper/react';
import { TESTIMONIALS_DATA } from '../utils/constants';

import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <>
     {/* Testimonials Section */}
     <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What My Clients say About Me</h2>
            <p className="text-gray-600 text-lg">
              Here's what some of my satisfied clients have to say about my work
            </p>
          </div>
          
          <div className="flex justify-between items-center mb-4 border-b border-[#E1DBD1] pb-4">
            <div className="text-gray-600 text-sm">37 Total Reviews</div>
            <div className="flex gap-2">
                             <button 
                 className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors swiper-button-prev-custom"
                 onClick={() => swiperRef.current?.swiper?.slidePrev()}
               >
                 <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                 </svg>
               </button>
               <button 
                 className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors swiper-button-next-custom"
                 onClick={() => swiperRef.current?.swiper?.slideNext()}
               >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={false}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="testimonial-swiper"
          >
            {TESTIMONIALS_DATA.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-[#F7F6F3] rounded-xl p-6 mt-4 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={testimonial.socialLinks.linkedin} className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors">
                        <img src={"/img/icons/linkedin.svg"} alt="LinkedIn" className="w-6 h-6" />
                      </a>
                      <a href={testimonial.socialLinks.facebook} className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors">
                      <img src={"/img/icons/facebook.svg"} alt="LinkedIn" className="w-6 h-6" />
                      </a>
                      <a href={testimonial.socialLinks.twitter} className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center hover:bg-purple-200 transition-colors">
                      <img src={"/img/icons/twitter.svg"} alt="LinkedIn" className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {testimonial.testimonial}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Testimonial