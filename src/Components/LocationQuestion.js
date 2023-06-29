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
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLocationEntered, setIsLocationEntered] = useState(false);

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

        setSelectedLocation(location);
      });
    }
  }, [autocomplete]);

  const handleApiLoad = () => {
    const autocompleteObject = new window.google.maps.places.Autocomplete(autocompleteInputRef.current);
    setAutocomplete(autocompleteObject);
  };

  const handleLocationInputChange = () => {
    const inputText = autocompleteInputRef.current.value;
    setIsLocationEntered(inputText.trim().length > 0);
  };

  const handleGoButtonClick = () => {
    if (selectedLocation) {
      handleLocationSelection(selectedLocation);
      handleNextQuestion();
    } else {
      window.alert('Please select a valid location');
    }
  };

  return (
    <div>
      <p>Where are you?</p>
      <div style={{ position: 'relative' }}>
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
            paddingRight: '70px', // Add space for the button
          }}
          onChange={handleLocationInputChange}
        />
        {isLocationEntered && (
          <button
            style={{
              position: 'absolute',
              top: '50%',
              right: '430px',
              transform: 'translateY(-50%)',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'lightblue',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={handleGoButtonClick}
          >
            GO!
          </button>
        )}
      </div>
      <div style={containerStyle}>
        <LoadScript googleMapsApiKey="AIzaSyAlDrtrrBsJ2p0JIP1Q0EQ5KJA5Q_DbiLg" libraries={["places"]} onLoad={handleApiLoad}>
          {selectedLocation && (
            <GoogleMap
              mapContainerStyle={{ width: '55%', height: '100%' }}
              center={selectedLocation}
              zoom={16}
              onClick={(e) =>
                setSelectedLocation({
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng(),
                })
              }
            >
              <Marker position={selectedLocation} />
            </GoogleMap>
          )}
        </LoadScript>
      </div>
    </div>
  );
}

export default LocationQuestion;
