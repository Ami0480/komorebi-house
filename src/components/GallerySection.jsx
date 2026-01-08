import { useEffect, useRef, useState } from "react";
import "./GallerySection.css";

import LivingRoom from "../assets/lounge-dining.jpg";
import Balcony from "../assets/outdoor.jpg";
import Kitchen from "../assets/kitchen.jpg";
import Dining from "../assets/dining-kitchen.jpg";
import Master from "../assets/master.jpg";
import BathRoom from "../assets/bathroom.jpg";
import BedRoom from "../assets/bedroom-1.jpg";

// Replace these with your actual images
const galleryImages = [
  {
    id: 1,
    src: LivingRoom,
    title: "Living Room",
  },
  {
    id: 2,
    src: Balcony,
    title: "Exterior",
  },
  {
    id: 3,
    src: Kitchen,
    title: "Kitchen",
  },
  {
    id: 4,
    src: Dining,
    title: "Dining Area",
  },
  {
    id: 5,
    src: Master,
    title: "Master Bedroom",
  },
  {
    id: 6,
    src: BathRoom,
    title: "Bathroom",
  },
  {
    id: 7,
    src: BedRoom,
    title: "Second Bedroom",
  },
];

export default function GallerySection() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation functions
  const scrollToAbout = () => {
    document.getElementById("amenities-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollToAround = () => {
    document.getElementById("around-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled through the section
      const scrollProgress = -sectionTop / (sectionHeight - windowHeight);

      // Clamp between 0 and 1
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

      // Calculate which card should be active (0 to 7)
      const newIndex = Math.min(
        galleryImages.length - 1,
        Math.floor(clampedProgress * galleryImages.length)
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="gallery-section" className="gallery-section" ref={sectionRef}>
      {/* Sticky Container */}
      <div className="gallery-sticky">
        {/* Header - Fixed at top */}
        <div className="gallery-header">
          <span className="gallery-line"></span>
          <h2 className="gallery-title">Gallery</h2>
        </div>

        {/* Card Stack */}
        <div className="card-stack">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`gallery-card ${
                index <= activeIndex ? "visible" : ""
              } ${index === activeIndex ? "active" : ""}`}
              style={{
                zIndex: index,
              }}
            >
              <div
                className="card-image"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="card-overlay" />
              <div className="card-content">
                <h3 className="card-title">{image.title}</h3>
                <span className="card-number">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(galleryImages.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="gallery-nav">
          <button className="gallery-nav-btn nav-prev" onClick={scrollToAbout}>
            <span className="nav-arrow">←</span>
            <span className="nav-text">Back to Amenities</span>
          </button>
          <button className="gallery-nav-btn nav-next" onClick={scrollToAround}>
            <span className="nav-text">Skip to Around</span>
            <span className="nav-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
