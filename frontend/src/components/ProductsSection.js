import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/ProductsSection.css";
import Image1 from "./../assets/medVoltage.jpg"
import Image2 from "./../assets/lowVoltage.jpg"
import Image3 from "./../assets/busduct.jpg"

const imageMap = {
  "MEDIUM VOLTAGE":
    Image1,
  "LOW VOLTAGE":
   Image2,
  BUSDUCTS:
   Image3,
}

const fallbackProducts = [
  {
    category: "MEDIUM VOLTAGE",
    title: "33kV, 6.6kV, 11kV HT Panels",
  },
  {
    category: "LOW VOLTAGE",
    title:
      "415V LT panels like PCC, MCC, PMCC, IMCC, PDB, MLDB, WRDB, APFC, power control and instrument junction boxes, signaling panels, synchronising panels etc.",
  },
  {
    category: "BUSDUCTS",
    title: "LT busducts and sandwich busduct",
  },
];

const ProductsSection = () => {
  const [products, setProducts] = useState(fallbackProducts);

  useEffect(() => {
    const load = async () => {
      try {
        const base = process.env.REACT_APP_API_BASE || "http://localhost:5000";
        const { data } = await axios.get(`${base}/api/products`);
        if (Array.isArray(data) && data.length) setProducts(data);
      } catch (err) {
        console.warn("Using fallback products", err?.message || err);
      }
    };
    load();
  }, []);

  return (
    <section className="products" id="products">
      <div className="products__header">
        <h2>Products</h2>
        <p>
          Explore our meticulously crafted range of products, designed to
          elevate your experience and meet your diverse needs. Backed by years
          of industry expertise and a commitment to quality, each product
          reflects our dedication to perfection. Discover the difference with
          our exceptional offerings.
        </p>
      </div>

      <div className="products__grid">
        {products.map((item, idx) => (
          <article key={item.title} className="product-card">
            <div className="product-card__image">
              <img
                src={
                  imageMap[item.category?.toUpperCase?.()] ||
                  item.image ||
                  Object.values(imageMap)[idx % Object.values(imageMap).length]
                }
                alt={item.category || item.title}
              />
            </div>
            <div className="product-card__body">
              <h3>{item.category || item.title}</h3>
              <p>{item.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
