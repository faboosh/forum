import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//Components
import { SatisfyingButton, Div, Input } from "../styles/StyledElements";
import ErrorMessage from "../components/ErrorMessage";

//Util
import UserKit from "../data/UserKit";
import FormRenderer from "./FormRenderer";
import { UserContext } from "../contexts/UserContext";

export default function LoginForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({});
  const { isAuth, setIsAuth, setUser, setCountries } = useContext(UserContext);
  const history = useHistory();

  function onLogin() {
    UserKit.login(formData)
      .then((res) => res.json())
      .then((data) => {
        const { token } = data;

        if (token) {
          UserKit.setToken(token);
          console.log(UserKit.getToken());

          UserKit.me()
            .then((res) => res.json())
            .then((data) => {
              setUser(data);
              setIsAuth(true);

              history.push("/home");
            });
        } else {
          setErrorMessage("Invalid credentials");
        }
      })
      .catch((err) => {
        setErrorMessage("Something went very, very wrong");
      });
  }

  function onClickRegister() {
    history.push("/register");
  }

  return (
    <Div width="50%">
      <FormRenderer form="login" onChange={setFormData} initial={{
        email: 'boosh@boosh.se',
        password: 'Pelle420'
      }}/>
      
      <ErrorMessage message={errorMessage} />

      <Div flex justify="space-between">
        <SatisfyingButton
          color="blue"
          padding="s xl"
          width="50%"
          margin="0 m 0 0"
          onClick={onClickRegister}
        >
          Register
        </SatisfyingButton>

        <SatisfyingButton
          color="aqua"
          padding="s xl"
          width="50%"
          margin="0"
          onClick={onLogin}
        >
          Login
        </SatisfyingButton>
      </Div>
    </Div>
  );
}
