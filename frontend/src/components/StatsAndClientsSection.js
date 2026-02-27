import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/StatsAndClientsSection.css";
import client13 from "./../assets/client-13.jpg";
import client14 from "./../assets/client-14.jpg";
import client15 from "./../assets/client-15.jpg";
import client16 from "./../assets/client-16.jpg";
import client17 from "./../assets/client-17.jpg";
import client18 from "./../assets/client-18.jpg";
import client19 from "./../assets/client-19.jpg";
import client20 from "./../assets/client-20.jpg";
import client21 from "./../assets/client-21.jpg";
import client22 from "./../assets/client-22.jpg";
import client23 from "./../assets/client-23.jpg";
import client24 from "./../assets/client-24.jpg";
import client25 from "./../assets/client-25.jpg";
import client26 from "./../assets/client-26.jpg";
import client27 from "./../assets/client-27.jpg";
import client28 from "./../assets/client-28.jpg";
import client29 from "./../assets/client-29.jpg";
import client30 from "./../assets/client-30.jpg";
import client31 from "./../assets/client-31.jpg";
import client32 from "./../assets/client-32.jpg";

const fallbackStats = [
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 1000, suffix: "+", label: "Projects Delivered" },
  { value: 200, suffix: "+", label: "Number of Employees" },
];

const clients = [
  client13, client14, client15, client16, client17,
  client18, client19, client20, client21, client22,
  client23, client24, client25, client26, client27,
  client28, client29, client30, client31, client32,
];

const StatsAndClientsSection = () => {
  const [stats, setStats] = useState([]);
  const [counts, setCounts] = useState(fallbackStats.map(() => 0));

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/stats`);
        if (Array.isArray(data) && data.length) {
          setStats(data);
          setCounts(data.map(() => 0));
        }
      } catch (err) {
        console.warn("Using fallback stats", err?.message || err);
      }
    };
    load();
  }, []);

 
  useEffect(() => {
    if (!stats.length) return;
    const duration = 1200; 
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(stats.map((item) => Math.round(item.value * progress)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [stats]);

  const loopClients = [...clients, ...clients];

  return (
    <>
      <section className="stats" id="stats">
        <div className="stats__inner">
          <h3>
            Trijal Elektrikals: Empowering your business with swift and impactful electrical solutions.
          </h3>

          <div className="stats__grid">
            {stats.map((item, idx) => (
              <div key={item.label} className="stat">
                <div className="stat__value">
                  {counts[idx]?.toLocaleString() ?? 0}
                  {item.suffix}
                </div>
                <div className="stat__label">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="clients" id="clients">
        <div className="clients__bar">
          <div className="clients__viewport">
            <div className="clients__track">
              {loopClients.map((logo, idx) => (
                <div key={idx} className="client__logo">
                  <img src={logo} alt="Client logo" />
                </div>
              ))}
            </div>
          </div>

          <div className="clients__social">
            <a href="https://www.youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  fill="#FF0000"
                  d="M21.8 8.001a2.748 2.748 0 00-1.93-1.94C18.348 5.75 12 5.75 12 5.75s-6.347 0-7.87.31A2.747 2.747 0 002.2 8.001 28.53 28.53 0 001.75 12a28.53 28.53 0 00.55 3.999 2.748 2.748 0 001.93 1.94C5.653 18.25 12 18.25 12 18.25s6.348 0 7.87-.31a2.748 2.748 0 001.93-1.94A28.53 28.53 0 0022.25 12a28.53 28.53 0 00-.55-3.999z"
                />
                <path fill="#fff" d="M10 9.75v4.5L14.5 12z" />
              </svg>
            </a>
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" role="img">
                <path
                  fill="#000"
                  d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm0 2a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H7zm5 3.25A3.75 3.75 0 1112 17.75 3.75 3.75 0 0112 8.25zm0 2a1.75 1.75 0 101.75 1.75A1.75 1.75 0 0012 10.25zm4.5-3.5a1 1 0 11-1 1 1 1 0 011-1z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" role="img">
                <path fill="#0A66C2" d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h3.96V21H3z" />
                <path
                  fill="#0A66C2"
                  d="M10.35 8.98H14v1.63c.52-.98 1.52-1.75 3.14-1.75 2.25 0 3.86 1.47 3.86 4.63V21h-3.96v-6.19c0-1.4-.5-2.36-1.76-2.36-.96 0-1.53.65-1.78 1.27-.09.2-.12.48-.12.76V21H10.4l-.05-12.02z"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatsAndClientsSection;
