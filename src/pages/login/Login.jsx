import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import { appPath } from "../../api/paths";
import { login, register, } from "../../api/index";


import useToken from "../../auth/Token";
import FormComponent from "../../components/forms";


export function Register() {
    const [registerData, setRegisterData] = useState({});  
    const [, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();


    const {setToken} = useToken();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({...registerData, [name]: value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setToken(null);
        const {error, data} = await register(registerData);
        if (error) {
            setError(true);
            setErrorMessage(data);
        } else {
            navigate(appPath.login)
        }
    }

    return (
      <div className="Register">
        <header className="App-header">
          <div className="App-logo-container"></div>
          <div className="App-title-container">
            <h1 className="App-title">Same Time Same Place</h1>
          </div>
        </header>
        <div className="Register-container">
          <div className="Register-form-container">
            <FormComponent errorMessage={errorMessage} className="Register-form" onSubmit={handleSubmit}>
              <label className="Register-label" htmlFor="username">
                Username
              </label>
              <input
                onChange={handleChange}
                className="Register-input"
                type="text"
                id="username"
                name="username"
                required
              />
              <label className="Register-label" htmlFor="email">
                E-Mail
              </label>
              <input
                onChange={handleChange}
                className="Register-input"
                type="email"
                id="email"
                name="email"
                required
              />
              <label className="Register-label" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleChange}
                className="Register-input"
                type="password"
                id="password"
                name="password"
                required
              />
              <button
                className="Register-button button"
                type="submit"
              >
                Register
              </button>
            </FormComponent>
          </div>
        </div>
        <div className="Login-footer">
        </div>
      </div>
    );
};


export function Login() {
    const {setToken} = useToken();
    const [loginData, setLoginData] = useState({});
    const [, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value } = e.target;
        setLoginData({...loginData, [name]: value})
    };
 

    const handleSubmit = async(e) => {
        e.preventDefault();
        const {error, data} = await login(loginData)
        if (error) {
            console.log(error, data)
            setError(true);
            setErrorMessage(data)
        } else {
            setToken(data.token);
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
          <FormComponent className="Login-form" errorMessage={errorMessage} onSubmit={handleSubmit}>
            <label className="Login-label" htmlFor="username">
              Username
            </label>
            <input
              onChange={handleChange}
              className="Login-input"
              type="text"
              id="username"
              required
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
              required
            />
            <button
              className="Login-button button"
              type="submit"
            >
              Login
            </button>
            <button className="Register-button button" onClick={() => navigate(appPath.register)}>
              Register
            </button>
          </FormComponent>
        </div>
      </div>
      <div className="Login-footer">
            </div>



    </div>

















  );
}

