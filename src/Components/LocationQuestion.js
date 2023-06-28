import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const LocationQuestion = ({ handleLocationSelection, handleNextQuestion, location }) => {
  const containerStyle = {
    width: '100%',
    height: '500px',
  };
  const center = {
    lat: 0,
    lng: 0,
  };

  return (
    <div>
      <p>Where are you?</p>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyAlDrtrrBsJ2p0JIP1Q0EQ5KJA5Q_DbiLg">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onClick={(e) =>
              handleLocationSelection({
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
              })
            }
          >
            {location && <Marker position={location} />}
          </GoogleMap>
        </LoadScript>
      </div>
      <button className="myButton" onClick={handleNextQuestion}>
        Confirm Location
      </button>
    </div>
  );
}

export default LocationQuestion;
