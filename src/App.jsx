import { useState } from "react";
import React, { Component } from "react";
import Plx from "react-plx";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import FooterSection from "./Components/Footer/FooterSection";
function App() {
  const parallaxData = [
    {
      start: 0,
      end: 500,
      properties: [
        {
          startValue: 1,
          endValue: 1.3,
          property: "scale",
        },
      ],
    },
  ];

  return (
    <>
      <NavBar />
      <div className="plx-effect">
        <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
          <div className="ellipse1"></div>
          <div className="ellipse2"></div>
          <HeroSection />
        </Plx>
      </div>
      <div className="plx-effect">
        <div className="ellipse1"></div>
        <div className="ellipse2"></div>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
