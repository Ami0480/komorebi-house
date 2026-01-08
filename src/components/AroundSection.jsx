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
    name: "Emmerson's Cafe",
    description:
      "Local go-to for coffee, fresh lunch options and sweet treats. Open early for breakfast and lunch. A cozy spot to start your day or catch up on work with reliable WiFi.",
    distance: "2 min walk",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 3,
    category: "Cafe",
    categoryEn: "Cafe",
    name: "Pala",
    description:
      "Asian fusion with a Fillipino Twist. Open breakfast and lunch. Recommend the breakfast burrito and donuts.",
    distance: "10 min walk",
    image:
      "https://images.unsplash.com/photo-1585938389612-a552a28d6914?auto=format&fit=crop&w=1200&q=80",
  },

  {
    id: 4,
    category: "Pub",
    categoryEn: "Pub",
    name: "The Paddo",
    description:
      "A local icon since 1932, The Paddington offers a historic venue to enjoy dining, drinks, sports, live music and a game of pool.",
    distance: "5 min drive",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    category: "Shopping",
    categoryEn: "Shopping",
    name: "Karrinyup Shopping Centre",
    description:
      "Karrinyup is Perth's premier retail venue and home to 290 stores including Zara, Sephora, H&M, UNIQLO, and heaps of restaurants.",
    distance: "15 min drive",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
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
    </section>
  );
}
