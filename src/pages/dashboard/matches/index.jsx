import React from "react";

export function Matches() {
  return (
    <div className="Matches columnContainer">
      <div className="Matches-Container">
        <div className="Matches-Content ">
          <div className="Matches-Content-Header">
            <span>Match1</span>
            <span>Location</span>
          </div>
          <button className="Matches-button button Column-button Home-button">
            Match Details
          </button>
          <button className="Chat-button button2 Column-button About-button">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}
