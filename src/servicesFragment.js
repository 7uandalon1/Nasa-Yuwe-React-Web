import React from 'react';

import {BsBoxArrowDown} from 'react-icons/bs';

import 'swiper/react';

import 'swiper/css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { Scrollbar , Autoplay, Navigation, } from 'swiper';

import {Link} from 'react-scroll';

import {Services} from './services.js';

function animate(){
  const btn = document.querySelector('.a-button');
  btn.addEventListener('click', () => {
    btn.classList.remove('animate')
    setTimeout(() => btn.classList.add('animate'), 100);
  });
}

function ServiceFragment() {
    return (
        <React.Fragment>
        <section id='services-section'>
          <h1 className='title'>Servicios</h1>
         <Swiper
           breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
            },
          }}
                    slidesPerView={3}
                    spaceBetween={1}
                    slidePrevClass="swiper-prev-slide"
                    slideNextClass="swiper-next-slide"
                    effect={"fade"}
                    modules={[Autoplay, Navigation, Scrollbar]}
                    centeredSlides={true}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={1000}
                    scrollbar={{
                    hide: true,
                 }}

              className="services_slider"

                    
         >
            <div className='textContent' id='services-button-container'>
               <Link type="button" spy={true} offset={0} duration={250} className="a-button" to ='history-container'><BsBoxArrowDown></BsBoxArrowDown> <h2>Nuestra Historia</h2> </Link>
              </div>
          <SwiperSlide>
          <Services
              img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
              header='Web Development'
              subtitle='We can build your website from scratch or redevelop your existing website.'
              body='lorem ipsum'
            />
          </SwiperSlide>
          <SwiperSlide>
          <Services
          img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
          header='Web Development 2'
          subtitle='We can build your website from scratch or redevelop your existing website.'
          body='lorem ipsum'
          />
          </SwiperSlide>
          <SwiperSlide>
          <Services 
          img_holder={require('./img/servicios/adopta_un_arbol/177819528_494547941957756_8235950911964960558_n.jpg')}
          header='Web Development 3'
          subtitle='We can build your website from scratch or redevelop your existing website.'
          body='lorem ipsum'
          /> 
          </SwiperSlide>
          
          </Swiper> 
        </section>
        </React.Fragment>
    )
}
export {ServiceFragment}; 