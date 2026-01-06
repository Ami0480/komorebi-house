import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about-section" className="about-section">
      <div className="about-container">
        {/* Main content */}
        <div className="about-content">
          <p className="about-tagline">
            Keep it simple at this peaceful and centrally located space.
          </p>

          <p className="about-description">
            Nestled in the charming inner-city suburbs of Perth. A picturesque
            retreat for recharging between destinations or serving as your cozy
            home while you and your family explore the nearby city attractions.
          </p>

          <div className="about-decorative">
            <span className="about-line"></span>
            <p className="about-welcome">Welcome to Komorebi House</p>
            <span className="about-line"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
