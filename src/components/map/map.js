import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];

const center = {
  lat: -31.437772,
  lng: 152.884924,
};

function Map() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const mapContainerStyle = {
    height: '100%',
    width: '100%',
  };

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

  return (
    <div className="relative h-0 aspect-ratio-16/9 lg:aspect-ratio-none lg:h-96">
      <div className="absolute inset-0">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
}

export { Map };
