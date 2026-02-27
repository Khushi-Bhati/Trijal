import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/IndustriesSection.css";
import powerImg from "./../assets/power.jpg";
import sugarImg from "./../assets/sugar.jpg";
import paperImg from "./../assets/paper.jpg";
import railwaysImg from "./../assets/railways.jpg";
import miningImg from "./../assets/mining.png";
import itImg from "./../assets/it.png";
import infrastructureImg from "./../assets/infrastructure.jpg";
import cementImg from "./../assets/cement.jpg";


const assetMap = {
  "/assets/power.jpg": powerImg,
  "/assets/sugar.jpg": sugarImg,
  "/assets/paper.jpg": paperImg,
  "/assets/railways.jpg": railwaysImg,
  "/assets/mining.png": miningImg,
  "/assets/it.png": itImg,
  "/assets/infrastructure.jpg": infrastructureImg,
  "/assets/cement.jpg": cementImg,
};

const fallbackIndustries = [
  { title: "Power", image: "/assets/power.jpg" },
  { title: "Sugar", image: "/assets/sugar.jpg" },
  { title: "Paper", image: "/assets/paper.jpg" },
  { title: "Railways", image: "/assets/railways.jpg" },
  { title: "Mining", image: "/assets/mining.png" },
  { title: "Information Technology", image: "/assets/it.png" },
  { title: "Infrastructure", image: "/assets/infrastructure.jpg" },
  { title: "Cement", image: "/assets/cement.jpg" },
];

const resolveImage = (imagePath) => assetMap[imagePath] || imagePath;

const IndustriesSection = () => {
  const [industries, setIndustries] = useState(fallbackIndustries);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/industries`);
        if (Array.isArray(data) && data.length) {
          setIndustries(data);
        }
      } catch (err) {
        console.warn("Using fallback industries", err?.message || err);
      }
    };
    load();
  }, []);

  return (
    <section className="industries" id="industries">
      <div className="industries__inner">
        <h2>
          Industries We Are <span>Serving</span>
        </h2>

        <div className="industries__grid">
          {industries.map((item) => (
            <article key={item.title} className="industry-card">
              <img src={resolveImage(item.image)} alt={item.title} />
              <div className="industry-card__overlay">
                <div className="industry-card__icon">⚙️</div>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
