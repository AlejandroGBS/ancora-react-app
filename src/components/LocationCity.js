import React, { useState } from "react";

export default function LocationCity(props) {
  const [cityId, setCityId] = useState(1);
  const [locationId, setLocationId] = useState(1);

  return (
    <>
      <p>city id {cityId} times</p>
      <select value={props.id} onChange={(e) => setCityId(e.target.value)}>
        {props.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </select>
      <p>theater id {locationId} times</p>
      <select
        value={locationId}
        onChange={(e) => setLocationId(e.target.value)}
      >
        {props
          .filter((l) => l.id == cityId)
          .map((l) =>
            l.subLocations.map((subl) => (
              <option key={subl.id} value={subl.id}>
                {subl.name}
              </option>
            ))
          )}
      </select>
    </>
  );
}
