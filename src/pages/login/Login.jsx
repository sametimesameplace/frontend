import React, { useState }  from "react";
import { redirect, useNavigate } from "react-router-dom";

import { appPath } from "../../api/paths";
import { login, register } from "../../api/index";
import useToken from "../../auth/Token";


export function Register() {
    const [registerData, setRegisterData] = useState({});  
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({...registerData, name: value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, status, data} = await register(registerData);
        if (error) {
            setError(true);
            setErrorMessage(data);
        } else {
            redirect(appPath.login)
        }
    }

    return (
            <>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" onChange={handleChange} value={""}/>
                    <input type="mail" name="email" onChange={handleChange}/>
                    <input type="password" name="password" onChange={handleChange}/>
                    <input type="submit" name="submit"/>
                    {error ? errorMessage : ""}
                </form>
            </>
    )

};


export function Login() {
    const {setToken} = useToken();
    const [loginData, setLoginData] = useState({});
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value } = e.target;
        setLoginData({...loginData, name: value})
    };
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, status, data} = await login(loginData);
        if (error) {
            setError(true);
            setErrorMessage("Logindaten incorrect")
        } else {
            setToken(data.token)
            navigate('/dashboard');
        }
        
    };

  return (
    <div className="Login">
      <header className="App-header">
        <div className="App-logo-container"></div>
        <div className="App-title-container">
          <h1 className="App-title">Same Time Same Place</h1>
        </div>
      </header>
      <div className="Login-container">
        <div className="Login-form-container">
          <form className="Login-form">
            <label className="Login-label" htmlFor="username">
              Username
            </label>
            <input
              onChange={handleChange}
              className="Login-input"
              type="text"
              id="username"
              name="username"
            />
            <label className="Login-label" htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              className="Login-input"
              type="password"
              id="password"
              name="password"
            />
            <button
              className="Login-button button"
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
            <button className="Register-button button" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
      <div className="Login-footer">
            {error ? error : ""}
            </div>
    </div>
  );
}


