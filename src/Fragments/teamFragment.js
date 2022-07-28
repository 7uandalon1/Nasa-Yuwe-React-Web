import React from "react";

import { Partner } from "../Components/partner.js";

import { Link } from "react-scroll";

import { BsBoxArrowDown } from "react-icons/bs";

import pedro from "./assets/img/team/pedro.png";

import sandra from "./assets/img/team/sandra.jpg";

import juan from "./assets/img/team/juan.jpg";

function TeamFragment(props) {

  return (
    <React.Fragment>
      <section id="team-section">
        <div id="team-row-container">
          <div id="team-title-container">
            <h1 id="team-title" className="title">
              Nuestro Equipo
            </h1>
          </div>
          <div className="team-container">
            <Partner
              title="Sandra Herrera"
              job="Representante Legal"
              img={sandra}
              facebook="https://web.facebook.com/sandramilena.herrera1"
              twitter="https://twitter.com/sandra_milena"
              instagram="https://www.instagram.com/herrera_sandramilena/"
              id="1"
              to="2"

              
            />
            <Partner
              title="Pedro Gamboa"
              job="Administrador"
              img={pedro}
              facebook="www.facebook.com/pegardod"
              twitter="#"
              instagram=""
              id="2"
              to="3"
            />
            <Partner
              title="Juan David Gamboa "
              job="Diseñador Gráfico y Developer"
              img={juan}
              facebook="https://www.facebook.com/sandra.milena.herrera"
              twitter="https://twitter.com/sandra_milena"
              instagram="https://www.instagram.com/sandra_milena"
              id="3"
              to="contact-us-container"
            />
          </div>
        </div>
        <Link
        style={{display:'none'}}
          type="button"
          class="btn a-button team-button"
          to="contact-us-container"
        >
          <BsBoxArrowDown size={50}></BsBoxArrowDown> Contactanos
        </Link>
      </section>
    </React.Fragment>
  );
}
export { TeamFragment };
