import { useState } from "react";
import "./AmenitiesSection.css";

const spacesData = {
  bathroom: {
    name: "Bathroom",
    amenities: [
      { icon: "🛁", label: "Bath Tub" },
      { icon: "🚿", label: "Rain Shower" },
      { icon: "🧖🏼‍♀️", label: "Towels" },
      { icon: "🧴", label: "Shampoo, Conditioner & Body Wash" },
    ],
  },
  toilet: {
    name: "Toilet",
    amenities: [{ icon: "🧻", label: "Supplies Included" }],
  },
  kitchen: {
    name: "Kitchen",
    amenities: [
      { icon: "🍳", label: "IH Cooktop" },
      { icon: "🧊", label: "Refrigerator" },
      { icon: "☕", label: "Coffee Machine" },
      { icon: "🍽️", label: "Dishwasher" },
      { icon: "🥡", label: "Microwave" },
      { icon: "🍚", label: "Rice Cooker" },
      { icon: "🍴", label: "Cutleries" },
    ],
  },
  dining: {
    name: "Dining",
    amenities: [
      { icon: "🪑", label: "4-Seat Table" },
      { icon: "🧒", label: "High Chair for child" },
    ],
  },
  "bedroom-1": {
    name: "Bedroom 1",
    amenities: [
      { icon: "🛏️", label: "Queen Bed" },
      { icon: "👔", label: "Closet" },
      { icon: "❄️", label: "Air Conditioning & Heater" },
      { icon: "🪞", label: "Mirror" },
    ],
  },
  "bedroom-2": {
    name: "Bedroom 2",
    amenities: [
      { icon: "🛏️", label: "Double Beds" },
      { icon: "❄️", label: "Fan & Heater" },
    ],
  },
  living: {
    name: "Living",
    amenities: [
      { icon: "📺", label: "Smart TV" },
      { icon: "🛋️", label: "3-seat Sofa" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "📶", label: "High-Speed WiFi" },
    ],
  },
  balcony: {
    name: "Balcony",
    amenities: [
      { icon: "🌳", label: "Tree View" },
      { icon: "🪑", label: "Outdoor Seating" },
    ],
  },
};

export default function AmenitiesSection() {
  const [activeSpace, setActiveSpace] = useState(null);

  const handleSpaceClick = (spaceId) => {
    setActiveSpace(activeSpace === spaceId ? null : spaceId);
  };

  const handleClose = () => {
    setActiveSpace(null);
  };

  const activeSpaceData = activeSpace ? spacesData[activeSpace] : null;

  const SpaceButton = ({ id }) => {
    const space = spacesData[id];
    return (
      <button
        className={`floor-space ${id} ${activeSpace === id ? "active" : ""} ${
          activeSpace && activeSpace !== id ? "faded" : ""
        }`}
        onClick={() => handleSpaceClick(id)}
      >
        <span className="space-name-jp">{space.nameJp}</span>
        <span className="space-name">{space.name}</span>
      </button>
    );
  };

  return (
    <section id="amenities-section" className="amenities-section">
      {/* Asanoha Pattern Background */}
      <div className="asanoha-background" />
      <div className="asanoha-fade" />

      {/* Header */}
      <div className="amenities-header">
        <span className="amenities-line"></span>
        <h2 className="amenities-title">Spaces & Amenities</h2>
        <span className="amenities-line"></span>
      </div>

      {/* Instruction */}
      <p className="amenities-instruction">Select a space to explore</p>

      {/* Floor Plan Layout */}
      <div className="floor-plan">
        {/* Top Row: Bathroom, Toilet, Kitchen, Dining */}
        <div className="floor-row floor-row-top">
          <SpaceButton id="bathroom" />
          <SpaceButton id="toilet" />
          <SpaceButton id="kitchen" />
          <SpaceButton id="dining" />
        </div>

        {/* Middle Row: Bedroom 1, Bedroom 2, Living */}
        <div className="floor-row floor-row-middle">
          <SpaceButton id="bedroom-1" />
          <SpaceButton id="bedroom-2" />
          <SpaceButton id="living" />
        </div>

        {/* Bottom Row: Balcony */}
        <div className="floor-row floor-row-bottom">
          <SpaceButton id="balcony" />
        </div>
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
            </>
          )}
        </div>
      </div>
    </section>
  );
}
