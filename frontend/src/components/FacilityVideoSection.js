import React from "react";
import plantVideo from "../assets/hero.mp4";
import "./../styles/FacilityVideoSection.css";


const FacilityVideoSection = () => {
  return (
    <section className="facility-video" id="facility-video">
      <video className="facility-video__media" autoPlay muted loop playsInline>
        <source src={plantVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default FacilityVideoSection;
