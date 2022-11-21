import React from "react";

import {Coffee} from '../Components/coffee.js'

import {IndividualProduct} from '../Components/product.js'


function ProductFragment() {
    return (
        <section id="products-section">
            <IndividualProduct title="Vino de cereza de café" description="hola" url="https://www.google.com">
                
            </IndividualProduct>
            <IndividualProduct title="Café molido" description="Delicioso café molido cosechado por manos expertas en el tratado del café, con cada taza apoyas la economía de campesinos y recolectores." url="https://www.google.com">
            <Coffee></Coffee>
            </IndividualProduct>
            <IndividualProduct title="Café en grano" description="hola" url="https://www.google.com"/>       
        </section>
    );
}

export {ProductFragment};
