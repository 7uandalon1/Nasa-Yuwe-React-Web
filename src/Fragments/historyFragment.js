import React from "react";

import {Swiper, SwiperSlide} from 'swiper/react'

import { Link } from "react-scroll";

import { BsBoxArrowDown, BsArrowBarDown } from "react-icons/bs";

import { Scrollbar, Autoplay, Navigation } from "swiper";

function HistoryFragment() {


  return (
    <React.Fragment>
      <section id="history-section">
        <div className="history-container">

            <h1 id="history-title">Nuestra Historia</h1>
            <p>Nasa Yuwe es una reserva natural de la sociedad civil y centro agrotur&iacute;stico que nace en el a&ntilde;o de 2017 como una iniciativa familiar que propende por el cuidado y preservaci&oacute;n de los ecosistemas end&eacute;micos de Serran&iacute;a de las Minas, fomentando la cultura de la sostenibilidad y sustentabilidad.</p>
<p>En Nasa Yuwe resaltamos la cultura, las costumbres, las tradiciones de las etnias Nasa que han habitado ancestralmente el macizo colombiano&nbsp;&nbsp;</p>

        </div>
{/*         <Swiper 
        breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3
            }
          }}
          observer={true}
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
            hide: false
          }}
          className="history_slider">
          <SwiperSlide>

          </SwiperSlide>
        </Swiper> */}
      </section>
    </React.Fragment>
  );
}
export { HistoryFragment };
