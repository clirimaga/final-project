import React from "react";
import "./components.css";
import "aos/dist/aos.css";
export default function NewToG() {
  return (
    <div className="row d-flex justify-content-around" data-aos="flip-left">
      <h1 className="text-center" data-aos="flip-left">
        NEW TO GERMANY?
      </h1>
      <br />
      <br />
      <div className="grid-container soft-yellow">
        <div className="grid-item lineLeft">
          <h2>The Good News</h2>
          <p>Learning German just got easier!</p>
        </div>
        <div className="grid-item">
          <h2>The Better News</h2>

          <p>
            You can now learn German with other people and have <b>fun</b> doing
            it!
          </p>
        </div>
      </div>
    </div>
  );
}
