import React, { useState, useEffect } from "react";

export const LocationList = () => {
  const [locations, assignLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8088/locations")
      .then((res) => res.json())
      .then((locationArray) => {
        assignLocations(locationArray);
      });
  }, []);

  return (
    <div>
      {locations.map((locationObject) => {
        return (
          <p key={`location--${locationObject.id}`}>
            {locationObject.name}: {""}
            Address: {locationObject.address}
            {","} Nashville, TN{" "}
          </p>
        );
      })}
    </div>
  );
};
