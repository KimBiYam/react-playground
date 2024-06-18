import React, { useReducer } from "react";

export default function SimpleAccordion({ title, children }) {
  const [opened, toggle] = useReducer((state) => !state, false);

  return (
    <>
      <h3 onClick={toggle} style={{ cursor: "pointer" }}>
        ↓ {title}
      </h3>
      {opened && children}
    </>
  );
}
