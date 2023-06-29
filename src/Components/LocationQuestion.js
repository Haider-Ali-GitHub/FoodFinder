import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const LocationQuestion = ({ handleLocationSelection, handleNextQuestion, location }) => {
  const containerStyle = {
    width: '100%',
    height: '400px', // Increase the height as per your requirement
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px', // Make the container rounder
    overflow: 'hidden', // Ensure content within the container stays contained
  };
  const center = {
    lat: 0,
    lng: 0,
  };
  
  const autocompleteInputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);

  useEffect(() => {
    if (autocomplete) {
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert(`No details available for input: '${place.name}'`);
          return;
        }

        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        handleLocationSelection(location);
      });
    }
  }, [autocomplete]);

  const handleApiLoad = () => {
    const autocompleteObject = new window.google.maps.places.Autocomplete(autocompleteInputRef.current);
    setAutocomplete(autocompleteObject);
  };

  return (
    <div>
      <p>Where are you?</p>
      <input
        id="autocomplete"
        ref={autocompleteInputRef}
        type="text"
        placeholder="Search Your Location For the Best Food Spots Near You!"
        style={{
          width: '50%',
          height: '40px', // Increase the height as per your requirement
          borderRadius: '200px', // Make the input rounder
          padding: '20px', // Add some padding for better appearance
          fontSize: '16px', // Adjust the font size as per your preference
        }}
      />
      <div style={containerStyle}>
        <LoadScript googleMapsApiKey="AIzaSyAlDrtrrBsJ2p0JIP1Q0EQ5KJA5Q_DbiLg" libraries={["places"]} onLoad={handleApiLoad}>
          {/* { <GoogleMap
            mapContainerStyle={{ width: '50%', height: '100%' }}
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
          </GoogleMap> }  */}
        </LoadScript>
      </div>
      {/* <button className="myButton" onClick={handleNextQuestion}>
        Confirm Location
      </button> */}
    </div>
  );
}

export default LocationQuestion;
