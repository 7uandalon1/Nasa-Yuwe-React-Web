import React from 'react';

import 'swiper/react';

import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { EffectFade, Autoplay} from 'swiper';

import {BsBoxArrowDown} from 'react-icons/bs';

import {Link} from 'react-scroll';

setTimeout(animate, 1000);


function animate(){
  const btn = document.querySelector('.a-button');
  btn.addEventListener('click', () => {
    btn.classList.remove('animate')
    setTimeout(() => btn.classList.add('animate'), 100);
  });
}



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
                        <img className='slider' src={require('./img/servicios/alojamiento_rural/73285021_120547206024500_1614865251839246336_n.jpg')} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img className='slider' src={require("./img/servicios/alojamiento_rural/150671106_450888232990394_1776307662931618522_n.jpg")} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img className='slider' src={require("./img/servicios/alojamiento_rural/150584785_450888229657061_3218023440370084312_n.jpg")} />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img className='slider' src={require("./img/servicios/alojamiento_rural/151111150_450887062990511_2353668776704890955_n.jpg")} />
                      </SwiperSlide>
              </Swiper>
              <div className='textContent' id='principal_slider-text'>
               <Link type="button" spy={true} offset={0} duration={250} className="a-button" to ='services-section'><BsBoxArrowDown></BsBoxArrowDown> <h2>Nuestros Servicios</h2></Link>
              </div>
              </div>
              
          </section>
    )
}
export {Placeholder};