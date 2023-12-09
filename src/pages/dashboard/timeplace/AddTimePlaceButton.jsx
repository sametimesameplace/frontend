// AddTimePlaceButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AddTimePlaceButton.css";

export function AddTimePlaceButton() {
  let navigate = useNavigate();

  const navigateToAddTimePlaceForm = () => {
    navigate("/add-timeplace");
  };

  return (
    <button
      className="Add-TimePlace-button button"
      onClick={navigateToAddTimePlaceForm}
    >
      Add Timeplace
    </button>
  );
}

