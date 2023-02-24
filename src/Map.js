import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: window.innerWidth,
  height: window.innerHeight
};

const center = {
  lat: 47.650017,
  lng: -122.30654
};



export function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyApVWOi_L7Do8rTkoGZdUuDrBIZcah4dKE"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  );
}