import React, {FunctionComponent} from 'react';

import { Scrollbar , Autoplay, Navigation, } from 'swiper';

import {BsBoxArrowDown} from 'react-icons/bs';

import 'swiper/css';

// Import Swiper React components
import { Swiper} from "swiper/react";

// Import Swiper styles

import {Link} from 'react-scroll';

import { useEffect } from 'react';


import { Services } from '../Components/services'

import servicesAvailable from '../info/Services.json'



function animate(){
  const btn = document.querySelector('.a-button');
  btn.addEventListener('click', () => {
    btn.classList.remove('animate')
    setTimeout(() => btn.classList.add('animate'), 100);
  });
}

const renderSlide = ({id, ...rest}) => {

}


function ServiceFragment() {

 useEffect(() => {
  animate();
 });  

 var sliders = [];
 const serviceJSON = servicesAvailable.serviceJSON;



  return (
        <div>
        <section id='services-section'>
              <div className='textContent' id='services-button-container'>
               <Link type="button" spy={true} offset={0} duration={250} className="a-button" to ='history-container'><BsBoxArrowDown></BsBoxArrowDown> <h2>Nuestra Historia</h2> </Link>
              </div>
              
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
                    spaceBetween={0}
                    slidePrevClass="swiper-prev-slide"
                    slideNextClass="swiper-next-slide"
                    effect={"fade"}
                    modules={[Autoplay, Navigation, Scrollbar]}
                    centeredSlides={true}
                    loop={true}
                    autoplay={true}
                    autoplayTimeout={1000}
                    scrollbar={{
                    hide: false,
                 }}
         
              className="services_slider">

              
                {console.log(sliders)}

          </Swiper>



        </section>
        </div>
    )
}


  
export {ServiceFragment}; 


