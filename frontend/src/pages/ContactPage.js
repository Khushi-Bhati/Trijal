import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ContactPage.css";
import SiteFooter from "../components/SiteFooter";
import contact from "./../assets/contact.jpg"

const fallbackRoles = [
  {
    title: "Marketing Manager",
    skills: [
      "Creating and maintaining client relationships",
      "Coaching and subordinate involvement",
      "Managing processes",
      "Self-motivated yet customer-focused",
      "Proficient in marketing research and statistical analysis",
      "Familiar with financial planning and strategy",
    ],
  },
  {
    title: "Costing Engineer",
    skills: [
      "Prepare and review cost estimates",
      "Coordinate with procurement for vendor quotations",
      "Support project managers with budgets and forecasts",
      "Analyze variances and recommend cost optimizations",
    ],
  },
];

const ContactPage = () => {
  const [roles, setRoles] = useState(fallbackRoles);
  const [openIndex, setOpenIndex] = useState(0);

  /* Career accordion form */
  const [careerForm, setCareerForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    designation: "",
    state: "",
    district: "",
    message: "",
    resumeName: "",
  });
  const [careerStatus, setCareerStatus] = useState(null);

  /* Contact "Send us a message" form */
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [contactStatus, setContactStatus] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/career-roles`);
        if (Array.isArray(data) && data.length) setRoles(data);
      } catch (err) {
        console.warn("Using fallback career roles", err?.message || err);
      }
    };
    load();
  }, []);

  /* Career form handlers */
  const handleCareerChange = (e) => {
    const { name, value } = e.target;
    setCareerForm((f) => ({ ...f, [name]: value }));
  };
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setCareerForm((f) => ({ ...f, resumeName: file?.name || "" }));
  };
  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    setCareerStatus("pending");
    try {
      const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
      await axios.post(`${base}/api/contact`, careerForm);
      setCareerStatus("success");
      setCareerForm({ firstName: "", lastName: "", email: "", phone: "", designation: "", state: "", district: "", message: "", resumeName: "" });
    } catch (err) {
      setCareerStatus("error");
      console.error(err);
    }
  };

  /* Contact form handlers */
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm((f) => ({ ...f, [name]: value }));
  };
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("pending");
    try {
      const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
      await axios.post(`${base}/api/contact`, {
        firstName: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        designation: contactForm.company,
        message: contactForm.message,
      });
      setContactStatus("success");
      setContactForm({ name: "", company: "", phone: "", email: "", message: "" });
    } catch (err) {
      setContactStatus("error");
      console.error(err);
    }
  };

  return (
    <>
      <div className="contact-page">

        {/* ── Career Hero ─────────────────────────────────────────── */}
        <div className="contact-hero">
          <div className="contact-hero__overlay">
            <span className="contact-hero__label">CONTACT</span>
          </div>
        </div>



        <div className="contact-help-intro">
          <p>Welcome to our Help Centre – your go-to resource for answers, assistance, and guidance.</p>
          <p>Discover comprehensive support, FAQs, and expert insights to ensure a seamless experience with our products and services.</p>
        </div>

        <div className="contact-content">

          {/* Left card — Get in touch */}
          <div className="contact-info-card">
            <span className="contact-card-label">Get in touch</span>
            <h3 className="contact-card-heading">Contact our sales</h3>
            <div className="contact-card-divider"></div>
            <ul className="contact-info-list">
              <li><a href="mailto:sales@trijal.com">sales@trijal.com</a></li>
              <li><a href="mailto:contact@trijal.com">contact@trijal.com</a></li>
              <li><a href="tel:+918588878612">+91 8588878612</a></li>
              <li><a href="tel:+918588878600">+91 8588878600</a></li>
            </ul>
          </div>

          {/* Right card — Send us a message */}
          <div className="contact-msg-card">
            <span className="contact-card-label">Send us a message</span>
            <h3 className="contact-card-heading">Contact our sales</h3>
            <div className="contact-card-divider"></div>
            <form className="contact-msg-form" onSubmit={handleContactSubmit}>
              <div className="grid two">
                <input name="name" value={contactForm.name} onChange={handleContactChange} type="text" placeholder="Name" required />
                <input name="company" value={contactForm.company} onChange={handleContactChange} type="text" placeholder="Company" />
              </div>
              <div className="grid two">
                <input name="phone" value={contactForm.phone} onChange={handleContactChange} type="tel" placeholder="Phone" />
                <input name="email" value={contactForm.email} onChange={handleContactChange} type="email" placeholder="Email" required />
              </div>
              <textarea name="message" value={contactForm.message} onChange={handleContactChange} rows="5" placeholder="Message"></textarea>
              <button type="submit" className="contact-send-btn" disabled={contactStatus === "pending"}>
                {contactStatus === "pending" ? "Sending..." : "Send"}
              </button>
              {contactStatus === "success" && <p className="form-status success">Message sent successfully!</p>}
              {contactStatus === "error" && <p className="form-status error">Something went wrong. Please try again.</p>}
            </form>
          </div>

        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
