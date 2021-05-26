import React from "react";

function Wrapper(props) {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      {props.children}
    </div>
  );
}

export default Wrapper;
