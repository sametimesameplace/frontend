import React, { useReducer, useEffect } from "react";

let reducer = (user, newUser) => {
  if (newUser === null) {
    localStorage.removeItem("user");
    return initialUserState;
  }
  return { ...user, ...newUser };
};

const initialUserState = {
  token: null,
};

const UserContext = React.createContext(initialUserState);

const localAuthState = JSON.parse(localStorage.getItem("token"));

function UserProvider(props) {
  const [currentUser, setCurrentUser] = useReducer(
    reducer,
    localAuthState || initialUserState
  );

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };

