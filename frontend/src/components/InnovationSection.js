import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/InnovationSection.css";
import Image1 from "./../assets/prisma-ipm-schneider.png"
import Image2 from "./../assets/lv.jpg"
import Image3 from "./../assets/products-grid-2-bg (1).png"
import Image4 from "./../assets/epc.jpg"

const InnovationSection = () => {
  const fallback = [
    {
      title: "Schneider Prisma Panels",
      image:
        Image1,
      heading: "Schneider Prisma Panels",
      body:
        "Trijal Electricals partners with Schneider Electric to deliver Prisma IPM solutions. We combine certified expertise with global safety standards to provide modular, scalable power distribution tailored to critical facilities.",
    },
    {
      title: "LV Distribution & Control Products",
      image:
       Image2,
      heading: "LV Distribution & Control Products",
      body:
        "Our low-voltage panels manage and distribute electricity safely up to 1000V. Built for residential, commercial, and industrial environments, each assembly prioritizes protection, efficiency, and reliability.",
    },
    {
      title: "Electric Consultancy",
      image:
        Image3,
      heading: "Electric Consultancy",
      body:
        "From load analysis to system upgrades, our consultancy practice delivers code-compliant, future-ready electrical designs that optimize performance, uptime, and lifecycle costs for your projects.",
    },
    {
      title: "EPC Service",
      image:
       Image4,
      heading: "EPC Service",
      body:
        "End-to-end Engineering, Procurement, and Construction with single-point accountability. We orchestrate vendors, schedules, and quality to deliver turnkey electrical infrastructure on time.",
    },
  ];

  const [pillars, setPillars] = useState(fallback);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/innovation`);
        if (Array.isArray(data) && data.length) {
          setPillars(data);
          setActiveIndex(0);
        }
      } catch (err) {
        console.warn("Using fallback innovation content", err?.message || err);
      }
    };
    load();
  }, []);

  const active = pillars[activeIndex] || pillars[0];

  return (
    <section className="innovation" id="innovation">
      <div className="innovation__heading">
        <span className="innovation__eyebrow">Innovative Technologies</span>
        <h2>
          Services to
          <br />
          Energize Society
        </h2>
      </div>

      <div className="innovation__pillars">
        {pillars.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            className={`innovation__pill ${idx === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(idx)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="innovation__body">
        <div className="innovation__image">
          <img
            src={active.image}
            alt={active.title}
          />
        </div>

        <div className="innovation__copy">
          <h3>{active.heading}</h3>
          <p>{active.body}</p>
          <button type="button" className="innovation__cta">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
