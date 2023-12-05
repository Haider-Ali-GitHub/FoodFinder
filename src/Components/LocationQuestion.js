import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const LocationQuestion = ({ handleLocationSelection, handleNextQuestion }) => {
  const containerStyle = { width: '100%', height: '400px' };
  const autocompleteInputRef = useRef(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLocationEntered, setIsLocationEntered] = useState(false);

  useEffect(() => {
    if (!autocomplete) return;

    const placeChangedListener = () => {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert(`No details available for input: '${place.name}'`);
        return;
      }
      const location = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
      setSelectedLocation(location);
    };

    // Add listener if google object is available
    if (window.google) {
      autocomplete.addListener('place_changed', placeChangedListener);
    }

    // Cleanup function to remove listener
    return () => {
      if (window.google && autocomplete) {
        window.google.maps.event.clearListeners(autocomplete, 'place_changed');
      }
    };
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
    if (!selectedLocation) {
      window.alert('Please select a valid location');
      return;
    }
    handleLocationSelection(selectedLocation);
    handleNextQuestion();
  };

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Load API key from environment

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
            height: '40px',
            borderRadius: '200px',
            padding: '20px',
            fontSize: '16px',
          }}
          onChange={handleLocationInputChange}
        />
        {isLocationEntered && (
          <button
            style={{
              position: 'absolute',
              top: '50%',
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
        <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]} onLoad={handleApiLoad}>
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
};

export default LocationQuestion;
