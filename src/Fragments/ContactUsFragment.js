import React from "react";

import { ReactComponent as Svg3 } from "./assets/svg/undraw_contact_us_re_4qqt.svg";

function ContactUsFragment() {
  return (
    <section className="ContactUsFragment-section">
      <div className="ContactUsFragment-container">
        <h1>Contactanos</h1>
        <div className="contactUsFragment">
          <Svg3></Svg3>
          <div className="info-container">

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
