import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/WhyChooseUsSection.css";

const fallbackPillars = [
  {
    title: "Smart Technology",
    description: "Smart technology integration for efficient solutions",
    icon: "🧠",
  },
  {
    title: "Certified Expert",
    description: "Certified experts ensuring quality and reliability",
    icon: "✔️",
  },
  {
    title: "Eco Technology",
    description: "Eco-friendly technology for sustainable practices",
    icon: "🌿",
  },
  {
    title: "Accessibility",
    description: "24/7 support ensuring continuous assistance and peace of mind",
    icon: "☎️",
  },
];

const WhyChooseUsSection = () => {
  const [pillars, setPillars] = useState(fallbackPillars);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/why-choose-us`);
        if (Array.isArray(data) && data.length) setPillars(data);
      } catch (err) {
        console.warn("Using fallback why-choose-us", err?.message || err);
      }
    };
    load();
  }, []);

  return (
    <section className="why" id="why-choose-us">
      <div className="why__backdrop">
        <div className="why__content">
          <div className="why__intro">
            <h2>
              Why Choose <span>Us</span>
            </h2>
            <p>
              At Trijal Electricals our unparalleled expertise in electrical panels sets us apart, making us the top
              choice for those seeking exceptional quality and relatability.
            </p>
          </div>

          <div className="why__grid">
            {pillars.map((item) => (
              <article key={item.title} className="why__card">
                <div className="why__icon" aria-hidden="true">
                  {item.icon || "⚡"}
                </div>
                <h3>{item.title}</h3>
                <p>{item.description || item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
