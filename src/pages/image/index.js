import React, { useContext } from "react";
import axios from "axios";
import Wrapper from "../../components/Wrapper";
import { Context } from "../../context/contextProvider";

function ImagePage() {
  const [imgSrc, setImgSrc] = React.useState();
  const { email, password } = useContext(Context);

  React.useEffect(() => {
    console.log(email);
  }, []);
  return (
    <Wrapper>
      <h1>Email: {email}</h1>
      <h1>Password: {password}</h1>
      <button
        className="btn btn-primary m-5"
        onClick={(event) => {
          console.log(imgSrc);
          axios
            .get("https://picsum.photos/700/1000", { responseType: "blob" })
            .then(({ data }) => {
              console.log(data);
              setImgSrc(data);
            })
            .catch((err) => {
              console.log("ERORR", err);
            });
        }}
      >
        Fetch Image
      </button>

      <img src={imgSrc ? URL.createObjectURL(imgSrc) : ""}></img>
    </Wrapper>
  );
}

export default ImagePage;
