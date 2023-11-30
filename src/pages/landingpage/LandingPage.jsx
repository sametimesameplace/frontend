import React from "react";

import {useNavigate} from "react-router-dom";

import backgroundImage from "../../images/image 3.png";
import logo from "../../images/logo.png";
import footerImage from "../../images/image 1.png";


import "./../../App.css";

import SecretButton from "../../widgets/SecretButton";


export function LandingPage() {
    const navigate = useNavigate();

  return (
    <div className="LandingPages">
      <main className="App-Main">
        <div className="Hero-Container">
          <header className="App-header">
            <div className="App-logo-container">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <nav>
              <button className="Register-button button" onClick={() => {navigate('/register')}}>
                Register
              </button>
              <button className="Login-button button2" onClick={() => {navigate('/login')}}>
                Login
                </button>
            </nav>
          </header>
          <img
            src={backgroundImage}
            className="background-img"
            alt="landscape-Background"
          />
          <div className="Hero-Content">
            <div className="textContainer">
              <h1>
                Same Time <br /> Same Place
              </h1>
              <p>
                Find your new friend based on the places you want to visit in
                the future. Explore the world and meet new people at the same
                time at the same place.
              </p>
            </div>
            <div className="columnContainer">
              <button className="Column-button Home-button button">Home</button>
              <button className="Column-button About-button button2">
                About
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="App-footer">
        <div className="footerContainer">
          <img src={footerImage} className="Footer-background" alt="Footer" />
          <div className="Footer-content">
            <div className="columnContainer columnContainer2">
              <SecretButton />
              <button className="Impressum-button Home-button Column-button button2">
                Impressum
              </button>
            </div>
            <div className="columnContainer3">
              <p className="underBlock">Same time, same place. Same destiny.</p>
              <h2 className="underBlock2">
                Experience more <br /> together
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

