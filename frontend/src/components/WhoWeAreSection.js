import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/WhoWeAreSection.css";

const fallbackHighlights = [
  {
    icon: "⚡",
    title: "Kilowatt Power",
    description: "Managing high-power electrical systems with expertise.",
  },
  {
    icon: "🌿",
    title: "Empowering Solutions",
    description: "Dedication to efficient power distribution solutions.",
  },
  {
    icon: "🧠",
    title: "Innovation & Expertise",
    description: "Delivering groundbreaking solutions with innovative expertise.",
  },
  {
    icon: "💎",
    title: "Versatility & Value",
    description: "Meeting diverse energy needs with dedication.",
  },
];

const WhoWeAreSection = () => {
  const [highlights, setHighlights] = useState(fallbackHighlights);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/company/brandValues`);
        if (data?.content && Array.isArray(data.content) && data.content.length) {
          setHighlights(data.content);
        }
      } catch (err) {
        console.warn("Using fallback brand values", err?.message || err);
      }
    };
    load();
  }, []);

  return (
    <section className="who" id="who-we-are">
      <div className="who__intro">
        <h2>
          Who <span>We</span> Are
        </h2>
        <p>
          Trijal Electricals Pvt. Ltd. an ISO 9001:2015 certified company based
          at Faridabad, Haryana is one of the leading manufacturer of custom
          built low tension switchgear and power distribution panels of all
          range and capacity.
        </p>
      </div>

      <div className="who__content">
        <div className="who__copy">
          <h3>Trijal Elektrikals: <br />The "K" Essence</h3>
          <ul>
            {highlights.map((item) => (
              <li key={item.title}>
                <span className="who__icon" aria-hidden="true">{item.icon}</span>
                <div>
                  <strong>{item.title}:</strong> {item.description || item.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="who__image">
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80"
            alt="Trijal Electricals team in front of control panels"
          />
        </div>
      </div>

      <div className="who__footer">
        <h4>
          Empowering Projects, Creating <span>Excellence</span>
        </h4>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
