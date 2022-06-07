import React from 'react';

import 'swiper/react';

import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { EffectFade, Autoplay} from 'swiper';

function Placeholder(){
    return(
        <section className='principal_slider-s'>
              <div className='swiper-container' id='swiper-container' >
              
              <Swiper
                      spaceBetween={30}
                      effect={"fade"}
                      modules={[EffectFade, Autoplay]}
                      centeredSlides={true}
                      loop={true}
                      autoplay={true}
                      autoplayTimeout={1000}
                      autoplayDisableOnInteraction={false}

                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                      </SwiperSlide>
              </Swiper>
              <div className='textContent' id='principal_slider-text'>
                <h1>!Es un placer conocerte¡</h1>
                <button type="button" class="btn btn-primary btn-lg">Button</button>
              </div>
              </div>
              
          </section>
    )
}
export {Placeholder};