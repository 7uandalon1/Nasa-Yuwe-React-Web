var servicesAvailable = {
  servicesJSON: {
    Alojamiento_Rural: {
      title: "Alojamiento Rural",
      description:
        "Te brindaremos un confortable descanso para que disfutes de un despertar con el cantico de las aves.",
      img: "alo.jpg"
    },
    Zona_De_Camping: {
      title: "Alojamiento Rural",
      description:
        "Te ofrecemos un espacio para que campes con tu pareja o amigos al rededor del calor de una fogata.",
      img: "../assets/img/portfolio/alo.jpg"
    },
    Ciclo_Montañismo: {
      title: "Alojamiento Rural",
      description:
        "Podrás disfrutar de tu bicicleta en una travesía dirigida por nuestros senderos y paisajes mágicos.",
      img: "../assets/img/portfolio/alo.jpg"
    },
    Turismo_Étnico: {
      title: "Alojamiento Rural",
      description:
        "Tendrás la experiencia de conocer la cultura y las tradiciones, y artesanías de la comunidad Nasa que habita la zona.",
      img: "../assets/img/portfolio/alo.jpg"
    },
    avistamiento_de_aves: {
      title: "Alojamiento Rural",
      description:
        "Te ofrecemos una ruta guiada de  avistamiento de aves en el parque natural Serranía de las Minas.",
      img: "../assets/img/portfolio/alo.jpg"
    },
    Gastronomía: {
      title: "Alojamiento Rural",
      description:
        "podrás disfrutar de un delicioso plato típico de asado huilense, aprender a elaborar pan y bizcochuelos en nuestros hornos y muchas delicias más.",
      img: "../assets/img/portfolio/alo.jpg"
    },
    la_ruta_del_café: {
      title: "Alojamiento Rural",
      description:
        "Te guiaremos por un recorrido en la recolección, despulpado y tostión artesanal además te enseñaremos todo acerca del café y su cata",
      img: "../assets/img/portfolio/alo.jpg"
    },
    senderismo: {
      title: "Alojamiento Rural",
      description:
        "Te guiaremos por una caminata en donde podrás disfrutar de los paisajes, flora y fauna de la zona",
      img: "../assets/img/portfolio/alo.jpg"
    },
    adopta_un_arbol: {
      title: "Alojamiento Rural",
      description:" En Alojamiento Rural Nasa Yuwe podrás adoptar un árbol el cual lo sembraremos y cuidaremos por ti. Quedará un registro fotográfico y tus datos en la web (opcional). ",
      img: "../assets/img/portfolio/alo.jpg"
    }
  }
};

const servicesSlides = () => {
  for (const props in servicesAvailable) {
    console.log(servicesAvailable[props]);
  }
};

export {servicesSlides};