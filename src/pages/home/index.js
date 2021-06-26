import React, { useContext } from "react";

import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Subtitle from "../../components/Subtitle";
import axios from "axios";
import { Context } from "../../context/contextProvider";

import { useDispatch, useSelector } from "react-redux";
import { postHome, selectHome } from "../../redux/slices/home";
import { userSlice } from "../../redux/slices/user";
import { useSean } from "../../hooks/useSean";
//module => export Default => There can be only one export default
//Component will return something

//functional Component
//
const HomePage = (props) => {
  //object Destructing
  const { email, setEmail, password, setPassword } = useSean();

  let userInput = []; //wed ont wanna do mutation

  const { homes, pending, error } = useSelector(selectHome);
  const dispatch = useDispatch();

  //   const [email, setEmail] = React.useState("Enter Email");
  //  const [password, setPassword] = React.useState("Enter Password");

  const handleOnChangeEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);

    dispatch(userSlice.actions.saveSeanUser(event.target.value));
  };

  const handleOnChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);

    dispatch(userSlice.actions.saveSeanPassword(event.target.value));
  };
  {
    /* state to store image  */
  }
  const inputRef = React.useRef();

  const onClickHandler = () => {
    //our password length min 3 chars- if less than : invalid password
    //one upper and lower case
    //one symbol
    //regex
    alert(inputRef.current.value);
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
      <h1>{email}</h1>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>
      <Input
        margin="10"
        sean="email"
        tariq="email"
        onChange={(event) => handleOnChangeEmail(event)}
      />

      <Input
        margin={10}
        sean="password"
        tariq="password"
        onChange={(event) => handleOnChangePassword(event)}
      />

      <button onClick={onClickHandler}>Submit</button>

      {/* input field  */}
      <Input
        margin={10}
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
          dispatch(postHome(data));
          console.log(users);

          // axios
          //   .post("https://jsonplaceholder.typicode.com/users", data)
          //   .then(({ data }) => {
          //     console.log(data);
          //   })
          //   .catch((err) => {
          //     console.log("ERORR", err);
          //   });
        }}
      >
        Submit
      </button>
    </Wrapper>
  );
};

export default HomePage;

// //NEVER USE VAR = -100%
