import { useEffect, useRef, useState } from "react";
import "./AroundSection.css";

// Replace with your actual images
const aroundPlaces = [
  {
    id: 1,
    category: "Park",
    categoryEn: "Park",
    name: "Hyde Park",
    description:
      "A serene urban oasis perfect for morning jogs, afternoon picnics, or peaceful evening strolls. Features beautiful gardens, walking paths, and shaded areas.",
    distance: "5 min walk",
    image:
      "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    category: "Cafe",
    categoryEn: "Cafe",
    name: "Morning Brew",
    description:
      "Artisan coffee shop serving specialty single-origin beans and fresh pastries. A cozy spot to start your day or catch up on work with reliable WiFi.",
    distance: "2 min walk",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "Restaurant",
    categoryEn: "Restaurant",
    name: "Harvest Table",
    description:
      "Farm-to-table dining experience featuring seasonal Australian cuisine. Known for their weekend brunch and extensive natural wine selection.",
    distance: "4 min walk",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    category: "Shopping",
    categoryEn: "Shopping",
    name: "Local Market",
    description:
      "Weekly farmers market with fresh produce, artisan goods, and local crafts. Open every Saturday morning with live music and food stalls.",
    distance: "8 min walk",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    category: "Station",
    categoryEn: "Station",
    name: "Central Station",
    description:
      "Major transit hub connecting you to the city center, airport, and surrounding suburbs. Frequent services run throughout the day.",
    distance: "6 min walk",
    image:
      "https://images.unsplash.com/photo-1555448248-2571daf6344b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AroundSection() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textContainerRef.current || !sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const isInView =
        sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

      if (!isInView) return;

      const textItems =
        textContainerRef.current.querySelectorAll(".around-item");
      const containerTop = textContainerRef.current.getBoundingClientRect().top;

      textItems.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.top + itemRect.height / 2;
        const viewportCenter = window.innerHeight / 2;

        // Check if item center is near viewport center
        if (Math.abs(itemCenter - viewportCenter) < itemRect.height / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="around-section" className="around-section" ref={sectionRef}>
      {/* Header */}
      <div className="around-header">
        <span className="around-line"></span>
        <h2 className="around-title">Around Komorebi</h2>
        <span className="around-line"></span>
      </div>

      {/* Main Content */}
      <div className="around-content">
        {/* Left - Fixed Image */}
        <div className="around-image-container">
          <div className="around-image-sticky">
            {aroundPlaces.map((place, index) => (
              <div
                key={place.id}
                className={`around-image ${
                  index === activeIndex ? "active" : ""
                }`}
                style={{ backgroundImage: `url(${place.image})` }}
              />
            ))}
            <div className="around-image-overlay" />

            {/* Image Caption */}
            <div className="around-image-caption">
              <span className="caption-category">
                {aroundPlaces[activeIndex]?.category}
              </span>
              <span className="caption-distance">
                {aroundPlaces[activeIndex]?.distance}
              </span>
            </div>
          </div>
        </div>

        {/* Right - Scrolling Text */}
        <div className="around-text-container" ref={textContainerRef}>
          {aroundPlaces.map((place, index) => (
            <div
              key={place.id}
              className={`around-item ${index === activeIndex ? "active" : ""}`}
            >
              <div className="around-item-inner">
                <span className="item-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="item-category">{place.categoryEn}</span>
                <h3 className="item-name">{place.name}</h3>
                <p className="item-description">{place.description}</p>
                <span className="item-distance">{place.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="around-progress">
        {aroundPlaces.map((_, index) => (
          <div
            key={index}
            className={`progress-line ${
              index === activeIndex ? "active" : ""
            } ${index < activeIndex ? "passed" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}
