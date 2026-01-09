import "./Navbar.css";

const navItems = [
  { id: "about-section", label: "About" },
  { id: "amenities-section", label: "Amenities" },
  { id: "gallery-section", label: "Gallery" },
  { id: "around-section", label: "Around" },
  { id: "contact-section", label: "Contact" },
];

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "instant",
    });
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navItems.map((item) => (
          <li key={item.id} className="navbar-item">
            <button
              className="navbar-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
