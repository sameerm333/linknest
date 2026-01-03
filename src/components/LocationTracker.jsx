import React, { useState, useEffect } from "react";

function LocationTracker() {
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
    error: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
            error: null,
          });
        },
        (err) => {
          setLocation((prev) => ({ ...prev, error: err.message }));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      setLocation((prev) => ({ ...prev, error: "Geolocation not supported" }));
    }
  }, []); // Runs once on page load (refresh)

  return (
    <>
      <i className="bi bi-geo-alt me-1"></i>
      <span>You’re Here</span>
      {location.error ? (
        <p className="text-danger">Error: {location.error}</p>
      ) : location.lat && location.lon ? (
        <p className="fs-6">
          Latitude: {location.lat.toFixed(6)} <br />
          Longitude: {location.lon.toFixed(6)}
        </p>
      ) : (
        <p className="text-muted">Fetching location...</p>
      )}
    </>
  );
}

export default LocationTracker;
