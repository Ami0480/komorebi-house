import "./ContactSection.css";

// Replace with your actual contact info
const contactData = {
  email: "hello@komorebi.house",
  phone: "+61 400 000 000",
  location: "Perth, Australia",
  airbnbUrl: "https://www.airbnb.com/rooms/your-listing-id",
};

export default function ContactSection() {
  return (
    <section id="contact-section" className="contact-section">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-line"></span>
        <h2 className="contact-title">Contact</h2>
        <span className="contact-line"></span>
      </div>

      {/* Divider */}
      <div className="contact-divider">
        <span></span>
      </div>

      {/* Contact Info */}
      <div className="contact-info">
        {/* Email */}
        <a href={`mailto:${contactData.email}`} className="contact-item">
          <span className="contact-icon">✉️</span>
          <span className="contact-label">Email</span>
          <span className="contact-value">{contactData.email}</span>
        </a>

        {/* Phone */}
        <a
          href={`tel:${contactData.phone.replace(/\s/g, "")}`}
          className="contact-item"
        >
          <span className="contact-icon">📞</span>
          <span className="contact-label">Phone</span>
          <span className="contact-value">{contactData.phone}</span>
        </a>

        {/* Location */}
        <div className="contact-item">
          <span className="contact-icon">📍</span>
          <span className="contact-label">Location</span>
          <span className="contact-value">{contactData.location}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="contact-divider">
        <span></span>
      </div>

      {/* Footer Note */}
      <p className="contact-note">We typically respond within 24 hours</p>
    </section>
  );
}
