import React from "react";

import { Scrollbar, Autoplay, Navigation } from "swiper";

import { BsBoxArrowDown } from "react-icons/bs";

import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { useEffect } from "react";

import { Services } from "../Components/services";


function animate() {
  const btn = document.querySelector(".a-button");
  btn.addEventListener("click", () => {
    btn.classList.remove("animate");
    setTimeout(() => btn.classList.add("animate"), 100);
  });
}

function ServiceFragment() {
  useEffect(() => {
    animate();
  });

  return (
    <div>
      <section id="services-section">
        <div className="textContent" id="services-button-container">

        </div>

        <h1 className="title">Servicios</h1>
        <Swiper
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
          slidesPerView={2}
          spaceBetween={0}
          slidePrevClass="swiper-prev-slide"
          slideNextClass="swiper-next-slide"
          effect={"fade"}
          modules={[Autoplay, Navigation, Scrollbar]}
          centeredSlides={true}
          loop={true}
          autoplay={true}
          autoplayTimeout={500}
          scrollbar={{
            hide: false
          }}
          className="services_slider"
        >
          <SwiperSlide>
            <Services
              header='Alojamiento Rural'
              body='Te brindaremos un confortable descanso para que disfutes de un despertar con el cantico de las aves.'
              img_holder={require('./assets/img/portfolio/alo.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Zona de Camping'
              body='Te ofrecemos un espacio para que campes con tu pareja o amigos al rededor del calor de una fogata.'
              img_holder={require('./assets/img/portfolio/CAM.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Ciclo Montañismo'
              body='Podrás disfrutar de tu bicicleta en una travesía dirigida por nuestros senderos y paisajes mágicos.'
              img_holder={require('./assets/img/portfolio/CICL.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Turismo Étnico'
              body='Tendrás la experiencia de conocer la cultura y las tradiciones, y artesanías de la comunidad Nasa que habita la zona.'
              img_holder={require('./assets/img/portfolio/CUL.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Avistamiento de Aves'
              body='Te ofrecemos una ruta guiada de  avistamiento de aves en el parque natural Serranía de las Minas.'
              img_holder={require('./assets/img/portfolio/AVI.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Gastronomía'
              body='podrás disfrutar de un delicioso plato típico de asado huilense, aprender a elaborar pan y bizcochuelos en nuestros hornos y muchas delicias más.'
              img_holder={require('./assets/img/portfolio/gas.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='La Ruta del Café'
              body='Te guiaremos por un recorrido en la recolección, despulpado y tostión artesanal además te enseñaremos todo acerca del café y su cata'
              img_holder={require('./assets/img/portfolio/RDC.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Senderismo'
              body='Te guiaremos por una caminata en donde podrás disfrutar de los paisajes, flora y fauna de la zona'
              img_holder={require('./assets/img/portfolio/SEN.jpg')}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Services
              header='Adopta un Árbol'
              body='En Alojamiento Rural Nasa Yuwe podrás adoptar un árbol el cual lo sembraremos y cuidaremos por ti. Quedará un registro fotográfico y tus datos en la web (opcional). '
              img_holder={require('./assets/img/portfolio/ARB.jpg')}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export { ServiceFragment };
