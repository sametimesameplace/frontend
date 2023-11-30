import React, { useState } from "react";

function SecretButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      setIsClicked(false);
    }, 4000);
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    width: "200px",
    height: "50px",
    margin: "0.5rem",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s",
    backgroundColor: isClicked ? "#d4c045" : "#f0e68c",
  };

  return (
    <button
      style={buttonStyle}
      className={`Secret-button ${isClicked ? "flashy-disappear" : ""}`}
      onClick={handleClick}
    >
      Secret Button
    </button>
  );
}

export default SecretButton;
