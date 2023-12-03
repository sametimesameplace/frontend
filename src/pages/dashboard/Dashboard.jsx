import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../images/logo.png"
import backgroundImage2 from "../../images/image44.png";
import footerImage from "../../images/image 1.png";

import "../../App.css"; //todo: WHY?
import "./Dashboard.css";

import SecretButton from "../../widgets/SecretButton";
import { Matches } from "./matches";
import { TimePlace } from "./timeplace";


export function Navbar() {
  const navigate = useNavigate();
  const handleProfileClick = () => {
    navigate("/profile");
  };
  const handleLogoutClick = () => {
    navigate("/");
  };
  return (
    <div className="Navbar">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav>
          <button className="Logout button" onClick={handleLogoutClick}>
            Logout
          </button>
          <button className="Profile button2" onClick={handleProfileClick}>
            Profile
          </button>
        </nav>
      </header>
    </div>
  );
}



export function Footer() {
  return (
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
  );
}

export function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Dashboard-whitespace">
        <Navbar />

        <div className="Dashboard-Content">
          <div className="Dashboard-Content-columns">
            <TimePlace/>
            <img
            src={backgroundImage2}
            className="Background-image2"
            alt="logo"
          />
          <Matches />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

