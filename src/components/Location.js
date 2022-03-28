import React, { useState, useEffect } from "react";

export default function Location(props) {
  const [locationId, setLocationId] = useState(1);

  useEffect(() => {
    document.getElementById("locations");
  });

  return (
    <>
      <p>location id {locationId} times</p>
      <select value={props.id} onChange={(e) => setLocationId(e.target.value)}>
        {props.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.name}
          </option>
        ))}
      </select>
    </>
  );
}
