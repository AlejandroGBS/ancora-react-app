import React, { useState } from "react";

export default function Selector(props) {
  const [selectorValue, setSelectorValue] = useState(1);

  return (
    <>
      <p>You clicked {selectorValue} times</p>
      <select
        value={props.id}
        onChange={(e) => setSelectorValue(e.target.value)}
      >
        {props.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.name}
          </option>
        ))}
      </select>
    </>
  );
}
