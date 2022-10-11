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
        
        <IndividualProduct title="vino" description="hola" url="google.com">
        </IndividualProduct>
    );
}

export {ProductFragment};
