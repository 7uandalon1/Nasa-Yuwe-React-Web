import React from "react";

import "swiper/react";

import "swiper/css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import { EffectFade, Autoplay } from "swiper";

import "swiper/css/navigation";

setTimeout(animate, 1000);

function animate() {
  const btn = document.querySelector(".a-button");
  btn.addEventListener("click", () => {
    btn.classList.remove("animate");
    setTimeout(() => btn.classList.add("animate"), 100);
  });
}

function Placeholder() {
  return (
    <section className="principal_slider-s">
      <div className="swiper-container" id="swiper-container">
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
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1635724258755.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1635724266889.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1644160594951.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1652800183058.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1652800497970.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1652800583277.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/FB_IMG_1653408600082.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20210815_064948.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20210815_065231.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20210815_100327.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220101_151637.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220108_172217_1.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220109_163341.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220414_170219.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220416_123513.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220521_155210.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220523_074655.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220523_165422.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_071026.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_071125.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_071134.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_071155.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_080115.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_131354.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/IMG_20220605_131436.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/PXL_20220522_091609904.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/PXL_20220523_072137806.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/PXL_20220523_072637773.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/PXL_20220523_164726696.jpg")}
              alt=""
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              className="slider"
              src={require("./assets/img/servicios/alojamiento_rural/PXL_20220605_075744648.jpg")}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export { Placeholder };
