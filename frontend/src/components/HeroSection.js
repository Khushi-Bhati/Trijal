import React from "react";
import heroVideo from "../assets/hero.mp4";
import "./../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
    </section>
  );
};

export default HeroSection;
