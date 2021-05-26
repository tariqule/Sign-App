import React from "react";

function Input(props) {
  return (
    <div>
      <input
        type={props.sean}
        placeholder={props.tariq}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
