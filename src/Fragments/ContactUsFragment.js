import React from "react";

import { BsWhatsapp } from "react-icons/bs";

function ContactUsFragment() {
  return (
    <section className="ContactUsFragment-section">
      <div className="ContactUsFragment-container">
        <h1>Contactanos</h1>
        <div className="info-container">
          <button className="btn btn-success">
            <BsWhatsapp></BsWhatsapp>
                Escribenos
          </button>
          <div>
            <h3>Email: info@nasayuwe.com.co</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
export { ContactUsFragment };
