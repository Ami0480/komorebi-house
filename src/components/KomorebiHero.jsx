import { useEffect, useState } from "react";
import "./KomorebiHero.css";

import DiningLounge from "../assets/dining-lounge.jpg";
import MasterBedroom from "../assets/master.jpg";
import Outdoor from "../assets/outdoor.jpg";

const backgroundImages = [DiningLounge, MasterBedroom, Outdoor];

export default function KomorebiHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero">
      {/* Ken Burns Background Slideshow */}
      <div className="background-slideshow">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`slide slide-${index + 1}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="overlay" />

      {/* Grain Texture */}
      <div className="grain" />

      {/* Corner Accents */}
      <div className={`corner-accent top-left ${loaded ? "visible" : ""}`}>
        <div className="line-h" />
        <div className="line-v" />
      </div>
      <div className={`corner-accent bottom-right ${loaded ? "visible" : ""}`}>
        <div className="line-h" />
        <div className="line-v" />
      </div>

      {/* Content */}
      <div className="content">
        {/* Decorative Line */}
        <div className={`decorative-line ${loaded ? "visible" : ""}`} />

        {/* Kanji */}
        <p className={`kanji ${loaded ? "visible" : ""}`}>木漏れ日</p>

        {/* Title */}
        <h1 className={`title ${loaded ? "visible" : ""}`}>Komorebi House</h1>

        {/* Subtitle */}
        <p className={`subtitle ${loaded ? "visible" : ""}`}>
          Simple living in soft, natural light
        </p>

        {/* CTA Button */}
        <button
          className={`cta-button ${loaded ? "visible" : ""}`}
          onClick={scrollToAbout}
        >
          <span className="btn-bg" />
          <span className="btn-text">Discover</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`scroll-indicator ${loaded ? "visible" : ""}`}
        onClick={scrollToAbout}
        style={{ cursor: "pointer" }}
      >
        <span className="scroll-text">Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
