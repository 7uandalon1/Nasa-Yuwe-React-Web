import React from "react";

import { BsWhatsapp } from "react-icons/bs";

import { ReactComponent as Svg3 } from "./assets/svg/undraw_contact_us_re_4qqt.svg";

function ContactUsFragment() {
  return (
    <section className="ContactUsFragment-section">
      <div className="ContactUsFragment-container">
        <h1>Contactanos</h1>
        <div className="contactUsFragment">
          <Svg3></Svg3>
          <div className="info-container">
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
            />
              <a
                href="https://api.whatsapp.com/send?phone=573229108468&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios."
                class="float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-whatsapp my-float"></i>
              </a>
            
            <div>
              <h3>Email: info@nasayuwe.com.co</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { ContactUsFragment };
