import React, { useState, useEffect } from "react";
import { UserContext } from "../UserContext";
import UserKit from '../../data/UserKit';

let getCountries, getMe

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [countries, setCountries] = useState(false);

  getCountries = () => {
    UserKit.countries()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data.results);
      });
  }
  
  getMe = () => {
    UserKit.me()
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isAuth,
        setIsAuth,
        countries,
        setCountries,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export {
  getMe,
  getCountries,
}


