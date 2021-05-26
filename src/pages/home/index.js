import React, { useContext } from "react";

import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Subtitle from "../../components/Subtitle";
import axios from "axios";
import { Context } from "../../context/contextProvider";
//module => export Default => There can be only one export default
//Component will return something

//functional Component
//
const HomePage = () => {
  //object Destructing
  const { email, setEmail, password, setPassword } = useContext(Context);

  let userInput = []; //wed ont wanna do mutation

  //   const [email, setEmail] = React.useState("Enter Email");
  //  const [password, setPassword] = React.useState("Enter Password");

  const handleOnChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleOnChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };
  {
    /* state to store image  */
  }

  const onClickHandler = () => {
    //our password length min 3 chars- if less than : invalid password
    //one upper and lower case
    //one symbol
    //regex
    console.log(email);
    const validatePasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;

    const testPasswordRegex = validatePasswordRegex.test(password);

    if (email == "email@gmail.com" && password) {
      if (testPasswordRegex) {
        alert("successful");
      } else {
        alert("check agin, invaliud passwoerd");
      }
    } else {
      alert("wrong email or password");
    }
  };

  const data = {
    title: "Sign In",
    subtitle: "This is Encrypted",
  };
  //fetch
  //axios
  //ajax
  //render
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    //axios
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        console.log(data);
        setUsers(data);
      })
      .catch((err) => {
        console.log("ERORR", err);
      });

    //USING FETCH
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data)); //.then(( data ) => setUsers(data.data)); == .then(( {data }) => setUsers(data));
  }, []);

  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <Input
        sean="email"
        tariq="email"
        onChange={(event) => handleOnChangeEmail(event)}
      />

      <Input
        sean="password"
        tariq="password"
        onChange={(event) => handleOnChangePassword(event)}
      />

      <button onClick={onClickHandler}>Submit</button>

      {/* input field  */}
      <Input
        sean="text"
        tariq="Send User"
        onChange={(event) => setEmail(event.target.value)}
      />
      {/* submit user */}
      <button
        onClick={() => {
          const data = { id: Math.floor(Math.random() * 100), name: email };
          //spread operator - es6

          //one way
          // setUsers((prevState) => [...prevState, ...[data]]);

          //second way
          // setUsers([...users, ...[data]]);

          //third way - old way - es5 - dont do this
          // don't mutate the state
          setUsers(users.concat(data));

          console.log(users);

          axios
            .post("https://jsonplaceholder.typicode.com/users", data)
            .then(({ data }) => {
              console.log(data);
            })
            .catch((err) => {
              console.log("ERORR", err);
            });
        }}
      >
        Submit
      </button>
    </Wrapper>
  );
};

export default HomePage;
