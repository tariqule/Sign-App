import axios from "axios";
import React from "react";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import Wrapper from "../../components/Wrapper";

//module => export Default => There can be only one export default
//Component will return something

//functional Component
//
const UserPage = () => {
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
  const data = {
    title: "Users",
    subtitle: "a list of users",
  };
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Subtitle>{data.subtitle}</Subtitle>

      <ul>
        {users?.map((user, index) => (
          <li key={index} onClick={() => alert(index)}>
            {user.id} - {user.name}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default UserPage;
