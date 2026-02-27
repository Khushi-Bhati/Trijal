import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/AboutSection.css";
import slidePower from "../assets/power.jpg";
import slideInfrastructure from "../assets/infrastructure.jpg";
import slideMining from "../assets/mining.png";
import slideRailways from "../assets/railways.jpg";
import slideSugar from "../assets/sugar.jpg";

const fallbackText =
  "Trijal Electricals Pvt. Ltd., headquartered in Faridabad, Haryana, and certified with ISO 9001:2015 accreditation. Specializing in custom built power distribution panels and low tension switchgear, we ensure punctual delivery of top-tier products crafted with cutting-edge machinery. Under Mr. Som Sharma's adept leadership, boasting 30 years of expertise, we've emerged as a prominent name in electrical panel manufacturing, offering dependable solutions in control systems and services. Our comprehensive suite of services encompasses Manufacturing, Design & Engineering, and Erection & Commissioning, all driven by our unwavering commitment to excellence.";

const AboutSection = () => {
 
  const images = [
    slidePower,
    slideInfrastructure,
    slideMining,
    slideRailways,
    slideSugar,
  ];

  const [current, setCurrent] = useState(0);
  const [body, setBody] = useState(fallbackText);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/company/about`);
        if (data?.content?.full) setBody(data.content.full);
      } catch (err) {
        console.warn("Using fallback about text", err?.message || err);
      }
    };
    load();
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__heading">
        <h2>About Us</h2>
      </div>

      <div className="about__content">
        <div className="about__text">
          <h3 className="about__title">
            Delivering Precision, Quality, and Expertise to Illuminate Your Vision.
          </h3>
          <p className="about__body">
            {body}
          </p>
          <button className="about__cta" type="button">Read More</button>
        </div>

        <div className="about__media">
          <div className="about__image-frame">
            <div
              className="about__slide"
              style={{ backgroundImage: `url(${images[current]})` }}
            ></div>
            <div className="about__dots">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  className={`about__dot ${idx === current ? "active" : ""}`}
                  aria-label={`Show slide ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
