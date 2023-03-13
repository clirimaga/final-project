import React from "react";
import Slider from "./Slider";
import NewToG from "./NewToG";
import Events from "./Events";
import Stats from "./Stats";
import Persons from "./Persons";
import About from "./About";

export default function Homepage() {
  return (
    <div className="container">
      <About />
      <Slider />
      <NewToG />
      <Events />
      <Stats />
      <Persons />
    </div>
  );
}
