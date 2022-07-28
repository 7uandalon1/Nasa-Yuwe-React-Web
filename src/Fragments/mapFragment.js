import React from "react";

import GoogleMapReact from "google-map-react";

export default function Map(props){
    return(
        <div>
            {props.Children}
        </div>
    )
}

function MapFragment(props) {
        const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11
    }
  return (
    <section id="map-section">
      <div className="map-container">
        <div className="text-container">
          <h1 className="title">Nuestra Ubicación</h1>
        </div>
        <div className="embed-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <Map
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    </section>
  );
}

export { MapFragment };
