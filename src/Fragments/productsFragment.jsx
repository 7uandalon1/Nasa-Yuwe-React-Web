import React from "react";
import { Scrollbar, Autoplay, Navigation } from "swiper";
import "swiper/css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Services } from "../Components/services";

import {IndividualProduct} from '../Components/product.js'


function ProductFragment() {
    return (
        <section id="products-section">
        <IndividualProduct title="vino" description="hola" url="https://www.google.com">
        </IndividualProduct>
        </section>
    );
}

export {ProductFragment};
