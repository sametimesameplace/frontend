import React, { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString === undefined) return false;
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    if (userToken !== null) {

        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    } else {
        localStorage.clear();
        }
  };

  return {
    setToken: saveToken,
    token,
  };
}
