import React from "react";

function Input(props) {
  return (
    <div>
      <input
        style={{ margin: String(props.margin) + "px" }}
        type={props.sean}
        placeholder={props.tariq}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
