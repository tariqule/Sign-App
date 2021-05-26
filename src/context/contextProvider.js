import React from "react";
const { useState, createContext, createElement } = React;

export const Context = createContext();

function ContextWrapper(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Context.Provider value={{ email, setEmail, password, setPassword }}>
      {props.children}
    </Context.Provider>
  );
}

export default ContextWrapper;
