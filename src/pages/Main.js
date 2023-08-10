import React, { useRef } from "react";
import "../assets/styles/main.css";
import { useState } from "react";

function Main() {
  const buttonRef = useRef(null);

  const [explodeCount, setExplodeCount] = useState(0);
  const [isHeld, setHeld] = useState(false);

  const handlePointerDown = () => {
    console.log("is pointer down");
    setHeld(true);
    setExplodeCount(explodeCount + 1);
  };

  const handlePointerUp = () => {
    console.log("is pointer up");
    setHeld(false);
  };

  return (
    <div className="Main">
      <div className="Title-container">
        <div className="pe-3">
          <p
            id="mainTitle"
            className={`Main-title ${isHeld ? "horizontal-shake" : ""}`}
          >
            World Destruction
          </p>
          <p
            id="mainSubtitle"
            className={`Main-subtitle ${isHeld ? "jump-shake" : ""}`}
          >
            The button to destroy the world is right there! How many times will
            you be able to do it?
          </p>
        </div>
        <div className="ps-3">
          <p></p>
        </div>
      </div>

      <div className="Section">
        <div>
          {isHeld ? (
            <img
              id="imageContainer"
              className={`${isHeld ? "vertical-shake" : ""}`}
              src={require("../assets/img/earth-exploding.png")}
              alt="EarthExploded"
            />
          ) : (
            <img
              id="imageContainer"
              className={`${isHeld ? "vertical-shake" : ""}`}
              src={require("../assets/img/earth.png")}
              alt="Earth"
            />
          )}
        </div>
      </div>
      <div className="Section justify-content-around">
        <div
          id="explodeCounter"
          className={`px-3 py-3 Counter-container container-small ${
            isHeld ? "tilt-shake" : ""
          }`}
        >
          <p>Times earth exploded</p>
          <div className="explodeCounterContainer">{explodeCount}</div>
        </div>
        <button
          ref={buttonRef}
          id="boomButton"
          className="Button container-small"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
        >
          Blow it up
        </button>
      </div>
    </div>
  );
}

export default Main;
