import React from "react";

import {ReactComponent as Svg1} from './assets/svg/undraw_nature_benefits_re_kk70.svg'

import {ReactComponent as Svg2} from './assets/svg/undraw_country_side_re_0dou.svg'
function HistoryFragment() {


  return (
    <React.Fragment>
      
      <section id="history-section">
        <div className="history-container">

            <h1 id="history-title">Nuestra Historia</h1>
            <div className='paragraph'>
              <div>
                <p>Nasa Yuwe es una reserva natural de la sociedad civil y centro agrotur&iacute;stico que nace en el a&ntilde;o de 2017 como una iniciativa familiar que propende por el cuidado y preservaci&oacute;n de los ecosistemas end&eacute;micos de Serran&iacute;a de las Minas, fomentando la cultura de la sostenibilidad y sustentabilidad.</p>
              </div>
              <div>
                <Svg2 className="paragraph-svg"></Svg2>
              </div>
            </div>

          <div className="paragraph-inverted">
            <div>
              <p>En Nasa Yuwe resaltamos la cultura, las costumbres, las tradiciones de las etnias Nasa que han habitado ancestralmente el macizo colombiano&nbsp;&nbsp;</p>
            </div>
            <div>
              <Svg1 className='paragraph-svg'></Svg1>
            </div>
          </div>

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
