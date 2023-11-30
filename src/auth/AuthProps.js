import React from "react";
import AuthContext from "./AuthContext";

const withAuthProps = (Component) => {
  return (props) => (
    <AuthContext.Consumer>
      {({ currentUser, setCurrentUser }) => (
        <Component
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          {...props}
        />
      )}
    </AuthContext.Consumer>
  );
};

export default withAuthProp;
