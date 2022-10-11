import React from "react";

import { Scrollbar, Autoplay, Navigation } from "swiper";



import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles


import { Services } from "../Components/services";


function ServiceFragment() {


  return (
    <div>
      <section id="services-section">
        <div className="textContent" id="services-button-container">

        </div>

        <h1 className="title">Servicios</h1>
        <Swiper
          observer={true}
          slidesPerView={1}
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
          className="services_slider"
        >
          <SwiperSlide>
            <Services
              header='Alojamiento Rural'
              body='Te brindaremos un confortable descanso para que disfutes de un despertar con el cantico de las aves.'
              img_holder={require('./assets/img/portfolio/alo.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Zona de Camping'
              body='Te ofrecemos un espacio para que campes con tu pareja o amigos al rededor del calor de una fogata.'
              img_holder={require('./assets/img/portfolio/CAM.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Ciclo Montañismo'
              body='Podrás disfrutar de tu bicicleta en una travesía dirigida por nuestros senderos y paisajes mágicos.'
              img_holder={require('./assets/img/portfolio/CICL.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Turismo Étnico'
              body='Tendrás la experiencia de conocer la cultura y las tradiciones, y artesanías de la comunidad Nasa que habita la zona.'
              img_holder={require('./assets/img/portfolio/CUL.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Avistamiento de Aves'
              body='Te ofrecemos una ruta guiada de  avistamiento de aves en el parque natural Serranía de las Minas.'
              img_holder={require('./assets/img/portfolio/AVI.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Gastronomía'
              body='podrás disfrutar de un delicioso plato típico de asado huilense, aprender a elaborar pan y bizcochuelos en nuestros hornos y muchas delicias más.'
              img_holder={require('./assets/img/portfolio/gas.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='La Ruta del Café'
              body='Te guiaremos por un recorrido en la recolección, despulpado y tostión artesanal además te enseñaremos todo acerca del café y su cata'
              img_holder={require('./assets/img/portfolio/RDC.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Senderismo'
              body='Te guiaremos por una caminata en donde podrás disfrutar de los paisajes, flora y fauna de la zona'
              img_holder={require('./assets/img/portfolio/SEN.webp')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Adopta un Árbol'
              body='En Alojamiento Rural Nasa Yuwe podrás adoptar un árbol el cual lo sembraremos y cuidaremos por ti. Quedará un registro fotográfico y tus datos en la web (opcional). '
              img_holder={require('./assets/img/portfolio/ARB.webp')}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export { ServiceFragment };
