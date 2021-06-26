import React, { useContext } from "react";
import { Context } from "../context/contextProvider";

export const useSean = () => {
  //   const { email, setEmail, password, setPassword } = useContext(Context);
  const Seans = useContext(Context);
  const [emails, setEmails] = React.useState();

  React.useEffect(() => {
    setEmails(Seans.email + " = > Yo my email");
  }, [Seans.email]);
  return {
    email: emails,
    setEmail: Seans.setEmail,
    password: Seans.password,
    setPassword: Seans.setPassword,
  };
};
//object destructuring
