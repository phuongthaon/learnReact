import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video
        src="F:\BI\learn-reactjs\src\components\videos\video-2.mp4"
        autoPlay
        loop
        muted
      />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <Button
        className="btns"
        buttonStyle="btn--primary"
        buttonSize="btn--large"
      >
        WATCH TRAILER
        <i className="far fa-play-circle" />
      </Button>
    </div>
  );
}

export default HeroSection;
