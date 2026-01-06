import { useState } from "react";
import "./AmenitiesSection.css";

const spaces = [
  {
    id: "living-room",
    name: "Living Room",
    amenities: [
      { icon: "📺", label: "Smart TV" },
      { icon: "🛋️", label: "Sofa Bed" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "📶", label: "High-Speed WiFi" },
    ],
  },
  {
    id: "dining-room",
    name: "Dining Room",
    amenities: [
      { icon: "🪑", label: "6-Seat Table" },
      { icon: "💡", label: "Pendant Lighting" },
      { icon: "🪟", label: "Garden View" },
    ],
  },
  {
    id: "kitchen",
    name: "Kitchen",
    amenities: [
      { icon: "🍳", label: "Gas Stove" },
      { icon: "🧊", label: "Refrigerator" },
      { icon: "☕", label: "Coffee Machine" },
      { icon: "🍽️", label: "Dishwasher" },
      { icon: "🥡", label: "Microwave" },
    ],
  },
  {
    id: "bedroom-1",
    name: "Bedroom 1",
    amenities: [
      { icon: "🛏️", label: "King Bed" },
      { icon: "👔", label: "Walk-in Closet" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🪞", label: "Vanity Mirror" },
    ],
  },
  {
    id: "bedroom-2",
    name: "Bedroom 2",
    amenities: [
      { icon: "🛏️", label: "Twin Beds" },
      { icon: "📚", label: "Study Desk" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🧸", label: "Kid Friendly" },
    ],
  },
  {
    id: "bathroom",
    name: "Bathroom",
    amenities: [
      { icon: "🛁", label: "Soaking Tub" },
      { icon: "🚿", label: "Rain Shower" },
      { icon: "🧴", label: "Amenities Provided" },
      { icon: "💨", label: "Heated Floor" },
    ],
  },
  {
    id: "toilet",
    name: "Toilet",
    amenities: [
      { icon: "🚽", label: "Japanese Washlet" },
      { icon: "🧻", label: "Supplies Included" },
    ],
  },
  {
    id: "balcony",
    name: "Balcony",
    amenities: [
      { icon: "🌿", label: "Garden View" },
      { icon: "🪑", label: "Outdoor Seating" },
      { icon: "🌅", label: "Sunrise View" },
    ],
  },
];

export default function AmenitiesSection() {
  const [activeSpace, setActiveSpace] = useState(null);

  const handleSpaceClick = (spaceId) => {
    setActiveSpace(activeSpace === spaceId ? null : spaceId);
  };

  const handleClose = () => {
    setActiveSpace(null);
  };

  const activeSpaceData = spaces.find((s) => s.id === activeSpace);

  return (
    <section id="amenities-section" className="amenities-section">
      {/* Background decoration */}
      <div className="bg-background">
        <span className="bg-character">Spaces & Amenities</span>
      </div>

      {/* Header */}
      <div className="amenities-header">
        <span className="amenities-line"></span>
        <h2 className="amenities-title">Spaces & Amenities</h2>

        <span className="amenities-line"></span>
      </div>

      {/* Instruction */}
      <p className="amenities-instruction">Select a space to explore</p>

      {/* Ma-style floating spaces */}
      <div className="ma-container">
        {spaces.map((space, index) => (
          <button
            key={space.id}
            className={`ma-space ma-space-${index + 1} ${
              activeSpace === space.id ? "active" : ""
            } ${activeSpace && activeSpace !== space.id ? "faded" : ""}`}
            onClick={() => handleSpaceClick(space.id)}
          >
            <span className="space-name-jp">{space.nameJp}</span>
            <span className="space-name">{space.name}</span>
          </button>
        ))}
      </div>

      {/* Amenities Modal/Overlay */}
      <div
        className={`amenities-overlay ${activeSpace ? "visible" : ""}`}
        onClick={handleClose}
      >
        <div
          className={`amenities-modal ${activeSpace ? "zoom-in" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {activeSpaceData && (
            <>
              <button className="modal-close" onClick={handleClose}>
                ✕
              </button>

              <div className="modal-header">
                <span className="modal-name-jp">{activeSpaceData.nameJp}</span>
                <h3 className="modal-name">{activeSpaceData.name}</h3>
              </div>

              <div className="modal-amenities">
                {activeSpaceData.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="amenity-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="amenity-icon">{amenity.icon}</span>
                    <span className="amenity-label">{amenity.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-decoration">
                <span className="modal-dot"></span>
                <span className="modal-dot"></span>
                <span className="modal-dot"></span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
