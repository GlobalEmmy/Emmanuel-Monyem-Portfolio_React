import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpeg"
import AVTR2 from "../../assets/avatar2.png"

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonial__container'
           // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation={{navigation: true}}
      pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='avatar'/>
            </div>
            <h5>Co-Founder JOSTOM, TENOYLA & COMPANY</h5>
            <small className='client__review'>
            "I love working collaboratively with you, you're always so authentic and enthusiastic. 
            So glad you've had some great feedback from other clients too as it's so deserved.”
          
            </small>
          
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt=''/>
            </div>
            <h5>CHIEF EXECUTIVE OFFICER</h5>
            <small>DEFTIFY - A cypto-based Project.</small>
            <small className='client__review'>
            "We were very impressed with the all aspects of our new website. We would 
            highly reccomend Emmanuel to anyone looking to build a new website."

            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials